import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { QueryContactMessageDto } from './dto/query-contact-message.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';

@Injectable()
export class ContactMessagesService {
  private readonly logger = new Logger(ContactMessagesService.name);
  private readonly ALLOWED_SORT_FIELDS = ['created_at', 'full_name', 'is_read'];
 
  constructor(private readonly prisma: PrismaService) {}
 
  async create(createDto: CreateContactMessageDto) {
    try {
      if (!createDto.email?.trim() && !createDto.phone?.trim()) {
        throw new BadRequestException(
          'Email yoki telefon raqamidan kamita bittasi majburiy',
        );
      }
 
      if (!createDto.full_name?.trim()) {
        throw new BadRequestException('Ismi to\'ldirilishi majburiy');
      }
 
      if (!createDto.message?.trim()) {
        throw new BadRequestException('Xabar mazmuni to\'ldirilishi majburiy');
      }
 
      return await this.prisma.contactMessage.create({
        data: {
          full_name: createDto.full_name.trim(),
          email: createDto.email?.trim() || null,
          phone: createDto.phone?.trim() || null,
          message: createDto.message.trim(),
          is_read: false,
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      this.logger.error(`Xabar saqlashda xato: ${error.message}`);
      throw new BadRequestException('Xabar saqlashda xato yuz berdi');
    }
  }
 
  async findAll(query: QueryContactMessageDto) {
    const { page, limit, skip } = buildPaginationParams(query);
 
    const conditions: any[] = [];
 
    if (query.is_read !== undefined) {
      conditions.push({ is_read: query.is_read });
    }
 
    if (query.search) {
      conditions.push({
        OR: [
          { full_name: { contains: query.search, mode: 'insensitive' } },
          { email: { contains: query.search, mode: 'insensitive' } },
          { phone: { contains: query.search, mode: 'insensitive' } },
          { message: { contains: query.search, mode: 'insensitive' } },
        ],
      });
    }
 
    const where = conditions.length > 0 ? { AND: conditions } : {};
 
    // Xavfsiz sortBy tekshiruvi
    const sortBy = this.ALLOWED_SORT_FIELDS.includes(query.sortBy as string)
      ? query.sortBy
      : 'created_at';
 
    try {
      const [messages, total] = await this.prisma.$transaction([
        this.prisma.contactMessage.findMany({
          where,
          skip,
          take: limit,
          orderBy: { [sortBy as string]: query.sortOrder },
        }),
        this.prisma.contactMessage.count({ where }),
      ]);
 
      return buildPaginatedResponse(messages, total, page, limit);
    } catch (error) {
      this.logger.error(`Xabarlarni o'qishda xato: ${error.message}`);
      throw new BadRequestException('Xabarlarni yuklashda xato yuz berdi');
    }
  }
 
  async findOne(id: string) {
    if (!id?.trim()) {
      throw new BadRequestException('Xabar ID majburiy');
    }
 
    const message = await this.prisma.contactMessage.findUnique({
      where: { id },
    });
 
    if (!message) {
      throw new NotFoundException('Xabar topilmadi');
    }
 
    // Avtomatik o'qilgan deb belgilash
    if (!message.is_read) {
      try {
        await this.prisma.contactMessage.update({
          where: { id },
          data: { is_read: true },
        });
        message.is_read = true;
      } catch (error) {
        this.logger.error(
          `O'qildi holatini yangilashda xato: ${error.message}`,
        );
        // Xato bo'lsa ham javobni qaytarsa bo'ladi, hali update bo'lmagan bo'lishi mumkin
      }
    }
 
    return message;
  }
 
  async remove(id: string) {
    if (!id?.trim()) {
      throw new BadRequestException('Xabar ID majburiy');
    }
 
    const message = await this.prisma.contactMessage.findUnique({
      where: { id },
    });
 
    if (!message) {
      throw new NotFoundException('Xabar topilmadi');
    }
 
    try {
      await this.prisma.contactMessage.delete({ where: { id } });
      return { success: true, message: 'Xabar o\'chirildi' };
    } catch (error) {
      this.logger.error(`Xabarni o'chirishda xato: ${error.message}`);
      throw new BadRequestException('Xabarni o\'chirishda xato yuz berdi');
    }
  }
 
  async markAsRead(id: string) {
    const message = await this.findOne(id);
    if (message.is_read) {
      return message;
    }
 
    return this.prisma.contactMessage.update({
      where: { id },
      data: { is_read: true },
    });
  }
 
  async markAsUnread(id: string) {
    const message = await this.findOne(id);
    if (!message.is_read) {
      return message;
    }
 
    return this.prisma.contactMessage.update({
      where: { id },
      data: { is_read: false },
    });
  }
}