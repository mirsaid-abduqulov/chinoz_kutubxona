import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateNewsDto } from './create-news.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
    @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      title_latin?: string;
    
      @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      title_cyril?: string;
    
      @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      title_ru?: string;
    
      
      @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      content_latin?: string;
    
      @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      content_cyril?: string;
    
      @ApiPropertyOptional()
      @IsOptional()
      @IsString()
      @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
      content_ru?: string;
    
      @ApiPropertyOptional({ type: 'string', format: 'binary' })
      @IsOptional()
      cover_image?: any;
    
      @ApiPropertyOptional()
      @IsOptional()
      @Transform(({ value }) => value === 'true' || value === true)
      @IsBoolean()
      is_public?: boolean;
}
