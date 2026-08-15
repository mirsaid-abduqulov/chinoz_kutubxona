import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { QueryAuthorDto } from './dto/query-author.dto';
import { PrismaService } from 'src/core/database/prisma.service';
import { normalizeName } from 'src/common/helpers/normalize-name.helper';
import { StorageService } from 'src/common/storage/storage.service';
import { buildPaginatedResponse, buildPaginationParams } from 'src/common/helpers/pagination.helper';
import { buildMultilangSearchWhere } from 'src/common/helpers/multilang-search.helper';

@Injectable()
export class AuthorsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(dto: CreateAuthorDto) {
    const normalizedName = normalizeName(dto.full_name_latin);
    const normalizedNameCyril = normalizeName(dto.full_name_cyril);
    const normalizedNameRu = normalizeName(dto.full_name_ru);

    const existing = await this.prisma.author.findFirst({
      where: {
        OR: [
          { full_name_latin: normalizedName },
          { full_name_cyril: normalizedNameCyril },
          { full_name_ru: normalizedNameRu },
        ],
      },
    });

    if (existing) {
      throw new ConflictException('Yaratilayotgan 3 xil ismdan biri yoki bir nechtasi allaqachon mavjud');
    }

    dto.birth_date = dto.birth_date?.trim();
    dto.death_date = dto.death_date?.trim();

    const data = {
      ...dto,
      full_name_latin: normalizeName(dto.full_name_latin),
      full_name_cyril: normalizeName(dto.full_name_cyril),
      full_name_ru: normalizeName(dto.full_name_ru),
      biography_latin: dto.biography_latin?.trim(),
      biography_cyril: dto.biography_cyril?.trim(),
      biography_ru: dto.biography_ru?.trim(),
      nationality_latin: dto.nationality_latin?.trim(),
      nationality_cyril: dto.nationality_cyril?.trim(),
      nationality_ru: dto.nationality_ru?.trim(),
    };

