import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../core/database/prisma.service';
import { QueryDepartmentDto } from './dto/query-department.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { buildMultilangSearchWhere } from '../common/helpers/multilang-search.helper';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = await this.prisma.department.create({
      data: createDepartmentDto,
    });
    return department;
  }

  async findAll(query: QueryDepartmentDto) {
    const { skip, take } = buildPaginationParams(query);
    const searchWhere = buildMultilangSearchWhere(query.search as string, 'name');

    const where = searchWhere ? searchWhere : {};

    const [data, total] = await Promise.all([
      this.prisma.department.findMany({
        where,
        skip,
        take,
        orderBy: query.sortBy ? { [query.sortBy]: query.sortOrder || 'asc' } : { order: 'asc' },
      }),
      this.prisma.department.count({ where }),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async findOne(id: string) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');

    const updated = await this.prisma.department.update({
      where: { id },
      data: updateDepartmentDto,
    });

    return updated;
  }

  async remove(id: string) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');

    await this.prisma.department.delete({ where: { id } });
    return { success: true };
  }
}
