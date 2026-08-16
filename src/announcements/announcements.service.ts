import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { BaseQueryDto } from '../common/dto/base-query.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { IsPublishedDto } from './dto/is_published.dto';
import { normalizeName } from 'src/common/helpers/normalize-name.helper';
import { FindAllQueryDto } from './dto/findAllQuerry.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) { }

  async create(
    userId: string,
    createAnnouncementDto: CreateAnnouncementDto,
    coverImage?: Express.Multer.File,
  ) {
    if (!createAnnouncementDto.title_latin?.trim() ||
      !createAnnouncementDto.title_cyril?.trim() ||
      !createAnnouncementDto.title_ru?.trim()) {
      throw new BadRequestException('Barcha tillardagi sarlavha majburiy');
    }
    if (!createAnnouncementDto.content_latin?.trim() ||
      !createAnnouncementDto.content_cyril?.trim() ||
      !createAnnouncementDto.content_ru?.trim()) {
      throw new BadRequestException('Barcha tillardagi matn majburiy');
    }

    let imageUrl: string | null = null;
    if (coverImage) {
      try {
        const saved = await this.storageService.saveFile(coverImage, 'announcements');
        imageUrl = saved.url;
      } catch (error) {
        throw new BadRequestException('Rasmni saqlashda xato: ' + error.message);
      }
    }

    try {
      const announcement = await this.prisma.announcement.create({
        data: {
          title_latin: normalizeName(createAnnouncementDto.title_latin),
          title_cyril: normalizeName(createAnnouncementDto.title_cyril),
          title_ru: normalizeName(createAnnouncementDto.title_ru),
          content_latin: createAnnouncementDto.content_latin.trim(),
          content_cyril: createAnnouncementDto.content_cyril.trim(),
          content_ru: createAnnouncementDto.content_ru.trim(),
          cover_image: imageUrl,
          is_published: createAnnouncementDto.is_published ?? true,
          creator_id: userId,
        },
        include: { creator: { select: { id: true, full_name: true } } },
      });
      return announcement;
    } catch (error) {
      if (imageUrl) {
        await this.storageService.deleteFile(imageUrl);
      }
      throw error;
    }
  }

  async findAllPublished(query: FindAllQueryDto) {
    const { skip, take } = buildPaginationParams(query);

    const where: any = {is_published:query.is_published}
      if(query.search){
        where.OR=[{
          title_latin: {contains:query.search}
        },{
          title_cyril: {contains:query.search}
        },{
          title_ru: {contains:query.search}
        },{
          content_latin: {contains:query.search}
        },{
          content_cyril: {contains:query.search}
        },{
          content_ru: {contains:query.search}
        }]
      }
    const [data, total] = await Promise.all([
      this.prisma.announcement.findMany({
        where,
        skip,
        take,
        orderBy: { published_at: 'desc' },
        include: {
          creator: {
            select: { id: true, full_name: true }
          }
        }
      }),
      this.prisma.announcement.count({ where }),
    ]);

    return buildPaginatedResponse(data, total, query.page!, query.limit!);
  }

  async findOne(id: string) {
    const announcement = await this.prisma.announcement.findUnique({
      where: { id },
      include: {
        creator: {
          select: { id: true, full_name: true }
        }
      }
    });

    if (!announcement) throw new NotFoundException('Announcement not found');
    return announcement;
  }

  async update(
    id: string,
    updateAnnouncementDto: UpdateAnnouncementDto,
    coverImage?: Express.Multer.File,
  ) {
    // 1. E'lon mavjudligini tekshir
    const announcement = await this.prisma.announcement.findUnique({
      where: { id },
    });

    if (!announcement) {
      throw new NotFoundException('E\'lon topilmadi');
    }

    // 2. Rasm almashtirish (agar yangi kelsa)
    let newImageUrl: string | null = null;
    if (coverImage) {
      try {
        const saved = await this.storageService.saveFile(coverImage, 'announcements');
        newImageUrl = saved.url;
      } catch (error) {
        throw new BadRequestException('Rasmni saqlashda xato: ' + error.message);
      }
    }

    // 3. Yangilash uchun data tayyorlash
    const data: any = {};

    if (updateAnnouncementDto.title_latin !== undefined) {
      data.title_latin = normalizeName(updateAnnouncementDto.title_latin);
    }
    if (updateAnnouncementDto.title_cyril !== undefined) {
      data.title_cyril = normalizeName(updateAnnouncementDto.title_cyril);
    }
    if (updateAnnouncementDto.title_ru !== undefined) {
      data.title_ru = normalizeName(updateAnnouncementDto.title_ru);
    }
    if (updateAnnouncementDto.content_latin !== undefined) {
      data.content_latin = updateAnnouncementDto.content_latin.trim();
    }
    if (updateAnnouncementDto.content_cyril !== undefined) {
      data.content_cyril = updateAnnouncementDto.content_cyril.trim();
    }
    if (updateAnnouncementDto.content_ru !== undefined) {
      data.content_ru = updateAnnouncementDto.content_ru.trim();
    }
    if (updateAnnouncementDto.is_published !== undefined) {
      data.is_published = updateAnnouncementDto.is_published;
    }

    if (newImageUrl) {
      data.cover_image = newImageUrl;
    }
    try {
      const updated = await this.prisma.announcement.update({
        where: { id },
        data,
        include: { creator: { select: { id: true, full_name: true } } },
      });

      if (newImageUrl && announcement.cover_image) {
        await this.storageService.deleteFile(announcement.cover_image);
      }

      return updated;
    } catch (error) {
      if (newImageUrl) {
        await this.storageService.deleteFile(newImageUrl);
      }
      throw error;
    }
  }

  async remove(id: string) {
    const announcement = await this.prisma.announcement.findUnique({ where: { id } });
    if (!announcement) throw new NotFoundException('Announcement not found');

    if (announcement.cover_image) {
      await this.storageService.deleteFile(announcement.cover_image);
    }

    await this.prisma.announcement.delete({ where: { id } });

    return { success: true };
  }

  async updateIsPublish(id: string, dto: IsPublishedDto) {
    const announcement = await this.prisma.announcement.findUnique({ where: { id } });
    if (!announcement) throw new NotFoundException('Announcement not found');

    const updated = await this.prisma.announcement.update({
      where: { id },
      data: {
        is_published: dto.is_published,
        published_at: dto.is_published ? new Date() : undefined,
      },
    });

    return updated;
  }
}
