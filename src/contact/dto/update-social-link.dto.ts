import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateSocialLinkDto {
  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  @Transform(({ value }) => value?.trim?.() || undefined)
  url?: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  icon_image?: Express.Multer.File;
}