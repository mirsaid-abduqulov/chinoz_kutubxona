import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { QueryAuthorDto } from './dto/query-author.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerStorage, imageFileFilter, imageLimits } from '../common/storage/multer.config';
import { UploadTimeoutGuard } from '../common/guards/upload-timeout.guard';
import { UserRole } from 'src/core/database/generated';

@ApiTags('Authors')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Create a new author' })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all authors with pagination' })
  findAll(@Query() query: QueryAuthorDto) {
    return this.authorsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an author by ID with all images' })
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Update an author' })
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete an author (Admin only)' })
  remove(@Param('id') id: string) {
    return this.authorsService.remove(id);
  }

  // --- Sub-resources: Images ---

  @Post(':id/images')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @UseGuards(UploadTimeoutGuard)
  @ApiOperation({ summary: 'Upload images for an author' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: multerStorage,
      fileFilter: imageFileFilter,
      limits: imageLimits,
    }),
  )
  uploadImages(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.authorsService.addImages(id, files);
  }

  @Get(':id/images')
  @ApiOperation({ summary: 'Get all images for an author' })
  getImages(@Param('id') id: string) {
    return this.authorsService.getImages(id);
  }

  @Patch(':id/images/:imageId/set-main')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Set an image as main for an author' })
  setMainImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.authorsService.setMainImage(id, imageId);
  }

  @Delete(':id/images/:imageId')
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.LIBRARIAN)
  @ApiOperation({ summary: 'Delete an image for an author' })
  removeImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.authorsService.removeImage(id, imageId);
  }
}
