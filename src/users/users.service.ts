import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import * as bcrypt from 'bcrypt';
import { buildPaginatedResponse, buildPaginationParams } from 'src/common/helpers/pagination.helper';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private excludeSecrets(user: any) {
    if (!user) return user;
    const { hashed_password, hashed_refresh_token, refresh_token_jti, ...userWithoutSecrets } = user;
    return userWithoutSecrets;
  }

  async create(dto: CreateUserDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { phone_number: dto.phone_number },
          ...(dto.email ? [{ email: dto.email }] : []),
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException('User with this phone number or email already exists');
    }

    const hashed_password = await bcrypt.hash(dto.password, 10);
    const { password, ...userData } = dto;

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        hashed_password,
      },
    });

    return this.excludeSecrets(user);
  }

  async findAll(query: QueryUserDto) {
    const { skip, take, page, limit } = buildPaginationParams(query);
    
    const where: any = {};
    if (query.search) {
      where.OR = [
        { full_name: { contains: query.search, mode: 'insensitive' } },
        { phone_number: { contains: query.search, mode: 'insensitive' } },
        ...(query.search.includes('@') ? [{ email: { contains: query.search, mode: 'insensitive' } }] : []),
      ];
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { [query.sortBy as string]: query.sortOrder },
      }),
      this.prisma.user.count({ where }),
    ]);

    const usersWithoutSecrets = users.map(u => this.excludeSecrets(u));
    return buildPaginatedResponse(usersWithoutSecrets, total, page, limit);
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.excludeSecrets(user);
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    const updateData: any = { ...dto };
    if (dto.password) {
      updateData.hashed_password = await bcrypt.hash(dto.password, 10);
      delete updateData.password;
    }

    if (dto.phone_number || dto.email) {
       const existingUser = await this.prisma.user.findFirst({
          where: {
            id: { not: id },
            OR: [
              ...(dto.phone_number ? [{ phone_number: dto.phone_number }] : []),
              ...(dto.email ? [{ email: dto.email }] : []),
            ],
          },
       });
       if (existingUser) {
          throw new ConflictException('Phone number or email already in use');
       }
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });

    return this.excludeSecrets(updatedUser);
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    await this.prisma.user.delete({ where: { id } });
    return { success: true };
  }
}
