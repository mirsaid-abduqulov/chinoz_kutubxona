import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PageSlug } from "src/core/database/generated";

export class CreatePageDto {
  @ApiProperty({
    enum: PageSlug,
    description: 'Sahifa slug (noyob identifikator)',
    example: 'ABOUT',
  })
  @IsEnum(PageSlug)
  @IsNotEmpty()
  slug: PageSlug;
 
  @ApiProperty({ description: 'Sahifa sarlavhasi (lotin)' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_latin: string;
 
  @ApiProperty({ description: 'Sahifa sarlavhasi (kirill)' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_cyril: string;
 
  @ApiProperty({ description: 'Sahifa sarlavhasi (rus)' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  title_ru: string;
 
  @ApiProperty({ description: 'Sahifa mazmuni (lotin)', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  content_latin: string;
 
  @ApiProperty({ description: 'Sahifa mazmuni (kirill)', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  content_cyril: string;
 
  @ApiProperty({ description: 'Sahifa mazmuni (rus)', type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  content_ru: string;
}