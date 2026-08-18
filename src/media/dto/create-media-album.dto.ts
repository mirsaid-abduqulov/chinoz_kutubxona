import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
 
export enum MediaType {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
  PRESENTATION = 'PRESENTATION',
}
 
export class CreateMediaAlbumDto {
  @ApiProperty({
    enum: MediaType,
    description: 'Album turi',
    example: 'PHOTO',
  })
  @IsEnum(MediaType)
  @IsNotEmpty()
  type: MediaType;
 
  @ApiProperty({
    description: 'Album sarlavhasi (lotin)',
    example: '2024 Kitob Tanlovini',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_latin: string;
 
  @ApiProperty({
    description: 'Album sarlavhasi (kirill)',
    example: '2024 йил китоб танловини',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_cyril: string;
 
  @ApiProperty({
    description: 'Album sarlavhasi (rus)',
    example: 'Выбор лучшей книги 2024',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_ru: string;
 
  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Album muqovasi (PNG, JPEG, WebP)',
  })
  @IsOptional()
  cover_image?: Express.Multer.File;
 
  @ApiProperty({
    type: 'boolean',
    required: false,
    default: true,
    description: 'Albom public bo\'lsinmi',
  })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return true;
  })
  is_public?: boolean;
}