import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_latin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_cyril: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_ru: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  biography_latin?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  biography_cyril?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  biography_ru?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nationality_latin?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nationality_cyril?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nationality_ru?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  birth_date?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  death_date?: string;
}
