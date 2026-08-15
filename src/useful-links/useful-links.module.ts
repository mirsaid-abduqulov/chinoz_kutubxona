import { Module } from '@nestjs/common';
import { UsefulLinksService } from './useful-links.service';
import { UsefulLinksController } from './useful-links.controller';

@Module({
  controllers: [UsefulLinksController],
  providers: [UsefulLinksService],
})
export class UsefulLinksModule {}
