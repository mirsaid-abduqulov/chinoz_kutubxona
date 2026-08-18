import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFile, Req, ForbiddenException } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { UpdateEventsDto } from './dto/update-events.dto';
import { QueryEventsDto } from './dto/query-events.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiConsumes, ApiQuery } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter, imageLimits } from '../common/storage/multer.config';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';


@ApiTags('Events(Tadbirlar)')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new events' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  create(
    @Req() req: any,
    @Body() createDto: CreateEventsDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.eventsService.create(req.user.id, createDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all events (Public)' })
  findAll(@Query() query: QueryEventsDto) {
    return this.eventsService.findAll(query, true);
  }

  @Get('admin')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiQuery({ name: 'is_public', required: false, type: Boolean, example: true })
  @ApiOperation({ summary: 'Get all events' })
  findAll_admin(@Query() query: QueryEventsDto, @Req() req: any, @Query('is_public') is_public?: boolean) {
    const role = req.user.role;
    if (![UserRole.ADMIN, UserRole.SUPER_ADMIN].includes(role)) {
      throw new ForbiddenException('Siz ushbu resursdan foydalanishga ruxsat berilmadi');
    }
    return this.eventsService.findAll(query, is_public);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get events by id (Public)' })
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id, true);
  }

  @Get('admin/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get events by id (Public)' })
  findOneAdmin(@Param('id') id: string, @Req() req: any) {
    const role = req.user.role;
    if (![UserRole.ADMIN, UserRole.SUPER_ADMIN].includes(role)) {
      throw new ForbiddenException('Siz ushbu resursdan foydalanishga ruxsat berilmadi');
    }
    return this.eventsService.findOne(id);
  }


  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update a events' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover_image', {
    fileFilter: imageFileFilter,
    limits: imageLimits,
  }))
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateEventsDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.eventsService.update(id, updateDto, file);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a events (Admin only)' })
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
