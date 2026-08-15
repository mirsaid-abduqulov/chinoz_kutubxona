import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

import { BookScoringCron } from './book-scoring.cron';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BookScoringCron],
  exports: [BooksService],
})
export class BooksModule {}
