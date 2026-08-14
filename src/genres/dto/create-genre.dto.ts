import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
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
}
