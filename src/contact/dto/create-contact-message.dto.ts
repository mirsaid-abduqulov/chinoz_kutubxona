import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateContactMessageDto {
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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  message: string;
}
