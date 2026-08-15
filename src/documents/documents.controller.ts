import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, Req, StreamableFile, Res } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentsDto } from './dto/create-documents.dto';
import { UpdateDocumentsDto } from './dto/update-documents.dto';
import { QueryDocumentsDto } from './dto/query-documents.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { FileInterceptor } from '@nestjs/platform-express';
import { documentFileFilter, documentLimits } from '../common/storage/multer.config';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@ApiTags('Documents(Hujjatlar)')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new documents' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: documentFileFilter,
    limits: documentLimits,
  }))
  create(
    @Req() req: any,
    @Body() createDto: CreateDocumentsDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.documentsService.create(req.user.sub, createDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all documents (Public)' })
  findAll(@Query() query: QueryDocumentsDto, @Req() req: any) {
    return this.documentsService.findAll(query, req.user?.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get documents by id (Public)' })
  findOne(@Param('id') id: string, @Query('admin') admin?: string) {
    return this.documentsService.findOne(id, admin === 'true');
  }

  
  @Get(':id/download')
  @ApiOperation({ summary: 'Download document (Public)' })
  async download(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
    const doc = await this.documentsService.download(id);
    const filePath = join(process.cwd(), doc.file_url);
    const fileStream = createReadStream(filePath);
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${doc.file_name}"`,
    });
    return new StreamableFile(fileStream);
  }
  

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update a documents' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: documentFileFilter,
    limits: documentLimits,
  }))
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateDocumentsDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.documentsService.update(id, updateDto, file);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a documents (Admin only)' })
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
