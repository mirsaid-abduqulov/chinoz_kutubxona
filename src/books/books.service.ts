import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { QueryBookDto } from './dto/query-book.dto';
import { createReadStream, existsSync } from 'fs';
import { StorageService } from 'src/common/storage/storage.service';
import { PrismaService } from 'src/core/database/prisma.service';
import { normalizeName } from 'src/common/helpers/normalize-name.helper';
import { buildMultilangSearchWhere } from 'src/common/helpers/multilang-search.helper';
import { buildPaginatedResponse, buildPaginationParams } from 'src/common/helpers/pagination.helper';
import { detectFileType } from 'src/common/storage/multer.config';
import { join } from 'path';

@Injectable()
export class BooksService {
  private readonly logger = new Logger(BooksService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) { }

  async create(dto: CreateBookDto, userId: string) {
    if (!dto.genreIds || dto.genreIds.length === 0) {
      throw new BadRequestException('Kamida bitta janr tanlanishi shart');
    }

    const genres = await this.prisma.genre.findMany({
      where: { id: { in: dto.genreIds } },
    });
    if (genres.length !== dto.genreIds.length) {
      throw new NotFoundException('Belgilangan janrlardan ba\'zilari topilmadi');
    }

    const author = await this.prisma.author.findUnique({
      where: { id: dto.author_id },
    });
    if (!author) {
      throw new NotFoundException('Muallif topilmadi');
    }

    const normalizedName = normalizeName(dto.name_latin);
    const existing = await this.prisma.book.findFirst({
      where: {
        name_latin: normalizedName,
        author_id: dto.author_id,
      },
    });

    if (existing) {
      throw new ConflictException(
        'Bu muallif ostida shu nomli kitob allaqachon mavjud',
      );
    }

    const { genreIds, published_date, ...rest } = dto;

    const bookData = {
      ...rest,
      name_latin: normalizeName(dto.name_latin),
      name_cyril: normalizeName(dto.name_cyril),
      name_ru: normalizeName(dto.name_ru),
      description_latin: dto.description_latin?.trim() || null,
      description_cyril: dto.description_cyril?.trim() || null,
      description_ru: dto.description_ru?.trim() || null,
      published_date: published_date ? new Date(published_date) : null,
      genres: {
        create: genreIds.map((genreId) => ({
          genre: { connect: { id: genreId } },
        })),
      },
    };

    return this.prisma.book.create({
      data: { ...bookData, creator_id: userId },
      include: {
        genres: { include: { genre: true } },
        author: true,
        images: { where: { is_main: true }, take: 1 },
      },
    });
  }

