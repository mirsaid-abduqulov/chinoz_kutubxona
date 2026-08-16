import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ContactMessagesService } from './contact-messages.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { QueryContactMessageDto } from './dto/query-contact-message.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Contact Messages(Qayta aloqa)')
@Controller('contact/messages')
export class ContactMessagesController {
  constructor(private readonly contactMessagesService: ContactMessagesService) {}

  @Post()
create(@Body() dto: CreateContactMessageDto) {
  return this.contactMessagesService.create(dto);
}
 
@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
findAll(@Query() query: QueryContactMessageDto) {
  return this.contactMessagesService.findAll(query);
}
 
@Get(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
findOne(@Param('id') id: string) {
  return this.contactMessagesService.findOne(id);
}
 
@Delete(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
remove(@Param('id') id: string) {
  return this.contactMessagesService.remove(id);
}
}
