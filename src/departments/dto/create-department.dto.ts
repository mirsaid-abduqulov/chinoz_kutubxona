import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDepartmentDto {
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

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description_ru?: string;

  @ApiProperty({ required: false, default: 0 })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  order?: number;

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  is_active?: boolean;
}