    return this.prisma.author.create({ data });
  }

  async findAll(query: QueryAuthorDto) {
    const { skip, take, page, limit } = buildPaginationParams(query);
    
    const conditions: any[] = [];
    if (query.search) {
      conditions.push(buildMultilangSearchWhere(query.search, 'full_name'));
    }

    const where = conditions.length > 0 ? { AND: conditions } : {};
    
    const ALLOWED_SORT_FIELDS = ['created_at', 'updated_at', 'full_name_latin', 'rating_score'];
    const sortBy = ALLOWED_SORT_FIELDS.includes(query.sortBy as string) ? query.sortBy : 'created_at';

    const [authors, total] = await Promise.all([
      this.prisma.author.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy as string]: query.sortOrder },
        include: {
          images: {
            where: { is_main: true },
            take: 1,
          },
        },
      }),
      this.prisma.author.count({ where }),
    ]);

    return buildPaginatedResponse(authors, total, page, limit);
  }

  async findOne(id: string) {
    const author = await this.prisma.author.findUnique({
      where: { id },
      include: { images: true },
    });
    if (!author) throw new NotFoundException('Author not found');
    return author;
  }

  async update(id: string, dto: UpdateAuthorDto) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) throw new NotFoundException('Author not found');

    const data: any = { ...dto };
    if (dto.full_name_latin) data.full_name_latin = normalizeName(dto.full_name_latin);
    if (dto.full_name_cyril) data.full_name_cyril = normalizeName(dto.full_name_cyril);
    if (dto.full_name_ru) data.full_name_ru = normalizeName(dto.full_name_ru);
    
    if (dto.biography_latin !== undefined) data.biography_latin = dto.biography_latin?.trim();
    if (dto.biography_cyril !== undefined) data.biography_cyril = dto.biography_cyril?.trim();
    if (dto.biography_ru !== undefined) data.biography_ru = dto.biography_ru?.trim();
    
    if (dto.nationality_latin !== undefined) data.nationality_latin = dto.nationality_latin?.trim();
    if (dto.nationality_cyril !== undefined) data.nationality_cyril = dto.nationality_cyril?.trim();
    if (dto.nationality_ru !== undefined) data.nationality_ru = dto.nationality_ru?.trim();

    if(dto.birth_date !== undefined) {
      if(dto.birth_date.trim() === '') {
        data.birth_date = null;
      } else {
        data.birth_date = dto.birth_date.trim();
      }
    }
    if(dto.death_date !== undefined) {
      if(dto.death_date.trim() === '') {
        data.death_date = null;
      } else {
        data.death_date = dto.death_date.trim();
      }
    }

    return this.prisma.author.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const author = await this.prisma.author.findUnique({
      where: { id },
      include: { images: true },
    });
    
    if (!author) throw new NotFoundException('Author not found');

    const imageUrls = author.images.map((img) => img.url);

    // DB delete first, cascade deletes the images rows
    await this.prisma.author.delete({ where: { id } });

    // Then delete files from disk
    if (imageUrls.length > 0) {
      await Promise.allSettled(
        imageUrls.map((url) => this.storageService.deleteFile(url))
      );
    }

    return { success: true };
  }

  // --- Sub-resources: Images ---

  async addImages(authorId: string, files: Express.Multer.File[]) {
    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
      include: { images: true },
    });
    
    if (!author) throw new NotFoundException('Author not found');
    if (!files || files.length === 0) throw new BadRequestException('No files provided');

    const hasMain = author.images.some((img) => img.is_main);

    // Determine the highest order to append new images
    const currentMaxOrder = author.images.length > 0 
      ? Math.max(...author.images.map((img) => img.order)) 
      : -1;

    const savedFilesInfo = await Promise.all(
      files.map((file) => this.storageService.saveFile(file, 'author_images').catch(e => null))
    );

    const validFilesInfo = savedFilesInfo.filter(info => info !== null);
    
    if (validFilesInfo.length === 0) {
      throw new BadRequestException('Failed to upload images');
    }

    let isFirstImage = !hasMain;
    const dbImages: any[] = [];
    let orderCounter = currentMaxOrder + 1;

    for (const info of validFilesInfo) {
      try {
        const image = await this.prisma.authorImage.create({
          data: {
            author_id: authorId,
            url: info.url,
            is_main: isFirstImage,
            order: orderCounter++,
          },
        });
        dbImages.push(image);
        isFirstImage = false; // only the first one of the batch gets to be main if there wasn't one
      } catch (error) {
        // Rollback: DB write failed, delete file
        await this.storageService.deleteFile(info.url);
      }
    }

    return dbImages;
  }

  async getImages(authorId: string) {
    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
      include: { images: { orderBy: { order: 'asc' } } },
    });
    if (!author) throw new NotFoundException('Author not found');
    return author.images;
  }

  async setMainImage(authorId: string, imageId: string) {
    const image = await this.prisma.authorImage.findFirst({
      where: { id: imageId, author_id: authorId },
    });

    if (!image) throw new NotFoundException('Image not found for this author');

    await this.prisma.$transaction([
      // Set all to false
      this.prisma.authorImage.updateMany({
        where: { author_id: authorId },
        data: { is_main: false },
      }),
      // Set the specific one to true
      this.prisma.authorImage.update({
        where: { id: imageId },
        data: { is_main: true },
      }),
    ]);

    return { success: true };
  }

  async removeImage(authorId: string, imageId: string) {
    const image = await this.prisma.authorImage.findFirst({
      where: { id: imageId, author_id: authorId },
    });

    if (!image) throw new NotFoundException('Image not found');

    const wasMain = image.is_main;

    await this.prisma.authorImage.delete({ where: { id: imageId } });
    await this.storageService.deleteFile(image.url);

    // If we deleted the main image, make another one main if exists
    if (wasMain) {
      const remainingImage = await this.prisma.authorImage.findFirst({
        where: { author_id: authorId },
        orderBy: { order: 'asc' },
      });
      if (remainingImage) {
        await this.prisma.authorImage.update({
          where: { id: remainingImage.id },
          data: { is_main: true },
        });
      }
    }

    return { success: true };
  }
}
