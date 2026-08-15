import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBannerDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title_ru?: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  link_url?: string;

  @ApiProperty({ required: false, default: 0 })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  order?: number;

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  is_active?: boolean;
}