  async findAll(query: QueryBookDto) {
    const { skip, take, page, limit } = buildPaginationParams(query);

    const conditions: any[] = [];

    if (query.search) {
      conditions.push(buildMultilangSearchWhere(query.search, 'name'));
    }
    if (query.author_id) {
      conditions.push({ author_id: query.author_id });
    }
    if (query.genre_id) {
      conditions.push({ genres: { some: { genreId: query.genre_id } } });
    }
    if (query.grade_level !== undefined) {
      conditions.push({ grade_level: query.grade_level });
    }

    const where = conditions.length > 0 ? { AND: conditions } : {};

    const ALLOWED_SORT_FIELDS = [
      'created_at',
      'updated_at',
      'name_latin',
      'published_date',
      'download_count',
      'rating_score',
      'weekly_trend_score',
    ];
    const sortBy = ALLOWED_SORT_FIELDS.includes(query.sortBy as string)
      ? query.sortBy
      : 'created_at';

    const [books, total] = await Promise.all([
      this.prisma.book.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy as string]: query.sortOrder },
        include: {
          images: {
            where: { is_main: true },
            take: 1,
          },
          genres: { include: { genre: true } },
          author: true,
        },
      }),
      this.prisma.book.count({ where }),
    ]);

    return buildPaginatedResponse(books, total, page, limit);
  }

  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        images: { orderBy: { order: 'asc' } },
        files: { orderBy: { order: 'asc' } },
        genres: { include: { genre: true } },
        author: true,
      },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }

    return book;
  }

  async update(id: string, dto: UpdateBookDto) {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }

    // Validate author if provided
    if (dto.author_id) {
      const author = await this.prisma.author.findUnique({
        where: { id: dto.author_id },
      });
      if (!author) {
        throw new NotFoundException('Muallif topilmadi');
      }
    }

    const { genreIds, published_date, ...rest } = dto;
    const data: any = { ...rest };

    if (dto.name_latin) {
      data.name_latin = normalizeName(dto.name_latin);
    }
    if (dto.name_cyril) {
      data.name_cyril = normalizeName(dto.name_cyril);
    }
    if (dto.name_ru) {
      data.name_ru = normalizeName(dto.name_ru);
    }

    if (dto.description_latin !== undefined) {
      data.description_latin = dto.description_latin?.trim() || null;
    }
    if (dto.description_cyril !== undefined) {
      data.description_cyril = dto.description_cyril?.trim() || null;
    }
    if (dto.description_ru !== undefined) {
      data.description_ru = dto.description_ru?.trim() || null;
    }

    if (published_date !== undefined) {
      data.published_date = published_date ? new Date(published_date) : null;
    }

    if (genreIds && genreIds.length > 0) {
      const genres = await this.prisma.genre.findMany({
        where: { id: { in: genreIds } },
      });
      if (genres.length !== genreIds.length) {
        throw new NotFoundException('Belgilangan janrlardan ba\'zilari topilmadi');
      }

      await this.prisma.genreBook.deleteMany({
        where: { bookId: id },
      });
      data.genres = {
        create: genreIds.map((genreId) => ({
          genre: { connect: { id: genreId } },
        })),
      };
    }

    return this.prisma.book.update({
      where: { id },
      data,
      include: {
        genres: { include: { genre: true } },
        author: true,
        images: { where: { is_main: true }, take: 1 },
      },
    });
  }

  async remove(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: { images: true, files: true },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }

    const fileUrls = [
      ...book.images.map((img) => img.url),
      ...book.files.map((file) => file.url),
    ];

    // Delete from DB (cascade handles relations)
    await this.prisma.book.delete({ where: { id } });

    // Clean up storage
    if (fileUrls.length > 0) {
      await Promise.allSettled(
        fileUrls.map((url) => this.storageService.deleteFile(url)),
      );
    }

    return { success: true, message: 'Kitob muvaffaqiyatli o\'chirildi' };
  }

  // --- Sub-resources: Images ---

  async addImages(bookId: string, files: Express.Multer.File[]) {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
      include: { images: true },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }
    if (!files || files.length === 0) {
      throw new BadRequestException('Hech bo\'lmaganda bitta rasm yuklanishi shart');
    }

    const hasMain = book.images.some((img) => img.is_main);
    const currentMaxOrder =
      book.images.length > 0 ? Math.max(...book.images.map((img) => img.order)) : -1;

    const savedFilesInfo = await Promise.all(
      files.map((file) =>
        this.storageService
          .saveFile(file, 'book_images')
          .catch((e) => {
            this.logger.error(`Rasmni saqlashda xato: ${e.message}`);
            return null;
          }),
      ),
    );

    const validFilesInfo = savedFilesInfo.filter((info) => info !== null);
    if (validFilesInfo.length === 0) {
      throw new BadRequestException('Rasmlarni saqlashda xato yuz berdi');
    }

    let isFirstImage = !hasMain;
    const dbImages: any[] = [];
    let orderCounter = currentMaxOrder + 1;

    for (const info of validFilesInfo) {
      try {
        const image = await this.prisma.bookImage.create({
          data: {
            book_id: bookId,
            url: info.url,
            is_main: isFirstImage,
            order: orderCounter++,
          },
        });
        dbImages.push(image);
        isFirstImage = false;
      } catch (error) {
        this.logger.error(`Rasmni DB ga saqlashda xato: ${error.message}`);
        await this.storageService.deleteFile(info.url);
      }
    }

    return dbImages;
  }

  async setMainImage(bookId: string, imageId: string) {
    const image = await this.prisma.bookImage.findFirst({
      where: { id: imageId, book_id: bookId },
    });

    if (!image) {
      throw new NotFoundException('Rasm bu kitobda topilmadi');
    }

    await this.prisma.$transaction([
      this.prisma.bookImage.updateMany({
        where: { book_id: bookId },
        data: { is_main: false },
      }),
      this.prisma.bookImage.update({
        where: { id: imageId },
        data: { is_main: true },
      }),
    ]);

    return { success: true, message: 'Rasm asosiy qilib belgilandi' };
  }

  async removeImage(bookId: string, imageId: string) {
    const image = await this.prisma.bookImage.findFirst({
      where: { id: imageId, book_id: bookId },
    });

    if (!image) {
      throw new NotFoundException('Rasm bu kitobda topilmadi');
    }

    const wasMain = image.is_main;
    await this.prisma.bookImage.delete({ where: { id: imageId } });
    await this.storageService.deleteFile(image.url);

    if (wasMain) {
      const remainingImage = await this.prisma.bookImage.findFirst({
        where: { book_id: bookId },
        orderBy: { order: 'asc' },
      });
      if (remainingImage) {
        await this.prisma.bookImage.update({
          where: { id: remainingImage.id },
          data: { is_main: true },
        });
      }
    }

    return { success: true, message: 'Rasm o\'chirildi' };
  }

  // --- Sub-resources: Files ---

  async addFiles(bookId: string, files: Express.Multer.File[]) {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
      include: { files: true },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }
    if (!files || files.length === 0) {
      throw new BadRequestException('Hech bo\'lmaganda bitta fayl yuklanishi shart');
    }

    const currentMaxOrder =
      book.files.length > 0 ? Math.max(...book.files.map((f) => f.order)) : -1;

    const savedFilesInfo = await Promise.all(
      files.map(async (file) => {
        try {
          const info = await this.storageService.saveFile(file, 'books');
          const fileType = detectFileType(file.mimetype, file.originalname);
          return { info, fileType };
        } catch (error) {
          this.logger.error(`Faylni saqlashda xato: ${error.message}`);
          return null;
        }
      }),
    );

    const validFilesInfo = savedFilesInfo.filter((res) => res !== null);
    if (validFilesInfo.length === 0) {
      throw new BadRequestException('Fayllarni saqlashda xato yuz berdi');
    }

    const dbFiles: any[] = [];
    let orderCounter = currentMaxOrder + 1;

    for (const res of validFilesInfo) {
      try {
        const bookFile = await this.prisma.bookFile.create({
          data: {
            book_id: bookId,
            url: res.info.url,
            file_name: res.info.fileName,
            file_size: res.info.fileSize,
            file_type: res.fileType,
            order: orderCounter++,
          },
        });
        dbFiles.push(bookFile);
      } catch (error) {
        this.logger.error(`Faylni DB ga saqlashda xato: ${error.message}`);
        await this.storageService.deleteFile(res.info.url);
      }
    }

    return dbFiles;
  }

  async removeFile(bookId: string, fileId: string) {
    const file = await this.prisma.bookFile.findFirst({
      where: { id: fileId, book_id: bookId },
    });

    if (!file) {
      throw new NotFoundException('Fayl bu kitobda topilmadi');
    }

    await this.prisma.bookFile.delete({ where: { id: fileId } });
    await this.storageService.deleteFile(file.url);

    return { success: true, message: 'Fayl o\'chirildi' };
  }

  async getDownloadStream(
    bookId: string,
    fileId: string,
    user?: { role: string },
  ) {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      throw new NotFoundException('Kitob topilmadi');
    }


    const file = await this.prisma.bookFile.findFirst({
      where: { id: fileId, book_id: bookId },
    });

    if (!file) {
      throw new NotFoundException('Fayl bu kitobda topilmadi');
    }

    const relativePath = file.url.replace('/media/', '');
    const fullPath = join(process.cwd(), 'media', relativePath);

    if (!existsSync(fullPath)) {
      this.logger.error(`Fayl diskda topilmadi: ${fullPath}`);
      throw new NotFoundException('Fayl fizik joyda topilmadi');
    }

    const stream = createReadStream(fullPath);
    return { stream, fileName: file.file_name };
  }

  async logDownload(bookId: string) {
    try {
      await this.prisma.$transaction([
        this.prisma.book.update({
          where: { id: bookId },
          data: { download_count: { increment: 1 } },
        }),
        this.prisma.bookDownloadLog.create({
          data: { book_id: bookId },
        }),
      ]);
    } catch (error) {
      this.logger.error(
        `Yuklab olish logini saqlashda xato: ${error.message}`,
      );
    }
  }
}