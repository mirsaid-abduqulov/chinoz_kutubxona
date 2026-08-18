import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { MediaType } from './create-media-album.dto';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';
 
export class QueryMediaAlbumDto extends BaseQueryDto {
  @ApiProperty({
    required: false,
    enum: MediaType,
    description: 'Album turi bo\'yicha filtrlash',
    example: 'PHOTO',
  })
  @IsEnum(MediaType)
  @IsOptional()
  type?: MediaType;
}