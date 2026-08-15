const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src');

const generateController = (name, capitalizeName) => `import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, Req, StreamableFile, Res } from '@nestjs/common';
import { ${capitalizeName}Service } from './${name}.service';
import { Create${capitalizeName}Dto } from './dto/create-${name}.dto';
import { Update${capitalizeName}Dto } from './dto/update-${name}.dto';
import { Query${capitalizeName}Dto } from './dto/query-${name}.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, imageLimits, fileFilter, fileLimits } from '../common/storage/multer.config';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@ApiTags('${capitalizeName}')
@Controller('${name}')
export class ${capitalizeName}Controller {
  constructor(private readonly ${name}Service: ${capitalizeName}Service) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new ${name}' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor(${name === 'documents' ? "'file'" : "'cover_image'"}, {
    fileFilter: ${name === 'documents' ? 'fileFilter' : 'imageFileFilter'},
    limits: ${name === 'documents' ? 'fileLimits' : 'imageLimits'},
  }))
  create(
    @Req() req: any,
    @Body() createDto: Create${capitalizeName}Dto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.${name}Service.create(req.user.sub, createDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all ${name} (Public)' })
  findAll(@Query() query: Query${capitalizeName}Dto, @Req() req: any) {
    return this.${name}Service.findAll(query, req.user?.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get ${name} by id (Public)' })
  findOne(@Param('id') id: string, @Query('admin') admin?: string) {
    return this.${name}Service.findOne(id, admin === 'true');
  }

  ${name === 'documents' ? `
  @Get(':id/download')
  @ApiOperation({ summary: 'Download document (Public)' })
  async download(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
    const doc = await this.${name}Service.download(id);
    const filePath = join(process.cwd(), doc.file_url);
    const fileStream = createReadStream(filePath);
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': \`attachment; filename="\${doc.file_name}"\`,
    });
    return new StreamableFile(fileStream);
  }
  ` : ''}

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update a ${name}' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor(${name === 'documents' ? "'file'" : "'cover_image'"}, {
    fileFilter: ${name === 'documents' ? 'fileFilter' : 'imageFileFilter'},
    limits: ${name === 'documents' ? 'fileLimits' : 'imageLimits'},
  }))
  update(
    @Param('id') id: string,
    @Body() updateDto: Update${capitalizeName}Dto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.${name}Service.update(id, updateDto, file);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a ${name} (Admin only)' })
  remove(@Param('id') id: string) {
    return this.${name}Service.remove(id);
  }
}
`;

const generateService = (name, capitalizeName) => `import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { Create${capitalizeName}Dto } from './dto/create-${name}.dto';
import { Update${capitalizeName}Dto } from './dto/update-${name}.dto';
import { Query${capitalizeName}Dto } from './dto/query-${name}.dto';
import { buildMultilangSearchWhere } from '../common/helpers/multilang-search.helper';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { normalizeName } from '../common/helpers/name-normalizer.helper';

@Injectable()
export class ${capitalizeName}Service {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async create(creatorId: string, createDto: Create${capitalizeName}Dto, file?: Express.Multer.File) {
    let fileInfo = null;
    if (file) {
      fileInfo = await this.storageService.saveFile(file, '${name}');
    }

    const title_latin = createDto.title_latin ? normalizeName(createDto.title_latin) : undefined;
    const title_cyril = createDto.title_cyril ? normalizeName(createDto.title_cyril) : undefined;
    const title_ru = createDto.title_ru ? normalizeName(createDto.title_ru) : undefined;

    ${name === 'documents' ? `
    if (!file) throw new NotFoundException('Document file is required');
    const data = {
      ...createDto,
      title_latin, title_cyril, title_ru,
      creator_id: creatorId,
      file_url: fileInfo.url,
      file_name: fileInfo.fileName,
      file_size: fileInfo.fileSize,
    };
    return this.prisma.document.create({ data });
    ` : `
    const data = {
      ...createDto,
      title_latin, title_cyril, title_ru,
      creator_id: creatorId,
      ...(fileInfo && { cover_image: fileInfo.url }),
    };
    return this.prisma.${name === 'news' ? 'news' : 'event'}.create({ data });
    `}
  }

  async findAll(query: Query${capitalizeName}Dto, userId?: string) {
    const { page, limit, skip } = buildPaginationParams(query);
    
    // Default conditions
    const where: any = {};
    
    ${name === 'news' ? `
    if (query.is_published !== undefined) {
      where.is_published = query.is_published;
    } else {
      where.is_published = true;
    }
    ` : name === 'events' ? `
    where.is_published = true;
    if (query.upcoming !== undefined) {
      if (query.upcoming) {
        where.event_date = { gte: new Date() };
      }
    }
    ` : name === 'documents' ? `
    if (query.category) {
      where.category = query.category;
    }
    ` : ''}
    
    if (query.search) {
      const searchWhere = buildMultilangSearchWhere(query.search, 'title');
      Object.assign(where, searchWhere);
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.${name === 'news' ? 'news' : name === 'events' ? 'event' : 'document'}.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { ${name === 'events' ? "(query.upcoming ? 'event_date' : 'event_date')" : name === 'news' ? "'published_at'" : "'created_at'"}: ${name === 'events' ? "(query.upcoming ? 'asc' : 'desc')" : "'desc'"} },
        include: { creator: { select: { id: true, full_name: true } } },
      }),
      this.prisma.${name === 'news' ? 'news' : name === 'events' ? 'event' : 'document'}.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string, isAdmin = false) {
    const item = await this.prisma.${name === 'news' ? 'news' : name === 'events' ? 'event' : 'document'}.findUnique({
      where: { id },
      include: { creator: { select: { id: true, full_name: true } } },
    });
    if (!item) throw new NotFoundException('${capitalizeName} not found');

    ${name === 'news' ? `
    if (!item.is_published && !isAdmin) {
      throw new NotFoundException('${capitalizeName} not found');
    }
    if (!isAdmin) {
      await this.prisma.news.update({ where: { id }, data: { views_count: { increment: 1 } } }).catch(() => {});
    }
    ` : ''}

    ${name === 'events' ? `
    if (!item.is_published && !isAdmin) {
      throw new NotFoundException('${capitalizeName} not found');
    }
    ` : ''}

    return item;
  }

  async update(id: string, updateDto: Update${capitalizeName}Dto, file?: Express.Multer.File) {
    const existing = await this.findOne(id, true);
    
    let fileUpdateData: any = {};
    if (file) {
      ${name === 'documents' ? `
      const fileInfo = await this.storageService.replaceFile(existing.file_url, file, '${name}');
      fileUpdateData = { file_url: fileInfo.url, file_name: fileInfo.fileName, file_size: fileInfo.fileSize };
      ` : `
      const fileInfo = existing.cover_image 
        ? await this.storageService.replaceFile(existing.cover_image, file, '${name}')
        : await this.storageService.saveFile(file, '${name}');
      fileUpdateData = { cover_image: fileInfo.url };
      `}
    }

    const title_latin = updateDto.title_latin ? normalizeName(updateDto.title_latin) : undefined;
    const title_cyril = updateDto.title_cyril ? normalizeName(updateDto.title_cyril) : undefined;
    const title_ru = updateDto.title_ru ? normalizeName(updateDto.title_ru) : undefined;

    return this.prisma.${name === 'news' ? 'news' : name === 'events' ? 'event' : 'document'}.update({
      where: { id },
      data: { ...updateDto, ...fileUpdateData, ...(title_latin && {title_latin}), ...(title_cyril && {title_cyril}), ...(title_ru && {title_ru}) },
    });
  }

  async remove(id: string) {
    const existing = await this.findOne(id, true);
    
    ${name === 'documents' ? `
    if (existing.file_url) {
      await this.storageService.deleteFile(existing.file_url);
    }
    ` : `
    if (existing.cover_image) {
      await this.storageService.deleteFile(existing.cover_image);
    }
    `}
    
    return this.prisma.${name === 'news' ? 'news' : name === 'events' ? 'event' : 'document'}.delete({ where: { id } });
  }

  ${name === 'documents' ? `
  async download(id: string) {
    const doc = await this.findOne(id, true);
    if (!doc.file_url) throw new NotFoundException('File not found');
    return doc;
  }
  ` : ''}
}
`;

