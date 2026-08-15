import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, UploadedFiles, Req } from '@nestjs/common';
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
