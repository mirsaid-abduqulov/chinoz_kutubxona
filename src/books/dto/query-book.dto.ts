import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, IsUUID, IsBoolean } from 'class-validator';
import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { Transform, Type } from 'class-transformer';
import { booleanOrUndefined } from 'src/common/transformers/boolean-transformer';

export class QueryBookDto extends BaseQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  author_id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  genre_id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  grade_level?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(booleanOrUndefined)
  @IsBoolean()
  is_public?: boolean;
}
