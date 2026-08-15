const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// ==========================================
// MEDIA MODULE
// ==========================================
const createMediaModule = () => {
  const dir = path.join(basePath, 'media');
  ensureDir(dir);
  ensureDir(path.join(dir, 'dto'));

  // controller
  fs.writeFileSync(path.join(dir, 'media-albums.controller.ts'), `import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, UploadedFiles, Req } from '@nestjs/common';
import { MediaAlbumsService } from './media-albums.service';
import { CreateMediaAlbumDto } from './dto/create-media-album.dto';
import { UpdateMediaAlbumDto } from './dto/update-media-album.dto';
import { QueryMediaAlbumDto } from './dto/query-media-album.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, imageLimits, mediaItemFileFilter, mediaItemLimits } from '../common/storage/multer.config';

@ApiTags('Media(Media)')
@Controller('media/albums')
export class MediaAlbumsController {
  constructor(private readonly mediaAlbumsService: MediaAlbumsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new media album' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  create(
    @Req() req: any,
    @Body() createDto: CreateMediaAlbumDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.mediaAlbumsService.create(req.user.sub, createDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all media albums (Public)' })
  findAll(@Query() query: QueryMediaAlbumDto) {
    return this.mediaAlbumsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get media album by id (Public)' })
  findOne(@Param('id') id: string) {
    return this.mediaAlbumsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update a media album' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMediaAlbumDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.mediaAlbumsService.update(id, updateDto, file);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a media album (Admin only)' })
  remove(@Param('id') id: string) {
    return this.mediaAlbumsService.remove(id);
  }

  @Post(':id/items')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Add items to album' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files', 10, {
    fileFilter: mediaItemFileFilter,
    limits: mediaItemLimits,
  }))
  addItems(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.mediaAlbumsService.addItems(id, files);
  }

  @Delete(':id/items/:itemId')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete an item from album' })
  removeItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
  ) {
    return this.mediaAlbumsService.removeItem(id, itemId);
  }
}
`);

  // service
  fs.writeFileSync(path.join(dir, 'media-albums.service.ts'), `import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
      const isVideo = file.mimetype.startsWith('video/') || file.originalname.match(/\\.(mp4|avi|mkv|mov|webm)$/i);
      const isPhoto = file.mimetype.startsWith('image/') || file.originalname.match(/\\.(jpg|jpeg|png|webp)$/i);
      const isPresentation = file.originalname.match(/\\.(pdf|ppt|pptx)$/i);

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
`);

  // module
  fs.writeFileSync(path.join(dir, 'media.module.ts'), `import { Module } from '@nestjs/common';
import { MediaAlbumsService } from './media-albums.service';
import { MediaAlbumsController } from './media-albums.controller';

@Module({
  controllers: [MediaAlbumsController],
  providers: [MediaAlbumsService],
})
export class MediaModule {}
`);

  // dtos
  fs.writeFileSync(path.join(dir, 'dto', 'create-media-album.dto.ts'), `import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { MediaType } from '../../core/database/generated';

export class CreateMediaAlbumDto {
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

  @ApiProperty({ enum: MediaType })
  @IsNotEmpty()
  @IsEnum(MediaType)
  type: MediaType;

  @ApiPropertyOptional({ type: 'string', format: 'binary' })
  @IsOptional()
  cover_image?: any;
}
`);

  fs.writeFileSync(path.join(dir, 'dto', 'update-media-album.dto.ts'), `import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMediaAlbumDto } from './create-media-album.dto';

export class UpdateMediaAlbumDto extends PartialType(OmitType(CreateMediaAlbumDto, ['type'] as const)) {}
`);

  fs.writeFileSync(path.join(dir, 'dto', 'query-media-album.dto.ts'), `import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { MediaType } from '../../core/database/generated';

export class QueryMediaAlbumDto extends BaseQueryDto {
  @ApiPropertyOptional({ enum: MediaType })
  @IsOptional()
  @IsEnum(MediaType)
  type?: MediaType;
}
`);

};

