import { Injectable, NotFoundException, ConflictException, Logger, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRole } from 'src/core/database/generated';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import * as bcrypt from 'bcrypt';
import { buildPaginatedResponse, buildPaginationParams } from 'src/common/helpers/pagination.helper';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  private excludeSecrets(user: any) {
    if (!user) return user;
    const { hashed_password, hashed_refresh_token, refresh_token_jti, ...userWithoutSecrets } = user;
    return userWithoutSecrets;
  }

  async onModuleInit() {
    const exists = await this.prisma.user.findFirst({
      where: { role: UserRole.SUPER_ADMIN },
    });
    if (exists) {
      this.logger.log('Super admin allaqachon mavjud. Yaratish o\'tkazib yuborildi.');
      return;
    }

    const plainPassword = this.configService.get<string>('SUPER_ADMIN_PASSWORD');
    const adminPhone = this.configService.get<string>('SUPER_ADMIN_PHONE');
    const adminEmail = this.configService.get<string>('SUPER_ADMIN_EMAIL');
    const adminName = this.configService.get<string>('SUPER_ADMIN_NAME');
    
    if (!plainPassword && !adminPhone && !adminEmail && !adminName) {
      this.logger.error(
        "SUPER_ADMIN_PASSWORD, SUPER_ADMIN_PHONE, SUPER_ADMIN_EMAIL, SUPER_ADMIN_NAME muhit o'zgaruvchilari topilmadi! Super admin yaratilmadi.",
      );
      return;
    }

    try {
      const hashed_password = await bcrypt.hash(plainPassword??"12345678", 10);
      await this.prisma.user.create({
        data: {
          full_name: adminName??"Super Admin",
          phone_number: adminPhone??"+998901234567",
          email: adminEmail??"example@gmail.com",
          hashed_password,
          role: UserRole.SUPER_ADMIN,
        }
      });
      this.logger.log('Super admin muvaffaqiyatli yaratildi');
    } catch (error) {
      this.logger.error('Super admin yaratishda xatolik', error);
      throw new InternalServerErrorException(
        'Super admin yaratishda xatolik yuz berdi',
      );
    }
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
