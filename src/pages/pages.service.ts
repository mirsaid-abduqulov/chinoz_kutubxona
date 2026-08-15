import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from '../core/database/prisma.service';
import { PageSlug } from '../core/database/generated';

@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPageDto: CreatePageDto) {
    const existing = await this.prisma.page.findUnique({
      where: { slug: createPageDto.slug },
    });

    if (existing) {
      throw new ConflictException('Bu sahifa allaqachon mavjud, update qiling');
    }

    return this.prisma.page.create({
      data: createPageDto,
    });
  }

  async findAll() {
    return this.prisma.page.findMany({
      orderBy: { slug: 'asc' },
    });
  }

  async findOne(slug: PageSlug) {
    const page = await this.prisma.page.findUnique({
      where: { slug },
    });

    if (!page) throw new NotFoundException('Page not found');

    return page;
  }

  async update(slug: PageSlug, updatePageDto: UpdatePageDto) {
    const page = await this.prisma.page.findUnique({
      where: { slug },
    });

    if (!page) throw new NotFoundException('Page not found');

    return this.prisma.page.update({
      where: { slug },
      data: updatePageDto,
    });
  }

  async remove(slug: PageSlug) {
    const page = await this.prisma.page.findUnique({
      where: { slug },
    });

    if (!page) throw new NotFoundException('Page not found');

    await this.prisma.page.delete({
      where: { slug },
    });

    return { success: true };
  }
}
