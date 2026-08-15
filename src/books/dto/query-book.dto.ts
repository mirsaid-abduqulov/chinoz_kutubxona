import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, IsUUID } from 'class-validator';
import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { Type } from 'class-transformer';

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
}
