import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDepartmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_latin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_cyril: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name_ru: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  position_latin?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  position_cyril?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  position_ru?: string;

  @ApiProperty({ required: false, default: 0 })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  position_order?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  fax?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  reception_days?: string;

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  is_active?: boolean;
}
