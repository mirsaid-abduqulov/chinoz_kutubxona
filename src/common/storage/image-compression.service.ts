
import {
  Injectable,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

// Type definitions
type ImageSizeKey = 'thumbnail' | 'small' | 'medium' | 'large';

interface ImageSizes {
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
}

interface CompressedImageResult {
  original: string;
  sizes: ImageSizes;
  originalSize: number;
  compressedSize: number;
  savedBytes: number;
}

@Injectable()
export class ImageCompressionService {
  private readonly logger = new Logger(ImageCompressionService.name);

  private readonly SIZE_CONFIG: Record<ImageSizeKey, number> = {
    thumbnail: 200,  // Preview
    small: 400,      // Mobile
    medium: 800,     // Tablet
    large: 1600,     // Desktop
  };

  /**
   * Rasmni siqish, progressive JPEG ga aylantirish va turli o'lchamdagi versiyalar generatsiya qilish
   */
  async compressAndOptimize(
    inputPath: string,
    outputDir: string,
    fileName: string,
  ): Promise<CompressedImageResult> {
    try {
      // Fayl nomi sozlash
      const nameWithoutExt = path.parse(fileName).name;

      // 1. Original rasmni o'qish va size olish
      const originalFile = fs.statSync(inputPath);
      const originalSize = originalFile.size;

      this.logger.log(
        `Rasm siqish boshlanadi: ${fileName} (${this.formatBytes(originalSize)})`
      );

      // 2. Original rasmni siqish - Progressive JPEG
      const originalFileName = `${nameWithoutExt}-original.jpg`;
      const originalPath = path.join(outputDir, originalFileName);

      const originalBuffer = await sharp(inputPath)
        .rotate() // EXIF rotation qo'llash
        .jpeg({
          quality: 80,
          progressive: true,
          mozjpeg: true,
        })
        .toBuffer();

      fs.writeFileSync(originalPath, originalBuffer);
      const compressedSize = originalBuffer.length;

      this.logger.log(
        `Original siqish tugatildi: ${this.formatBytes(compressedSize)}`
      );

      // 3. Turli o'lchamdagi versiyalar generatsiya qilish
      const generatedSizes: ImageSizes = {
        thumbnail: '',
        small: '',
        medium: '',
        large: '',
      };

      let totalSizedSize = 0;

      for (const [sizeName, width] of Object.entries(
        this.SIZE_CONFIG
      ) as Array<[ImageSizeKey, number]>) {
        const sizedFileName = `${nameWithoutExt}-${sizeName}.jpg`;
        const sizedPath = path.join(outputDir, sizedFileName);

        const sizedBuffer = await sharp(inputPath)
          .rotate()
          .resize(width, width, {
            fit: 'cover',
            position: 'center',
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 75,
            progressive: true,
            mozjpeg: true,
          })
          .toBuffer();

        fs.writeFileSync(sizedPath, sizedBuffer);
        generatedSizes[sizeName] = `/${sizedFileName}`;
        totalSizedSize += sizedBuffer.length;

        this.logger.log(
          `Generated ${sizeName} (${width}px): ${this.formatBytes(
            sizedBuffer.length
          )}`
        );
      }

      // 4. Temp fayl ochir
      if (fs.existsSync(inputPath)) {
        fs.unlinkSync(inputPath);
      }

      const totalCompressedSize = compressedSize + totalSizedSize;
      const savedBytes = originalSize - totalCompressedSize;

      return {
        original: `/${originalFileName}`,
        sizes: generatedSizes,
        originalSize,
        compressedSize: totalCompressedSize,
        savedBytes,
      };
    } catch (error) {
      this.logger.error(`Rasm siqishda xato: ${error.message}`);
      throw new BadRequestException('Rasmni siqishda xato yuz berdi');
    }
  }

  /**
   * Bitta rasm buffer'ni siqish (faqat download uchun)
   */
  async optimizeBuffer(buffer: Buffer): Promise<Buffer> {
    try {
      return await sharp(buffer)
        .rotate()
        .jpeg({
          quality: 80,
          progressive: true,
          mozjpeg: true,
        })
        .toBuffer();
    } catch (error) {
      this.logger.error(`Buffer siqishda xato: ${error.message}`);
      throw new BadRequestException('Rasmni siqishda xato yuz berdi');
    }
  }

  /**
   * Hajmni o'qilishi va ko'rinishi
   */
  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
    );
  }
}