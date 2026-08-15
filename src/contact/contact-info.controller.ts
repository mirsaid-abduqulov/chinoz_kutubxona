import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Contact Info(Aloqa ma\'lumotlari)')
@Controller('contact/info')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  @Get()
  @ApiOperation({ summary: 'Get contact info (Public)' })
  findOne() {
    return this.contactInfoService.findOne();
  }

  @Patch()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update contact info (Admin only)' })
  update(@Body() updateDto: UpdateContactInfoDto) {
    return this.contactInfoService.update(updateDto);
  }
}
