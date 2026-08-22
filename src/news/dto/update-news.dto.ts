import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { trimmedOrUndefined } from 'src/common/transformers/string-transformer';
import { booleanOrUndefined } from 'src/common/transformers/boolean-transformer';

export class UpdateNewsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  title_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  title_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  title_ru?: string;


  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  content_latin?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  content_cyril?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(trimmedOrUndefined)
  content_ru?: string;

  @ApiPropertyOptional({ type: 'string', format: 'binary' })
  @IsOptional()
  cover_image?: Express.Multer.File;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(booleanOrUndefined)
  @IsBoolean()
  is_public?: boolean;
}
