import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateAnnouncementDto {
  @ApiProperty({ required: false })
  @IsString({ message: 'title_latin string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_latin?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'title_cyril string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_cyril?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'title_ru string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_ru?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'content_latin string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  content_latin?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'content_cyril string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  content_cyril?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'content_ru string bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  content_ru?: string;

  @ApiProperty({ required: false })
  @IsBoolean({ message: 'is_public boolean bo\'lishi kerak' })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined; // o'zgartirilmasa, mavjud qiymat saqlanadi
  })
  is_public?: boolean;

  @ApiProperty({ 
    type: 'string', 
    format: 'binary', 
    required: false
  })
  @IsOptional()
  cover_image?: Express.Multer.File;
}