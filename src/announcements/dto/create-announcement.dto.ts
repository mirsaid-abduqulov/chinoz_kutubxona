import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAnnouncementDto {
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

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  is_published?: boolean;
}
