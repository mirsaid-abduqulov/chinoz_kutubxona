import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
 
export class UpdateMediaAlbumDto {
  @ApiProperty({
    required: false,
    description: 'Album sarlavhasi (lotin)',
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_latin?: string;
 
  @ApiProperty({
    required: false,
    description: 'Album sarlavhasi (kirill)',
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_cyril?: string;
 
  @ApiProperty({
    required: false,
    description: 'Album sarlavhasi (rus)',
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_ru?: string;
 
  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Yangi muqova rasmi',
  })
  @IsOptional()
  cover_image?: Express.Multer.File;
 
  @ApiProperty({
    type: 'boolean',
    required: false,
    description: 'Public holatini o\'zgartirish',
  })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  is_public?: boolean;
}