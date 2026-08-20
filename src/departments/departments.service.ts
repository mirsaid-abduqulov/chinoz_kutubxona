import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../core/database/prisma.service';
import { QueryDepartmentDto } from './dto/query-department.dto';
import { buildPaginationParams, buildPaginatedResponse } from '../common/helpers/pagination.helper';
import { Prisma } from 'src/core/database/generated';
import { buildMultilangSearchWhere } from 'src/common/helpers/multilang-search.helper';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDepartmentDto: CreateDepartmentDto) {
    const where: Prisma.DepartmentMemberWhereInput = { OR: [] };
    if (createDepartmentDto.phone) {
      where.OR?.push({ phone: createDepartmentDto.phone })
    }
    if (createDepartmentDto.fax) {
      where.OR?.push({ fax: createDepartmentDto.fax })
    }
    if (createDepartmentDto.email) {
      where.OR?.push({ email: createDepartmentDto.email });
    }
    const existMember = await this.prisma.departmentMember.findFirst({
      where: where,
    });
    if (existMember) {
      throw new BadRequestException('Telefon raqami/Email/Fax shulardan bittasi band qilingan');
    }
    const department = await this.prisma.departmentMember.create({
      data: createDepartmentDto,
    });
    return department;
  }

  async findAll(query: QueryDepartmentDto) {
    const { skip, take } = buildPaginationParams(query);
    const where: Prisma.DepartmentMemberWhereInput = {};
    if (query.search) {
      const full_name = buildMultilangSearchWhere(query.search, 'full_name')
      const position = buildMultilangSearchWhere(query.search, 'position')
      where.  OR = [
        ...(full_name?.OR || []),
        ...(position?.OR || []),
        { phone: { contains: query.search, mode: 'insensitive' } },
        { fax: { contains: query.search, mode: 'insensitive' } },
        { reception_days: { contains: query.search, mode: 'insensitive' } },
      ]
    }


    const [data, total] = await Promise.all([
      this.prisma.departmentMember.findMany({
        where,
        skip,
        take,
        orderBy: { position_order: query.sortOrder },
      }),
      this.prisma.departmentMember.count({ where }),
    ]);

    return buildPaginatedResponse(data, total, query.page! || 1, query.limit! || 10);
  }

  async findOne(id: string) {
    const department = await this.prisma.departmentMember.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.prisma.departmentMember.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');

    const where: Prisma.DepartmentMemberWhereInput = { OR: [] };
    if (updateDepartmentDto.phone) {
      where.OR?.push({ phone: updateDepartmentDto.phone })
    }
    if (updateDepartmentDto.fax) {
      where.OR?.push({ fax: updateDepartmentDto.fax })
    }
    if (updateDepartmentDto.email) {
      where.OR?.push({ email: updateDepartmentDto.email });
    }
    const existMember = await this.prisma.departmentMember.findFirst({
      where: where,
    });
    if (existMember) {
      throw new BadRequestException(' phone numbe/email/fax  already exists');
    }

    const updated = await this.prisma.departmentMember.update({
      where: { id },
      data: updateDepartmentDto,
    });

    return updated;
  }

  async remove(id: string) {
    const department = await this.prisma.departmentMember.findUnique({ where: { id } });
    if (!department) throw new NotFoundException('Department not found');

    await this.prisma.departmentMember.delete({ where: { id } });
    return { success: true };
  }
}
