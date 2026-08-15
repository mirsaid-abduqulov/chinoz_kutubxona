import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { BaseQueryDto } from '../common/dto/base-query.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, imageLimits } from '../common/storage/multer.config';

@ApiTags('Announcements(E\'lonlar)')
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Create a new announcement' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  create(
    @Req() req: any,
    @Body() createAnnouncementDto: CreateAnnouncementDto,
    @UploadedFile() cover_image?: Express.Multer.File,
  ) {
    return this.announcementsService.create(req.user.sub, createAnnouncementDto, cover_image);
  }

  @Get()
  @ApiOperation({ summary: 'Get all published announcements (Public)' })
  findAllPublished(@Query() query: BaseQueryDto) {
    return this.announcementsService.findAllPublished(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an announcement by id (Public)' })
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Update an announcement' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  update(
    @Param('id') id: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
    @UploadedFile() cover_image?: Express.Multer.File,
  ) {
    return this.announcementsService.update(id, updateAnnouncementDto, cover_image);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete an announcement (Admin only)' })
  remove(@Param('id') id: string) {
    return this.announcementsService.remove(id);
  }
}
