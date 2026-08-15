import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { CreateDocumentsDto } from './dto/create-documents.dto';
import { UpdateDocumentsDto } from './dto/update-documents.dto';
import { QueryDocumentsDto } from './dto/query-documents.dto';
import { buildMultilangSearchWhere } from '../common/helpers/multilang-search.helper';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { normalizeName } from '../common/helpers/normalize-name.helper';

@Injectable()
export class DocumentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(creatorId: string, createDto: CreateDocumentsDto, file?: Express.Multer.File) {
    let fileInfo: any = null;
    if (file) {
      fileInfo = await this.storageService.saveFile(file, 'documents');
    }

    const title_latin = normalizeName(createDto.title_latin);
    const title_cyril = normalizeName(createDto.title_cyril);
    const title_ru = normalizeName(createDto.title_ru);

    
    if (!file) throw new NotFoundException('Document file is required');
    const data = {
      ...createDto,
      title_latin,
      title_cyril,
      title_ru,
      creator_id: creatorId,
      file_url: fileInfo!.url,
      file_name: fileInfo!.fileName,
      file_size: fileInfo!.fileSize,
    };
    return this.prisma.document.create({ data });
    
  }

  async findAll(query: QueryDocumentsDto, userId?: string) {
    const { page, limit, skip } = buildPaginationParams(query);
    
    // Default conditions
    const where: any = {};
    
    
    if (query.category) {
      where.category = query.category;
    }
    
    
    if (query.search) {
      const searchWhere = buildMultilangSearchWhere(query.search, 'title');
      Object.assign(where, searchWhere);
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.document.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { 'created_at': 'desc' },
        include: { creator: { select: { id: true, full_name: true } } },
      }),
      this.prisma.document.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string, isAdmin = false) {
    const item = await this.prisma.document.findUnique({
      where: { id },
      include: { creator: { select: { id: true, full_name: true } } },
    });
    if (!item) throw new NotFoundException('Documents not found');

    

    

    return item;
  }

  async update(id: string, updateDto: UpdateDocumentsDto, file?: Express.Multer.File) {
    const existing = await this.findOne(id, true);
    
    let fileUpdateData: any = {};
    if (file) {
      
      const fileInfo = await this.storageService.replaceFile(existing.file_url, file, 'documents');
      fileUpdateData = { file_url: fileInfo!.url, file_name: fileInfo!.fileName, file_size: fileInfo!.fileSize };
      
    }

    const title_latin = updateDto.title_latin ? normalizeName(updateDto.title_latin) : undefined;
    const title_cyril = updateDto.title_cyril ? normalizeName(updateDto.title_cyril) : undefined;
    const title_ru = updateDto.title_ru ? normalizeName(updateDto.title_ru) : undefined;

    return this.prisma.document.update({
      where: { id },
      data: { ...updateDto, ...fileUpdateData, ...(title_latin && {title_latin}), ...(title_cyril && {title_cyril}), ...(title_ru && {title_ru}) },
    });
  }

  async remove(id: string) {
    const existing = await this.findOne(id, true);
    
    
    if (existing.file_url) {
      await this.storageService.deleteFile(existing.file_url);
    }
    
    
    return this.prisma.document.delete({ where: { id } });
  }

  
  async download(id: string) {
    const doc = await this.findOne(id, true);
    if (!doc.file_url) throw new NotFoundException('File not found');
    return doc;
  }
  
}
