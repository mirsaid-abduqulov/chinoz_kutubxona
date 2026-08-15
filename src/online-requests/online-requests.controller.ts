import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
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