const generateModule = (name, capitalizeName) => `import { Module } from '@nestjs/common';
import { ${capitalizeName}Service } from './${name}.service';
import { ${capitalizeName}Controller } from './${name}.controller';

@Module({
  controllers: [${capitalizeName}Controller],
  providers: [${capitalizeName}Service],
})
export class ${capitalizeName}Module {}
`;

const generateCreateDto = (name) => `import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsEnum, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DocumentCategory } from '../../core/database/generated';

export class Create${name.charAt(0).toUpperCase() + name.slice(1)}Dto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_latin: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_cyril: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_ru: string;

  ${name === 'news' ? `
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  content_latin: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  content_cyril: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  content_ru: string;

  @ApiPropertyOptional({ type: 'string', format: 'binary' })
  @IsOptional()
  cover_image?: any;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  is_published?: boolean;
  ` : name === 'events' ? `
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  description_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  description_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  description_ru?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  location_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  location_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  location_ru?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  event_date: Date;

  @ApiPropertyOptional({ type: 'string', format: 'binary' })
  @IsOptional()
  cover_image?: any;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  is_published?: boolean;
  ` : name === 'documents' ? `
  @ApiProperty({ enum: DocumentCategory })
  @IsNotEmpty()
  @IsEnum(DocumentCategory)
  category: DocumentCategory;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsOptional()
  file?: any;
  ` : ''}
}
`;

const generateUpdateDto = (name) => `import { PartialType } from '@nestjs/swagger';
import { Create${name.charAt(0).toUpperCase() + name.slice(1)}Dto } from './create-${name}.dto';

export class Update${name.charAt(0).toUpperCase() + name.slice(1)}Dto extends PartialType(Create${name.charAt(0).toUpperCase() + name.slice(1)}Dto) {}
`;

const generateQueryDto = (name) => `import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { DocumentCategory } from '../../core/database/generated';

export class Query${name.charAt(0).toUpperCase() + name.slice(1)}Dto extends BaseQueryDto {
  ${name === 'news' ? `
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  is_published?: boolean;
  ` : name === 'events' ? `
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  upcoming?: boolean;
  ` : name === 'documents' ? `
  @ApiPropertyOptional({ enum: DocumentCategory })
  @IsOptional()
  @IsEnum(DocumentCategory)
  category?: DocumentCategory;
  ` : ''}
}
`;

const dtos = ['news', 'events', 'documents'];

for (const name of dtos) {
  const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  const moduleDir = path.join(basePath, name);
  const dtoDir = path.join(moduleDir, 'dto');

  if (!fs.existsSync(moduleDir)) fs.mkdirSync(moduleDir);
  if (!fs.existsSync(dtoDir)) fs.mkdirSync(dtoDir);

  fs.writeFileSync(path.join(moduleDir, `${name}.controller.ts`), generateController(name, capitalizeName));
  fs.writeFileSync(path.join(moduleDir, `${name}.service.ts`), generateService(name, capitalizeName));
  fs.writeFileSync(path.join(moduleDir, `${name}.module.ts`), generateModule(name, capitalizeName));
  fs.writeFileSync(path.join(dtoDir, `create-${name}.dto.ts`), generateCreateDto(name));
  fs.writeFileSync(path.join(dtoDir, `update-${name}.dto.ts`), generateUpdateDto(name));
  fs.writeFileSync(path.join(dtoDir, `query-${name}.dto.ts`), generateQueryDto(name));
}
