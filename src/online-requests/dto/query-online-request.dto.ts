import { BaseQueryDto } from '../../common/dto/base-query.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { OnlineRequestType, RequestStatus } from '../../core/database/generated';

export class QueryOnlineRequestDto extends BaseQueryDto {
  @ApiPropertyOptional({ enum: OnlineRequestType })
  @IsOptional()
  @IsEnum(OnlineRequestType)
  type?: OnlineRequestType;

  @ApiPropertyOptional({ enum: RequestStatus })
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;
}
