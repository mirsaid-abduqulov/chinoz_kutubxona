import { Module } from '@nestjs/common';
import { MediaAlbumsService } from './media-albums.service';
import { MediaAlbumsController } from './media-albums.controller';

@Module({
  controllers: [MediaAlbumsController],
  providers: [MediaAlbumsService],
})
export class MediaModule {}
