import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { QueryContactMessageDto } from './dto/query-contact-message.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';

@Injectable()
export class ContactMessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateContactMessageDto) {
    return this.prisma.contactMessage.create({
      data: {
        ...createDto,
        is_read: false,
      }
    });
  }

  async findAll(query: QueryContactMessageDto) {
    const { page, limit, skip } = buildPaginationParams(query);
    const where: any = {};
    
    if (query.is_read !== undefined) {
      where.is_read = query.is_read;
    }
    
    if (query.search) {
      where.OR = [
        { full_name: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.contactMessage.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { created_at: 'desc' },
      }),
      this.prisma.contactMessage.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.contactMessage.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Message not found');
    
    if (!item.is_read) {
      await this.prisma.contactMessage.update({ where: { id }, data: { is_read: true } });
      item.is_read = true;
    }
    
    return item;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}
