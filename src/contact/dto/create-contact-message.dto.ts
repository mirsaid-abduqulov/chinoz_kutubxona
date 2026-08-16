import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateContactMessageDto {
  @ApiProperty({ description: 'To\'liq ismi' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  full_name: string;
 
  @ApiProperty({ required: false, description: 'Elektron pochta' })
  @IsEmail()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.().toLowerCase() || undefined)
  email?: string;
 
  @ApiProperty({ required: false, description: 'Telefon raqami' })
  @IsPhoneNumber('UZ')
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  phone?: string;
 
  @ApiProperty({ description: 'Xabar mazmuni' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  message: string;
 
  @ValidateIf(() => true)
  validateEmailOrPhone() {
    if (!this.email && !this.phone) {
      throw new Error('Email yoki telefon raqamidan kamida bittasi majburiy');
    }
    return true;
  }
}