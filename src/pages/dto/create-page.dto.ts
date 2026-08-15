import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PageSlug } from '../../core/database/generated';

export class CreatePageDto {
  @ApiProperty({ enum: PageSlug })
  @IsEnum(PageSlug)
  slug: PageSlug;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_latin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_cyril: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title_ru: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content_latin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content_cyril: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content_ru: string;
}
