import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PageSlug } from '../core/database/generated';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles-auth-decorator';
import { UserRole } from 'src/core/database/generated';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Pages(Sahifalar)')
@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new page (Admin only)' })
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pages (Public)' })
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a page by slug (Public)' })
  findOne(@Param('slug') slug: PageSlug) {
    return this.pagesService.findOne(slug);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Patch(':slug')
  @ApiOperation({ summary: 'Update a page by slug (Admin only)' })
  update(@Param('slug') slug: PageSlug, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(slug, updatePageDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Delete(':slug')
  @ApiOperation({ summary: 'Delete a page by slug (Admin only)' })
  remove(@Param('slug') slug: PageSlug) {
    return this.pagesService.remove(slug);
  }
}
