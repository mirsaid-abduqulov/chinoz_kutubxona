import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { CreateOnlineRequestDto } from './dto/create-online-request.dto';
import { UpdateOnlineRequestDto } from './dto/update-online-request.dto';
import { QueryOnlineRequestDto } from './dto/query-online-request.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { OnlineRequestType, RequestStatus } from '../core/database/generated';

@Injectable()
export class OnlineRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: CreateOnlineRequestDto) {
    if (createDto.type === OnlineRequestType.BOOK_ORDER) {
      if (!createDto.book_id) throw new BadRequestException('Kitob uchun buyurtma berilganda kitob tanlanishi kerak');
      const book = await this.prisma.book.findUnique({ where: { id: createDto.book_id } });
      if (!book) throw new NotFoundException('Kitob topilmadi');
    }

    return this.prisma.onlineRequest.create({
      data: {
        ...createDto,
        status: RequestStatus.NEW,
      }
    });
  }

  async findAll(query: QueryOnlineRequestDto) {
    const { page, limit, skip } = buildPaginationParams(query);
    const where: any = {};
    
    if (query.type) where.type = query.type;
    if (query.status) where.status = query.status;
    
    if (query.search) {
      where.OR = [
        { full_name: { contains: query.search, mode: 'insensitive' } },
        { message: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    
    const [items, total] = await this.prisma.$transaction([
      this.prisma.onlineRequest.findMany({
        where,
        skip,
        take: limit,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder } : { created_at: 'desc' },
        include: { book: { select: { id: true, name_latin: true } } },
      }),
      this.prisma.onlineRequest.count({ where })
    ]);
    
    return buildPaginatedResponse(items, total, page, limit);
  }

  async findOne(id: string) {
    const item = await this.prisma.onlineRequest.findUnique({
      where: { id },
      include: { book: true },
    });
    if (!item) throw new NotFoundException('Buyurtma topilmadi');
    return item;
  }

  async update(id: string, updateDto: UpdateOnlineRequestDto) {
    await this.findOne(id);
    
    let answerData: any = {};
    if (updateDto.answer) {
      answerData.answered_at = new Date();
      if (!updateDto.status) answerData.status = RequestStatus.ANSWERED;
    }

    return this.prisma.onlineRequest.update({
      where: { id },
      data: { ...updateDto, ...answerData },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.onlineRequest.delete({ where: { id } });
  }
}
