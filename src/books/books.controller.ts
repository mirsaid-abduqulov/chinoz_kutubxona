import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFiles, StreamableFile, Res, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookScoringCron } from './book-scoring.cron';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { QueryBookDto } from './dto/query-book.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerStorage, imageFileFilter, documentFileFilter, imageLimits, documentLimits } from '../common/storage/multer.config';
import { UploadTimeoutGuard } from '../common/guards/upload-timeout.guard';
import type { Response } from 'express';
import { UserRole } from 'src/core/database/generated';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Books(Kitoblar)')
@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly bookScoringCron: BookScoringCron,
  ) {}
  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Post('admin/recalculate-scores')
  @ApiOperation({ summary: 'Recalculate book scores manually' })
  async recalculateScores() {
    await this.bookScoringCron.handleWeeklyScoring();
    return { success: true, message: 'Scores recalculated successfully' };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books with pagination' })
  findAll(@Query() query: QueryBookDto) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID with full details' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a book details (metadata only)' })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a book (Admin only)' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  // --- Sub-resources: Images ---

  @Post(':id/images')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Upload images for a book' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: multerStorage,
      fileFilter: imageFileFilter,
      limits: imageLimits,
    }),
  )
  uploadImages(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.booksService.addImages(id, files);
  }

  @Patch(':id/images/:imageId/set-main')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Set an image as main for a book' })
  setMainImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.booksService.setMainImage(id, imageId);
  }

  @Delete(':id/images/:imageId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete an image for a book' })
  removeImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.booksService.removeImage(id, imageId);
  }

  // --- Sub-resources: Files ---

  @Post(':id/files')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Upload document files for a book' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: multerStorage,
      fileFilter: documentFileFilter,
      limits: documentLimits,
    }),
  )
  uploadFiles(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.booksService.addFiles(id, files);
  }

  @Delete(':id/files/:fileId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Delete a file for a book' })
  removeFile(@Param('id') id: string, @Param('fileId') fileId: string) {
    return this.booksService.removeFile(id, fileId);
  }

  @Get(':id/files/:fileId/download')
  @ApiOperation({ summary: 'Download a book file' })
  async downloadFile(
    @Param('id') id: string,
    @Param('fileId') fileId: string,
    @Res({ passthrough: true }) res: Response,
    @Req() req: any
  ) {
    const { stream, fileName } = await this.booksService.getDownloadStream(id, fileId, req.user);
    
    // URL encode the filename to avoid issues with special characters in the Content-Disposition header
    const encodedFileName = encodeURIComponent(fileName);

    res.set({
      'Content-Disposition': `attachment; filename*=UTF-8''${encodedFileName}`,
    });

    // Fire and forget logging so it doesn't block stream
    this.booksService.logDownload(id).catch(console.error);

    return new StreamableFile(stream);
  }
}
