import { ApiProperty } from '@nestjs/swagger';

export class UploadBookfilesDto {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: 'Kitob uchun yuklanadigan rasmlar (maksimal 10 ta)',
  })
  files: any[];
}