// ==========================================
// ONLINE REQUESTS MODULE
// ==========================================
const createOnlineRequestsModule = () => {
  const dir = path.join(basePath, 'online-requests');
  ensureDir(dir);
  ensureDir(path.join(dir, 'dto'));

  // controller
  fs.writeFileSync(path.join(dir, 'online-requests.controller.ts'), `import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { OnlineRequestsService } from './online-requests.service';
import { CreateOnlineRequestDto } from './dto/create-online-request.dto';
import { UpdateOnlineRequestDto } from './dto/update-online-request.dto';
import { QueryOnlineRequestDto } from './dto/query-online-request.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';

@ApiTags('Online Requests(Murojaatlar)')
@Controller('online-requests')
export class OnlineRequestsController {
  constructor(private readonly onlineRequestsService: OnlineRequestsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new online request (Public)' })
  create(@Body() createDto: CreateOnlineRequestDto) {
    return this.onlineRequestsService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get all online requests (Admin only)' })
  findAll(@Query() query: QueryOnlineRequestDto) {
    return this.onlineRequestsService.findAll(query);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get online request by id (Admin only)' })
  findOne(@Param('id') id: string) {
    return this.onlineRequestsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update an online request (Admin only)' })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateOnlineRequestDto,
  ) {
    return this.onlineRequestsService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete an online request (Admin only)' })
  remove(@Param('id') id: string) {
    return this.onlineRequestsService.remove(id);
  }
}
`);

  // service
  fs.writeFileSync(path.join(dir, 'online-requests.service.ts'), `import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { CreateOnlineRequestDto } from './dto/create-online-request.dto';
import { UpdateOnlineRequestDto } from './dto/update-online-request.dto';
import { QueryOnlineRequestDto } from './dto/query-online-request.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { OnlineRequestType, RequestStatus } from '../core/database/generated';

@Injectable()
export class OnlineRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateOnlineRequestDto) {
    if (createDto.type === OnlineRequestType.BOOK_ORDER) {
      if (!createDto.book_id) throw new BadRequestException('book_id is required for BOOK_ORDER');
      const book = await this.prisma.book.findUnique({ where: { id: createDto.book_id } });
      if (!book) throw new NotFoundException('Book not found');
    }

    return this.prisma.onlineRequest.create({
      data: {
        ...createDto,
        status: RequestStatus.NEW,
      }
    });
  }

  async findAll(query: QueryOnlineRequestDto) {
    const { page, limit, skip } = buildPaginationParams(query);
    const where: any = {};
    
    if (query.type) where.type = query.type;
    if (query.status) where.status = query.status;
    
    if (query.search) {
      where.OR = [
        { full_name: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.onlineRequest.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { created_at: 'desc' },
        include: { book: { select: { id: true, name_latin: true } } },
      }),
      this.prisma.onlineRequest.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.onlineRequest.findUnique({
      where: { id },
      include: { book: true },
    });
    if (!item) throw new NotFoundException('Request not found');
    return item;
  }

  async update(id: string, updateDto: UpdateOnlineRequestDto) {
    await this.findOne(id);
    
    let answerData: any = {};
    if (updateDto.answer) {
      answerData.answered_at = new Date();
      if (!updateDto.status) answerData.status = RequestStatus.ANSWERED;
    }

    return this.prisma.onlineRequest.update({
      where: { id },
      data: { ...updateDto, ...answerData },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.onlineRequest.delete({ where: { id } });
  }
}
`);

  // module
  fs.writeFileSync(path.join(dir, 'online-requests.module.ts'), `import { Module } from '@nestjs/common';
import { OnlineRequestsService } from './online-requests.service';
import { OnlineRequestsController } from './online-requests.controller';

@Module({
  controllers: [OnlineRequestsController],
  providers: [OnlineRequestsService],
})
export class OnlineRequestsModule {}
`);

  // dtos
  fs.writeFileSync(path.join(dir, 'dto', 'create-online-request.dto.ts'), `import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
import { OnlineRequestType } from '../../core/database/generated';

export class CreateOnlineRequestDto {
  @ApiProperty({ enum: OnlineRequestType })
  @IsNotEmpty()
  @IsEnum(OnlineRequestType)
  type: OnlineRequestType;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  full_name: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.email || o.phone)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.phone || o.email)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  book_id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  message: string;
}
`);

  fs.writeFileSync(path.join(dir, 'dto', 'update-online-request.dto.ts'), `import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { RequestStatus } from '../../core/database/generated';

export class UpdateOnlineRequestDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional({ enum: RequestStatus })
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;
}
`);

  fs.writeFileSync(path.join(dir, 'dto', 'query-online-request.dto.ts'), `import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { OnlineRequestType, RequestStatus } from '../../core/database/generated';

export class QueryOnlineRequestDto extends BaseQueryDto {
  @ApiPropertyOptional({ enum: OnlineRequestType })
  @IsOptional()
  @IsEnum(OnlineRequestType)
  type?: OnlineRequestType;

  @ApiPropertyOptional({ enum: RequestStatus })
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;
}
`);
};

