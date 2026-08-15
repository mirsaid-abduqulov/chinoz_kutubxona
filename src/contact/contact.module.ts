import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { ContactMessagesService } from './contact-messages.service';
import { ContactMessagesController } from './contact-messages.controller';

@Module({
  controllers: [ContactInfoController, ContactMessagesController],
  providers: [ContactInfoService, ContactMessagesService],
})
export class ContactModule {}
