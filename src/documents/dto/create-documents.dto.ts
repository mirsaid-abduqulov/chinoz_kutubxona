import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsEnum, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DocumentCategory } from '../../core/database/generated';

export class CreateDocumentsDto {
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


  @ApiProperty({ enum: DocumentCategory })
  @IsNotEmpty()
  @IsEnum(DocumentCategory)
  category: DocumentCategory;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
    description: 'Document file (PDF, DOC, DOCX, max 10MB)',
  })
  file?: Express.Multer.File;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => typeof value === 'string' ? value.toLowerCase() === 'true' : value)
  is_public?: boolean = false;
}
