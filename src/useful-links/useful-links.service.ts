import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsefulLinkDto } from './dto/create-useful-link.dto';
import { UpdateUsefulLinkDto } from './dto/update-useful-link.dto';
import { PrismaService } from '../core/database/prisma.service';
import { BaseQueryDto } from '../common/dto/base-query.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { buildMultilangSearchWhere } from 'src/common/helpers/multilang-search.helper';

@Injectable()
export class UsefulLinksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsefulLinkDto: CreateUsefulLinkDto) {
    const usefulLink = await this.prisma.usefulLink.create({
      data: createUsefulLinkDto,
    });
    return usefulLink;
  }

  async findAllActive(query: BaseQueryDto) {
    const { skip, take } = buildPaginationParams(query);

    const where = query.search ? buildMultilangSearchWhere(query.search, "title") : {};

    const [data, total] = await Promise.all([
      this.prisma.usefulLink.findMany({
        where: { is_active: true, ...where },
        skip,
        take,
        orderBy: { order: 'asc' },
      }),
      this.prisma.usefulLink.count({ where: { is_active: true, ...where } }),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async findAll(query: BaseQueryDto) {
    const { skip, take } = buildPaginationParams(query);
    
    const where = query.search ? buildMultilangSearchWhere(query.search, "title") : {};

    const [data, total] = await Promise.all([
      this.prisma.usefulLink.findMany({
        where: { ...where },
        skip,
        take,
        orderBy: { order: 'asc' },
      }),
      this.prisma.usefulLink.count({ where: { ...where } }),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async findOne(id: string) {
    const usefulLink = await this.prisma.usefulLink.findUnique({ where: { id } });
    if (!usefulLink) throw new NotFoundException('Foydali link topilmadi');
    return usefulLink;
  }

  async update(id: string, updateUsefulLinkDto: UpdateUsefulLinkDto) {
    const usefulLink = await this.prisma.usefulLink.findUnique({ where: { id } });
    if (!usefulLink) throw new NotFoundException('Foydali link topilmadi');

    const updated = await this.prisma.usefulLink.update({
      where: { id },
      data: updateUsefulLinkDto,
    });

    return updated;
  }

  async remove(id: string) {
    const usefulLink = await this.prisma.usefulLink.findUnique({ where: { id } });
    if (!usefulLink) throw new NotFoundException('Foydali link topilmadi');

    await this.prisma.usefulLink.delete({ where: { id } });
    return { success: true };
  }
}
