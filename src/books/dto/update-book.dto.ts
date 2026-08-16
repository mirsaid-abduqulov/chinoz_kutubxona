import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsArray,
  IsUUID,
  IsInt,
  IsDateString,
  IsEnum,
  Min,
  Max,
} from 'class-validator';
import { Transform } from 'class-transformer';
// import { AvailabilityStatus, AccessLevel } from './create-book.dto';

export class UpdateBookDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  name_ru?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  description_ru?: string;

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  author_id?: string;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  published_date?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(11)
  @Transform(({ value }) => (value === '' || value === null ? undefined : Number(value)))
  grade_level?: number;

  @ApiProperty({
    example: ['uuid1', 'uuid2'],
    description: "Mahsulot IDlar ro'yxati",
  })
  @IsOptional()
  @IsArray({ message: "not_products massiv (array) bo'lishi shart!" })
  @IsUUID('4', {
    each: true,
    message:
      "not_products ichidagi har bir element to'g'ri UUID bo'lishi kerak!",
  })
  genreIds?: string[];
}