import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';

export class UpdateContactInfoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address_ru?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  telegram_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  facebook_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  instagram_url?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  youtube_url?: string;
}
