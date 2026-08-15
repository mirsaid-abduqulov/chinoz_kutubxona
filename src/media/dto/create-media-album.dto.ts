import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { MediaType } from '../../core/database/generated';

export class CreateMediaAlbumDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_latin: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_cyril: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title_ru: string;

  @ApiProperty({ enum: MediaType })
  @IsNotEmpty()
  @IsEnum(MediaType)
  type: MediaType;

  @ApiPropertyOptional({ type: 'string', format: 'binary' })
  @IsOptional()
  cover_image?: any;
}
