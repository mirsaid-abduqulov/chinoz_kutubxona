import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateSocialLinkDto {
  @ApiProperty({
    description: 'Ijtimoiy tarmoq nomi',
    example: 'telegram',
    enum: [
      'telegram',
      'facebook',
      'instagram',
      'youtube',
      'tiktok',
      'linkedin',
      'whatsapp',
      'twitter',
    ],
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.().toLowerCase() || '')
  platform: string;

  @ApiProperty({ description: 'Ijtimoiy tarmoq URL manzili' })
  @IsUrl()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim?.() || '')
  url: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Icon rasmi (PNG, SVG, max 1MB)',
  })
  icon_image?: Express.Multer.File;
}