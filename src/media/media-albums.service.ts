import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { CreateMediaAlbumDto } from './dto/create-media-album.dto';
import { UpdateMediaAlbumDto } from './dto/update-media-album.dto';
import { QueryMediaAlbumDto } from './dto/query-media-album.dto';
import { buildMultilangSearchWhere } from '../common/helpers/multilang-search.helper';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { normalizeName } from '../common/helpers/normalize-name.helper';
import { MediaType } from '../core/database/generated';

@Injectable()
export class MediaAlbumsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(creatorId: string, createDto: CreateMediaAlbumDto, file?: Express.Multer.File) {
    let fileInfo: any = null;
    if (file) {
      fileInfo = await this.storageService.saveFile(file, 'media_albums');
    }

    const title_latin = normalizeName(createDto.title_latin);
    const title_cyril = normalizeName(createDto.title_cyril);
    const title_ru = normalizeName(createDto.title_ru);

    const data = {
      ...createDto,
      title_latin, title_cyril, title_ru,
      creator_id: creatorId,
      ...(fileInfo && { cover_image: fileInfo.url }),
    };
    return this.prisma.mediaAlbum.create({ data });
  }

  async findAll(query: QueryMediaAlbumDto) {
    const { page, limit, skip } = buildPaginationParams(query);
    const where: any = {};
    
    if (query.type) {
      where.type = query.type;
    }
    
    if (query.search) {
      const searchWhere = buildMultilangSearchWhere(query.search, 'title');
      Object.assign(where, searchWhere);
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.mediaAlbum.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { created_at: 'desc' },
        include: { creator: { select: { id: true, full_name: true } }, items: true },
      }),
      this.prisma.mediaAlbum.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.mediaAlbum.findUnique({
      where: { id },
      include: { creator: { select: { id: true, full_name: true } }, items: { orderBy: { order: 'asc' } } },
    });
    if (!item) throw new NotFoundException('Album not found');
    return item;
  }

  async update(id: string, updateDto: UpdateMediaAlbumDto, file?: Express.Multer.File) {
    const existing = await this.findOne(id);
    
    let fileUpdateData: any = {};
    if (file) {
      const fileInfo = existing.cover_image 
        ? await this.storageService.replaceFile(existing.cover_image, file, 'media_albums')
        : await this.storageService.saveFile(file, 'media_albums');
      fileUpdateData = { cover_image: fileInfo.url };
    }

    const title_latin = updateDto.title_latin ? normalizeName(updateDto.title_latin) : undefined;
    const title_cyril = updateDto.title_cyril ? normalizeName(updateDto.title_cyril) : undefined;
    const title_ru = updateDto.title_ru ? normalizeName(updateDto.title_ru) : undefined;

    return this.prisma.mediaAlbum.update({
      where: { id },
      data: { ...updateDto, ...fileUpdateData, ...(title_latin && {title_latin}), ...(title_cyril && {title_cyril}), ...(title_ru && {title_ru}) },
    });
  }

  async remove(id: string) {
    const existing = await this.findOne(id);
    
    // Delete all item files
    const fileUrls = existing.items.map(item => item.url);
    if (existing.cover_image) fileUrls.push(existing.cover_image);

    await Promise.allSettled(fileUrls.map(url => this.storageService.deleteFile(url)));
    
    return this.prisma.mediaAlbum.delete({ where: { id } });
  }

  async addItems(albumId: string, files: Express.Multer.File[]) {
    const album = await this.findOne(albumId);
    
    for (const file of files) {
      const isVideo = file.mimetype.startsWith('video/') || file.originalname.match(/\.(mp4|avi|mkv|mov|webm)$/i);
      const isPhoto = file.mimetype.startsWith('image/') || file.originalname.match(/\.(jpg|jpeg|png|webp)$/i);
      const isPresentation = file.originalname.match(/\.(pdf|ppt|pptx)$/i);

      if (album.type === MediaType.PHOTO && !isPhoto) throw new BadRequestException('Only photos allowed in PHOTO album');
      if (album.type === MediaType.VIDEO && !isVideo) throw new BadRequestException('Only videos allowed in VIDEO album');
      if (album.type === MediaType.PRESENTATION && !isPresentation) throw new BadRequestException('Only presentations allowed in PRESENTATION album');
    }

    const savedFiles = await Promise.all(
      files.map(f => this.storageService.saveFile(f, 'media_items'))
    );

    const itemsData = savedFiles.map((sf, index) => ({
      album_id: albumId,
      url: sf.url,
      file_name: sf.fileName,
      file_size: sf.fileSize,
      order: index,
    }));

    await this.prisma.mediaItem.createMany({ data: itemsData });
    return this.findOne(albumId);
  }

  async removeItem(albumId: string, itemId: string) {
    const item = await this.prisma.mediaItem.findUnique({ where: { id: itemId } });
    if (!item) throw new NotFoundException('Item not found');
    if (item.album_id !== albumId) throw new BadRequestException('Item does not belong to this album');

    await this.storageService.deleteFile(item.url);
    return this.prisma.mediaItem.delete({ where: { id: itemId } });
  }
}
