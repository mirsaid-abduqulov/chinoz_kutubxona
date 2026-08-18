import { Module } from '@nestjs/common';
import { MediaController } from './media-albums.controller';
import { MediaService } from './media-albums.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule { }
