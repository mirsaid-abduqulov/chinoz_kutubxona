import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, IsUUID, IsBoolean } from 'class-validator';
import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { Transform, Type } from 'class-transformer';

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
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return value === 'true' || value === true || Number(value) === 1;
  })
  @IsBoolean()
  is_public?: boolean;
}
