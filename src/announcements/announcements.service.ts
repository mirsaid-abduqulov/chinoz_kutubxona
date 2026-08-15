import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { BaseQueryDto } from '../common/dto/base-query.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';

@Injectable()
export class AnnouncementsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(userId: string, createAnnouncementDto: CreateAnnouncementDto, coverImage?: Express.Multer.File) {
    let imageUrl: string | null = null;
    
    if (coverImage) {
      const saved = await this.storageService.saveFile(coverImage, 'announcements');
      imageUrl = saved.url;
    }

    const announcement = await this.prisma.announcement.create({
      data: {
        ...createAnnouncementDto,
        cover_image: imageUrl,
        creator_id: userId,
      },
    });

    return announcement;
  }

  async findAllPublished(query: BaseQueryDto) {
    const { skip, take } = buildPaginationParams(query);
    
    const [data, total] = await Promise.all([
      this.prisma.announcement.findMany({
        where: { is_published: true },
        skip,
        take,
        orderBy: { published_at: 'desc' },
        include: {
          creator: {
            select: { id: true, full_name: true }
          }
        }
      }),
      this.prisma.announcement.count({ where: { is_published: true } }),
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

  async update(id: string, updateAnnouncementDto: UpdateAnnouncementDto, coverImage?: Express.Multer.File) {
    const announcement = await this.prisma.announcement.findUnique({ where: { id } });
    if (!announcement) throw new NotFoundException('Announcement not found');

    let imageUrl = announcement.cover_image;

    if (coverImage) {
      if (imageUrl) {
        await this.storageService.deleteFile(imageUrl);
      }
      const saved = await this.storageService.saveFile(coverImage, "announcements");
      imageUrl = saved.url;
    }

    const updated = await this.prisma.announcement.update({
      where: { id },
      data: {
        ...updateAnnouncementDto,
        cover_image: imageUrl,
      },
    });

    return updated;
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
}
