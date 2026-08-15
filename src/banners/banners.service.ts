import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { BaseQueryDto } from '../common/dto/base-query.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { normalizeName } from '../common/helpers/normalize-name.helper';

@Injectable()
export class BannersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(createBannerDto: CreateBannerDto, image: Express.Multer.File) {
    const { url } = await this.storageService.saveFile(image, 'banners');

    const banner = await this.prisma.banner.create({
      data: {
        ...createBannerDto,
        title_latin: createBannerDto.title_latin ? normalizeName(createBannerDto.title_latin) : null,
        title_cyril: createBannerDto.title_cyril ? normalizeName(createBannerDto.title_cyril) : null,
        title_ru: createBannerDto.title_ru ? normalizeName(createBannerDto.title_ru) : null,
        image_url: url,
      },
    });

    return banner;
  }

  async findAllActive(query: BaseQueryDto) {
    const { skip, take } = buildPaginationParams(query);
    
    const [data, total] = await Promise.all([
      this.prisma.banner.findMany({
        where: { is_active: true },
        skip,
        take,
        orderBy: { order: 'asc' },
      }),
      this.prisma.banner.count({ where: { is_active: true } }),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async findAll(query: BaseQueryDto) {
    const { skip, take } = buildPaginationParams(query);
    
    const [data, total] = await Promise.all([
      this.prisma.banner.findMany({
        skip,
        take,
        orderBy: { order: 'asc' },
      }),
      this.prisma.banner.count(),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async update(id: string, updateBannerDto: UpdateBannerDto, image?: Express.Multer.File) {
    const banner = await this.prisma.banner.findUnique({ where: { id } });
    if (!banner) throw new NotFoundException('Banner not found');

    let imageUrl = banner.image_url;

    if (image) {
      await this.storageService.deleteFile(imageUrl);
      const saved = await this.storageService.saveFile(image, 'banners');
      imageUrl = saved.url;
    }

    const updated = await this.prisma.banner.update({
      where: { id },
      data: {
        ...updateBannerDto,
        title_latin: updateBannerDto.title_latin ? normalizeName(updateBannerDto.title_latin) : updateBannerDto.title_latin,
        title_cyril: updateBannerDto.title_cyril ? normalizeName(updateBannerDto.title_cyril) : updateBannerDto.title_cyril,
        title_ru: updateBannerDto.title_ru ? normalizeName(updateBannerDto.title_ru) : updateBannerDto.title_ru,
        image_url: imageUrl,
      },
    });

    return updated;
  }

  async remove(id: string) {
    const banner = await this.prisma.banner.findUnique({ where: { id } });
    if (!banner) throw new NotFoundException('Banner not found');

    await this.storageService.deleteFile(banner.image_url);
    await this.prisma.banner.delete({ where: { id } });

    return { success: true };
  }
}
