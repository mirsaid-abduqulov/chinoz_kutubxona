import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: '+998951910419',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsNotEmpty({ message: 'Telefon raqam bo‘sh bo‘lmasligi kerak!' })
  phone_number: string;

  @ApiProperty({ example: 'ab9572010', description: 'Foydalanuvchi paroli' })
  @IsString({ message: 'Parol matn ko‘rinishida bo‘lishi kerak!' })
  @IsNotEmpty({ message: 'Parol bo‘sh bo‘lmasligi kerak!' })
  @MinLength(6, {
    message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak!',
  })
  password: string;
}
