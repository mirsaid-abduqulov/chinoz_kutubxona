import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsArray,
  IsUUID,
  IsInt,
  IsDateString,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateBookDto {
  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_latin: string;

  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_cyril: string;

  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_ru: string;

  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_latin: string;

  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_cyril: string;

  @ApiProperty({ required: false })
  @IsString()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_ru: string;

  @ApiProperty()
  @IsUUID()
  author_id: string;

  @ApiProperty()
  @IsDateString()
  published_date: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(11)
  @Transform(({ value }) => (value === '' || value === null ? undefined : Number(value)))
  grade_level?: number;

  @ApiProperty({
    example: ['uuid1', 'uuid2'],
    description: "Janr IDlar ro'yxati",
  })
  @IsOptional()
  @IsArray({ message: "genreIds massiv (array) bo'lishi shart!" })
  @IsUUID('4', {
    each: true,
    message:
      "genreIds ichidagi har bir element to'g'ri UUID bo'lishi kerak!",
  })
  genreIds?: string[];

  @ApiProperty({
    required: false,
    description: 'Kitob jamoatchilikka ko\'rsatilishi kerakmi?',
    default: true,
  })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  is_public?: boolean;
}