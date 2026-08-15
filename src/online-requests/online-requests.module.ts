import { Module } from '@nestjs/common';
import { OnlineRequestsService } from './online-requests.service';
import { OnlineRequestsController } from './online-requests.controller';

@Module({
  controllers: [OnlineRequestsController],
  providers: [OnlineRequestsService],
})
export class OnlineRequestsModule {}
