import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { QueryGenreDto } from './dto/query-genre.dto';
import { normalizeName } from 'src/common/helpers/normalize-name.helper';
import { PrismaService } from 'src/core/database/prisma.service';
import { buildMultilangSearchWhere } from 'src/common/helpers/multilang-search.helper';
import { buildPaginatedResponse, buildPaginationParams } from 'src/common/helpers/pagination.helper';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGenreDto) {
    const data = {
      name_latin: normalizeName(dto.name_latin),
      name_cyril: normalizeName(dto.name_cyril),
      name_ru: normalizeName(dto.name_ru),
    };

    const existing = await this.prisma.genre.findFirst({
      where: {
        OR: [
          { name_latin: data.name_latin },
          { name_cyril: data.name_cyril },
          { name_ru: data.name_ru },
        ]
      }
    });

    if (existing) {
      throw new ConflictException('Bu kril/latin/rus tilidagi janr allaqachon mavjud');
    }

    return this.prisma.genre.create({ data });
  }

  async findAll(query: QueryGenreDto) {
    const { skip, take, page, limit } = buildPaginationParams(query);
    
    let where: any = {};
    if (query.search) {
      where = buildMultilangSearchWhere(query.search, 'name');
    }

    const [genres, total] = await Promise.all([
      this.prisma.genre.findMany({
        where,
        skip,
        take,
        orderBy: query.sortBy === 'created_at' ? { name_latin: query.sortOrder } : { [query.sortBy as string]: query.sortOrder },
      }),
      this.prisma.genre.count({ where }),
    ]);

    return buildPaginatedResponse(genres, total, page, limit);
  }

  async findOne(id: string) {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    if (!genre) throw new NotFoundException('Janr topilmadi');
    return genre;
  }

  async update(id: string, dto: UpdateGenreDto) {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    if (!genre) throw new NotFoundException('Janr topilmadi');

    const data: any = {};
    if (dto.name_latin) data.name_latin = normalizeName(dto.name_latin);
    if (dto.name_cyril) data.name_cyril = normalizeName(dto.name_cyril);
    if (dto.name_ru) data.name_ru = normalizeName(dto.name_ru);

    if (Object.keys(data).length > 0) { 
      const existing = await this.prisma.genre.findFirst({
        where: {
          id: { not: id },
          OR: [
            ...(data.name_latin ? [{ name_latin: data.name_latin }] : []),
            ...(data.name_cyril ? [{ name_cyril: data.name_cyril }] : []),
            ...(data.name_ru ? [{ name_ru: data.name_ru }] : []),
          ]
        }
      });
      if (existing) {
        throw new ConflictException('Bu janr allaqachon mavjud');
      }
    }

    return this.prisma.genre.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const genre = await this.prisma.genre.findUnique({
      where: { id },
      include: { books: true },
    });
    
    if (!genre) throw new NotFoundException('Janr topilmadi');

    if (genre.books && genre.books.length > 0) {
      throw new ConflictException('Bu janrga kitoblar biriktirilgan');
    }

    await this.prisma.genre.delete({ where: { id } });
    return { success: true };
  }
}
