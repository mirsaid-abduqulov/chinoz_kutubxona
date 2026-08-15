import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
import { OnlineRequestType } from '../../core/database/generated';

export class CreateOnlineRequestDto {
  @ApiProperty({ enum: OnlineRequestType })
  @IsNotEmpty()
  @IsEnum(OnlineRequestType)
  type: OnlineRequestType;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  full_name: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.email || o.phone)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @ValidateIf(o => !o.phone || o.email)
  @IsNotEmpty({ message: 'Phone or email must be provided' })
  @IsString()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  book_id?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  message: string;
}
