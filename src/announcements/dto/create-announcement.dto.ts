import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAnnouncementDto {
  @ApiProperty({ description: 'Sarlavha (lotin)' })
  @IsString({ message: 'title_latin string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'title_latin bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  title_latin: string;

  @ApiProperty({ description: 'Sarlavha (kirill)' })
  @IsString({ message: 'title_cyril string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'title_cyril bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  title_cyril: string;

  @ApiProperty({ description: 'Sarlavha (rus)' })
  @IsString({ message: 'title_ru string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'title_ru bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  title_ru: string;

  @ApiProperty({ description: 'Matn (lotin)' })
  @IsString({ message: 'content_latin string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'content_latin bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  content_latin: string;

  @ApiProperty({ description: 'Matn (kirill)' })
  @IsString({ message: 'content_cyril string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'content_cyril bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  content_cyril: string;

  @ApiProperty({ description: 'Matn (rus)' })
  @IsString({ message: 'content_ru string bo\'lishi kerak' })
  @IsNotEmpty({ message: 'content_ru bo\'sh bo\'lishi mumkin emas' })
  @Transform(({ value }) => value?.trim?.() || '')
  content_ru: string;

  @ApiProperty({ 
    required: false, 
    default: true,
    description: 'E\'lon chop etilganmi' 
  })
  @IsBoolean({ message: 'is_published boolean bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return true; // default
  })
  is_published?: boolean;

  @ApiProperty({ 
    type: 'string', 
    format: 'binary', 
    required: false,
    description: 'E\'lon muqovasi rasmi (JPEG, PNG, WebP, max 5MB)'
  })
  @IsOptional()
  cover_image?: Express.Multer.File;
}