import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles-auth-decorator';
import { PageSlug, UserRole } from 'src/core/database/generated';

@ApiTags('Pages (Sahifalar)')
@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) { }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Yangi sahifa yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Sahifa muvaffaqiyatli yaratildi',
  })
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha sahifalarni olish' })
  @ApiResponse({ status: 200, description: 'Sahifalar ro\'yxati' })
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({
    summary: 'Slug bo\'yicha sahifani olish',
    description: 'Masalan: /pages/ABOUT, /pages/PRIVACY_POLICY, /pages/FAQ',
  })
  @ApiParam({
    name: 'slug',
    description: 'Sahifa slug',
    enum: Object.values(PageSlug),
    example: PageSlug.ABOUT,
  })
  @ApiResponse({ status: 200, description: 'Sahifa ma\'lumoti' })
  @ApiResponse({ status: 404, description: 'Sahifa topilmadi' })
  findBySlug(@Param('slug') slug: string) {
    return this.pagesService.findBySlug(slug);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sahifani yangilash' })
  @ApiResponse({ status: 200, description: 'Sahifa muvaffaqiyatli yangilandi' })
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(id, updatePageDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sahifani o\'chirish' })
  @ApiResponse({ status: 200, description: 'Sahifa muvaffaqiyatli o\'chirildi' })
  remove(@Param('id') id: string) {
    return this.pagesService.remove(id);
  }
}