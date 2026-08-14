import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name_latin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name_cyril: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description_latin?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description_cyril?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description_ru?: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  author_id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  published_date?: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  grade_level?: number;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  creator_id: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsNotEmpty()
  genreIds: string[];
}