// ==========================================
// CONTACT MODULE
// ==========================================
const createContactModule = () => {
  const dir = path.join(basePath, 'contact');
  ensureDir(dir);
  ensureDir(path.join(dir, 'dto'));

  // INFO controller
  fs.writeFileSync(path.join(dir, 'contact-info.controller.ts'), `import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';

@ApiTags('Contact Info(Aloqa ma\\'lumotlari)')
@Controller('contact/info')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  @Get()
  @ApiOperation({ summary: 'Get contact info (Public)' })
  findOne() {
    return this.contactInfoService.findOne();
  }

  @Patch()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update contact info (Admin only)' })
  update(@Body() updateDto: UpdateContactInfoDto) {
    return this.contactInfoService.update(updateDto);
  }
}
`);

  // INFO service
  fs.writeFileSync(path.join(dir, 'contact-info.service.ts'), `import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';

const SINGLETON_ID = 'singleton';

@Injectable()
export class ContactInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne() {
    let info = await this.prisma.contactInfo.findUnique({ where: { id: SINGLETON_ID } });
    if (!info) {
      info = {
        id: SINGLETON_ID,
        address_latin: '', address_cyril: '', address_ru: '',
        phone: '', email: '',
        latitude: null, longitude: null,
        telegram_url: null, facebook_url: null, instagram_url: null, youtube_url: null,
        updated_at: new Date()
      };
    }
    return info;
  }

  async update(updateDto: UpdateContactInfoDto) {
    return this.prisma.contactInfo.upsert({
      where: { id: SINGLETON_ID },
      update: updateDto,
      create: {
        id: SINGLETON_ID,
        address_latin: updateDto.address_latin || '',
        address_cyril: updateDto.address_cyril || '',
        address_ru: updateDto.address_ru || '',
        phone: updateDto.phone || '',
        email: updateDto.email || '',
        ...updateDto,
      }
    });
  }
}
`);

  // MESSAGES controller
  fs.writeFileSync(path.join(dir, 'contact-messages.controller.ts'), `import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ContactMessagesService } from './contact-messages.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { QueryContactMessageDto } from './dto/query-contact-message.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';

@ApiTags('Contact Messages(Qayta aloqa)')
@Controller('contact/messages')
export class ContactMessagesController {
  constructor(private readonly contactMessagesService: ContactMessagesService) {}

  @Post()
  @ApiOperation({ summary: 'Send a contact message (Public)' })
  create(@Body() createDto: CreateContactMessageDto) {
    return this.contactMessagesService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get all contact messages (Admin only)' })
  findAll(@Query() query: QueryContactMessageDto) {
    return this.contactMessagesService.findAll(query);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get contact message by id (Admin only)' })
  findOne(@Param('id') id: string) {
    return this.contactMessagesService.findOne(id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a contact message (Admin only)' })
  remove(@Param('id') id: string) {
    return this.contactMessagesService.remove(id);
  }
}
`);

  // MESSAGES service
  fs.writeFileSync(path.join(dir, 'contact-messages.service.ts'), `import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { QueryContactMessageDto } from './dto/query-contact-message.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';

@Injectable()
export class ContactMessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateContactMessageDto) {
    return this.prisma.contactMessage.create({
      data: {
        ...createDto,
        is_read: false,
      }
    });
  }

  async findAll(query: QueryContactMessageDto) {
    const { page, limit, skip } = buildPaginationParams(query);
    const where: any = {};
    
    if (query.is_read !== undefined) {
      where.is_read = query.is_read === 'true' || query.is_read === true;
    }
    
    if (query.search) {
      where.OR = [
        { full_name: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.contactMessage.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { created_at: 'desc' },
      }),
      this.prisma.contactMessage.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.contactMessage.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Message not found');
    
    if (!item.is_read) {
      await this.prisma.contactMessage.update({ where: { id }, data: { is_read: true } });
      item.is_read = true;
    }
    
    return item;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}
`);

  // module
  fs.writeFileSync(path.join(dir, 'contact.module.ts'), `import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { ContactMessagesService } from './contact-messages.service';
import { ContactMessagesController } from './contact-messages.controller';

@Module({
  controllers: [ContactInfoController, ContactMessagesController],
  providers: [ContactInfoService, ContactMessagesService],
})
export class ContactModule {}
`);

  // INFO DTO
  fs.writeFileSync(path.join(dir, 'dto', 'update-contact-info.dto.ts'), `import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';

export class UpdateContactInfoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_ru?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  telegram_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  facebook_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  instagram_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  youtube_url?: string;
}
`);

  // MESSAGE DTOs
  fs.writeFileSync(path.join(dir, 'dto', 'create-contact-message.dto.ts'), `import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateContactMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  full_name: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.email || o.phone)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.phone || o.email)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  message: string;
}
`);

  fs.writeFileSync(path.join(dir, 'dto', 'query-contact-message.dto.ts'), `import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryContactMessageDto extends BaseQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  is_read?: boolean;
}
`);
};

createMediaModule();
createOnlineRequestsModule();
createContactModule();
