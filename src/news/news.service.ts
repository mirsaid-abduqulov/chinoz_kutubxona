import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { QueryNewsDto } from './dto/query-news.dto';
import { buildMultilangSearchWhere } from '../common/helpers/multilang-search.helper';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { normalizeName } from '../common/helpers/normalize-name.helper';

@Injectable()
export class NewsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(creatorId: string, createDto: CreateNewsDto, file?: Express.Multer.File) {
    let fileInfo: any = null;
    if (file) {
      fileInfo = await this.storageService.saveFile(file, 'news');
    }

    const title_latin = createDto.title_latin ? normalizeName(createDto.title_latin) : undefined;
    const title_cyril = createDto.title_cyril ? normalizeName(createDto.title_cyril) : undefined;
    const title_ru = createDto.title_ru ? normalizeName(createDto.title_ru) : undefined;

    
    const data = {
      ...createDto,
      title_latin, title_cyril, title_ru,
      creator_id: creatorId,
      ...(fileInfo && { cover_image: fileInfo.url }),
    };
    return this.prisma.news.create({ data });
    
  }

  async findAll(query: QueryNewsDto, userId?: string) {
    const { page, limit, skip } = buildPaginationParams(query);
    
    // Default conditions
    const where: any = {};
    
    
    if (query.is_published !== undefined) {
      where.is_published = query.is_published;
    } else {
      where.is_published = true;
    }
    
    
    if (query.search) {
      const searchWhere = buildMultilangSearchWhere(query.search, 'title');
      Object.assign(where, searchWhere);
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.news.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { 'published_at': 'desc' },
        include: { creator: { select: { id: true, full_name: true } } },
      }),
      this.prisma.news.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string, isAdmin = false) {
    const item = await this.prisma.news.findUnique({
      where: { id },
      include: { creator: { select: { id: true, full_name: true } } },
    });
    if (!item) throw new NotFoundException('News not found');

    
    if (!item.is_published && !isAdmin) {
      throw new NotFoundException('News not found');
    }
    if (!isAdmin) {
      await this.prisma.news.update({ where: { id }, data: { views_count: { increment: 1 } } }).catch(() => {});
    }
    

    

    return item;
  }

  async update(id: string, updateDto: UpdateNewsDto, file?: Express.Multer.File) {
    const existing = await this.findOne(id, true);
    
    let fileUpdateData: any = {};
    if (file) {
      
      const fileInfo = existing.cover_image 
        ? await this.storageService.replaceFile(existing.cover_image, file, 'news')
        : await this.storageService.saveFile(file, 'news');
      fileUpdateData = { cover_image: fileInfo.url };
      
    }

    const title_latin = updateDto.title_latin ? normalizeName(updateDto.title_latin) : undefined;
    const title_cyril = updateDto.title_cyril ? normalizeName(updateDto.title_cyril) : undefined;
    const title_ru = updateDto.title_ru ? normalizeName(updateDto.title_ru) : undefined;

    return this.prisma.news.update({
      where: { id },
      data: { ...updateDto, ...fileUpdateData, ...(title_latin && {title_latin}), ...(title_cyril && {title_cyril}), ...(title_ru && {title_ru}) },
    });
  }

  async remove(id: string) {
    const existing = await this.findOne(id, true);
    
    
    if (existing.cover_image) {
      await this.storageService.deleteFile(existing.cover_image);
    }
    
    
    return this.prisma.news.delete({ where: { id } });
  }

  
}
