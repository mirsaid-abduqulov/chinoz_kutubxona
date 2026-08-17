import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateEventsDto } from './create-events.dto';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class UpdateEventsDto extends PartialType(CreateEventsDto) {
    @ApiPropertyOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    title_latin?: string;

    @ApiPropertyOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    title_cyril?: string;

    @ApiPropertyOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    title_ru?: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    description_latin?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    description_cyril?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    description_ru?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    location_latin?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    location_cyril?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    location_ru?: string;

    @IsOptional()
    @ApiPropertyOptional({
        example: '2026-08-19',
        description: 'Tadbir sanasi (YYYY-MM-DD formatida)',
    })
    @Transform(({ value }) => {
        if (value === 'null' || value === 'undefined' || value === "") return undefined;
        if (typeof value === 'string') return value.trim();
        return value;
    })
    event_date?: string;

    @ApiPropertyOptional({
        type: 'string',
        format: 'binary',
        required: false,
        description: 'Cover image for the event',
    })
    cover_image?: Express.Multer.File;

    @ApiPropertyOptional()
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    is_public?: boolean;
}
