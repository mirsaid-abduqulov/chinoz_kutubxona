import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsLatitude, IsLongitude } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UpdateContactInfoDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  address_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  address_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  address_ru?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  phone?: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.().toLowerCase() || undefined)
  email?: string;

  @ApiProperty({ required: false })
  @IsLatitude()
  @IsOptional()
  @Type(() => Number)
  latitude?: number;

  @ApiProperty({ required: false })
  @IsLongitude()
  @IsOptional()
  @Type(() => Number)
  longitude?: number;
}