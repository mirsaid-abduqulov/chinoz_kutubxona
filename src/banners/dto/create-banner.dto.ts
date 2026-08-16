// dto/create-banner.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean, IsInt, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBannerDto {
  @ApiProperty({ required: false, description: 'Banner sarlavhasi (lotin)' })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_latin?: string;

  @ApiProperty({ required: false, description: 'Banner sarlavhasi (kirill)' })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_cyril?: string;

  @ApiProperty({ required: false, description: 'Banner sarlavhasi (rus)' })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  title_ru?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
    description: 'Banner rasmi (JPEG, PNG, WebP, max 5MB)',
  })
  image_file?: Express.Multer.File;

  @ApiProperty({ required: false, description: 'Banner bosilganda yuboriladigan havola' })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  link_url?: string;

  @ApiProperty({ required: false, default: 0, description: 'Banner tartib raqami' })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => {
    const num = parseInt(value, 10);
    return isNaN(num) ? 0 : num;
  })
  order?: number;

  @ApiProperty({ required: false, default: true, description: 'Banner faol holatda' })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return true;
  })
  is_active?: boolean;
}