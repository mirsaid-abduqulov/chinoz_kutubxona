import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { UpdatePageDto } from './dto/update-page.dto';
import { CreatePageDto } from './dto/create-page.dto';
import { PageSlug } from 'src/core/database/generated';
 
@Injectable()
export class PagesService {
  private readonly logger = new Logger(PagesService.name);
 
  constructor(private readonly prisma: PrismaService) {}
 
  async create(dto: CreatePageDto) {
    if (!Object.values(PageSlug).includes(dto.slug)) {
      throw new BadRequestException(
        `Noto'g'ri slug. Ruxsat etilgan: ${Object.values(PageSlug).join(', ')}`,
      );
    }
 
    if (
      !dto.title_latin?.trim() ||
      !dto.title_cyril?.trim() ||
      !dto.title_ru?.trim()
    ) {
      throw new BadRequestException('Barcha tillardagi sarlavha majburiy');
    }
 
    if (
      !dto.content_latin?.trim() ||
      !dto.content_cyril?.trim() ||
      !dto.content_ru?.trim()
    ) {
      throw new BadRequestException('Barcha tillardagi mazmun majburiy');
    }
 
    const existing = await this.prisma.page.findUnique({
      where: { slug: dto.slug },
    });
 
    if (existing) {
      throw new ConflictException(
        `Sahifa slug "${dto.slug}" allaqachon mavjud`,
      );
    }
 
    try {
      return await this.prisma.page.create({
        data: {
          slug: dto.slug,
          title_latin: dto.title_latin.trim(),
          title_cyril: dto.title_cyril.trim(),
          title_ru: dto.title_ru.trim(),
          content_latin: dto.content_latin.trim(),
          content_cyril: dto.content_cyril.trim(),
          content_ru: dto.content_ru.trim(),
        },
      });
    } catch (error) {
      this.logger.error(`Sahifa yaratishda xato: ${error.message}`);
      throw new BadRequestException('Sahifa yaratishda xato yuz berdi');
    }
  }
 
  async findAll() {
    try {
      return await this.prisma.page.findMany({
        orderBy: { created_at: 'asc' },
      });
    } catch (error) {
      this.logger.error(`Sahifalarni o'qishda xato: ${error.message}`);
      throw new BadRequestException('Sahifalarni yuklashda xato yuz berdi');
    }
  }
 
  async findBySlug(slug: string) {
    if (!slug?.trim()) {
      throw new BadRequestException('Slug majburiy');
    }
 
    if (!Object.values(PageSlug).includes(slug as PageSlug)) {
      throw new BadRequestException(
        `Noto'g'ri slug. Ruxsat etilgan: ${Object.values(PageSlug).join(', ')}`,
      );
    }
 
    const page = await this.prisma.page.findUnique({
      where: { slug: slug as PageSlug },
    });
 
    if (!page) {
      throw new NotFoundException(
        `Sahifa "${slug}" topilmadi`,
      );
    }
 
    return page;
  }
 
  async findById(id: string) {
    if (!id?.trim()) {
      throw new BadRequestException('Sahifa ID majburiy');
    }
 
    const page = await this.prisma.page.findUnique({
      where: { id },
    });
 
    if (!page) {
      throw new NotFoundException('Sahifa topilmadi');
    }
 
    return page;
  }
 
  async update(id: string, dto: UpdatePageDto) {
    const page = await this.findById(id);
 
    const data: any = {};
 
    if (dto.title_latin !== undefined) {
      if (!dto.title_latin.trim()) {
        throw new BadRequestException('Sarlavha lotin bo\'sh bo\'lishi mumkin emas');
      }
      data.title_latin = dto.title_latin.trim();
    }
 
    if (dto.title_cyril !== undefined) {
      if (!dto.title_cyril.trim()) {
        throw new BadRequestException('Sarlavha kirill bo\'sh bo\'lishi mumkin emas');
      }
      data.title_cyril = dto.title_cyril.trim();
    }
 
    if (dto.title_ru !== undefined) {
      if (!dto.title_ru.trim()) {
        throw new BadRequestException('Sarlavha rus bo\'sh bo\'lishi mumkin emas');
      }
      data.title_ru = dto.title_ru.trim();
    }
 
    if (dto.content_latin !== undefined) {
      if (!dto.content_latin.trim()) {
        throw new BadRequestException('Mazmun lotin bo\'sh bo\'lishi mumkin emas');
      }
      data.content_latin = dto.content_latin.trim();
    }
 
    if (dto.content_cyril !== undefined) {
      if (!dto.content_cyril.trim()) {
        throw new BadRequestException('Mazmun kirill bo\'sh bo\'lishi mumkin emas');
      }
      data.content_cyril = dto.content_cyril.trim();
    }
 
    if (dto.content_ru !== undefined) {
      if (!dto.content_ru.trim()) {
        throw new BadRequestException('Mazmun rus bo\'sh bo\'lishi mumkin emas');
      }
      data.content_ru = dto.content_ru.trim();
    }
 
    try {
      return await this.prisma.page.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.logger.error(`Sahifa yangilashda xato: ${error.message}`);
      throw new BadRequestException('Sahifa yangilashda xato yuz berdi');
    }
  }
 
  async remove(id: string) {
    const page = await this.findById(id);
 
    try {
      await this.prisma.page.delete({
        where: { id },
      });
 
      return {
        success: true,
        message: `Sahifa "${page.slug}" o'chirildi`,
      };
    } catch (error) {
      this.logger.error(`Sahifa o'chirishda xato: ${error.message}`);
      throw new BadRequestException('Sahifa o\'chirishda xato yuz berdi');
    }
  }
 
  async exists(slug: PageSlug): Promise<boolean> {
    const page = await this.prisma.page.findUnique({
      where: { slug },
    });
    return !!page;
  }
}