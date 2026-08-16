import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';
 
export class QueryContactMessageDto extends BaseQueryDto {
  @ApiProperty({ required: false, description: 'O\'qilgan yoki o\'qilmagan xabarlar' })
  @IsBoolean()
  @IsOptional()
  is_read?: boolean;
}
