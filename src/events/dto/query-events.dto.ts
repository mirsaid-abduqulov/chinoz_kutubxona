import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { DocumentCategory } from '../../core/database/generated';

export class QueryEventsDto extends BaseQueryDto {
  
  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  upcoming?: boolean;
  
}
