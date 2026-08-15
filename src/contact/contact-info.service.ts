import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';

const SINGLETON_ID = 'singleton';

@Injectable()
export class ContactInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne() {
    let info = await this.prisma.contactInfo.findUnique({ where: { id: SINGLETON_ID } });
    if (!info) {
      info = {
        id: SINGLETON_ID,
        address_latin: '', address_cyril: '', address_ru: '',
        phone: '', email: '',
        latitude: null, longitude: null,
        telegram_url: null, facebook_url: null, instagram_url: null, youtube_url: null,
        updated_at: new Date()
      };
    }
    return info;
  }

  async update(updateDto: UpdateContactInfoDto) {
    return this.prisma.contactInfo.upsert({
      where: { id: SINGLETON_ID },
      update: updateDto,
      create: {
        id: SINGLETON_ID,
        address_latin: updateDto.address_latin || '',
        address_cyril: updateDto.address_cyril || '',
        address_ru: updateDto.address_ru || '',
        phone: updateDto.phone || '',
        email: updateDto.email || '',
        ...updateDto,
      }
    });
  }
}
