import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseEnumPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { ContactInfoService } from './contact-info.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles-auth-decorator';
import { UserRole } from 'src/core/database/generated';
import { imageFileFilter, imageLimits } from 'src/common/storage/multer.config';
import { SocialLink } from 'src/common/interfaces/socila_link';
import { SocialPlatform } from 'src/common/enums/socialPlatforms';

@ApiTags('Contact Info (Aloqa ma\'lumotlari)')
@Controller('contact/info')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) { }

  // ===== ContactInfo asosiy ma'lumotlari =====

  @Get()
  @ApiOperation({ summary: 'Sayt aloqa ma\'lumotlarini olish' })
  @ApiResponse({ status: 200, description: 'Aloqa ma\'lumotlari' })
  getInfo() {
    return this.contactInfoService.getInfo();
  }

  @Patch()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Aloqa ma\'lumotlarini yangilash' })
  updateInfo(@Body() dto: UpdateContactInfoDto) {
    return this.contactInfoService.updateInfo(dto);
  }

  // ===== Social Links CRUD =====

  @Get('social-links')
  @ApiOperation({ summary: 'Barcha ijtimoiy tarmoq havolalarini olish' })
  getSocialLinks() {
    return this.contactInfoService.getSocialLinks();
  }

  @Get('social-links/:platform')
  @ApiOperation({ summary: 'Bitta ijtimoiy tarmoq havolasini olish' })
  getSocialLink(@Param('platform') platform: string) {
    return this.contactInfoService.getSocialLink(platform);
  }

  @Post('social-links')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Yangi ijtimoiy tarmoq havolasi qo\'shish' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  addSocialLink(
    @Body() dto: CreateSocialLinkDto,
    @UploadedFile() icon_image?: Express.Multer.File,
  ) {
    return this.contactInfoService.addSocialLink(dto, icon_image);
  }

  @Patch('social-links/:platform')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ijtimoiy tarmoq havolasini yangilash' })
  @ApiParam({
    name: 'platform',
    enum: SocialPlatform,
    description: 'Ijtimoiy tarmoq turi',
    example: SocialPlatform.TELEGRAM,
  })
  updateSocialLink(
    @Param('platform', new ParseEnumPipe(SocialPlatform)) platform: SocialPlatform, @Body() dto: UpdateSocialLinkDto,
    @UploadedFile() icon_image?: Express.Multer.File,
  ) {
    return this.contactInfoService.updateSocialLink(platform, dto, icon_image);
  }

  @Delete('social-links/:platform')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiParam({
    name: 'platform',
    enum: SocialPlatform,
    description: 'Ijtimoiy tarmoq turi',
    example: SocialPlatform.TELEGRAM,
  })
  @ApiOperation({ summary: 'Ijtimoiy tarmoq havolasini o\'chirish' })
  removeSocialLink(@Param('platform', new ParseEnumPipe(SocialPlatform)) platform: SocialPlatform) {
    return this.contactInfoService.removeSocialLink(platform);
  }
}