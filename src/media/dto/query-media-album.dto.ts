import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';
import { booleanOrUndefined } from 'src/common/transformers/boolean-transformer';
import { MediaType } from 'src/core/database/generated';

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

  @ApiProperty({
    required: false,
    type: 'boolean',
    description: 'Publik albumlar bo\'yicha filtrlash',
    example: 'true',
  })
  @Transform(booleanOrUndefined)
  @IsBoolean()
  @IsOptional()
  is_public?: boolean;
}