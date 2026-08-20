import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './core/database/prsima.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './common/storage/storage.module';
import { GenresModule } from './genres/genres.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

import { ScheduleModule } from '@nestjs/schedule';
import { BannersModule } from './banners/banners.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { UsefulLinksModule } from './useful-links/useful-links.module';
import { PagesModule } from './pages/pages.module';
import { DepartmentsModule } from './departments/departments.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { DocumentsModule } from './documents/documents.module';
import { MediaModule } from './media/media.module';
import { OnlineRequestsModule } from './online-requests/online-requests.module';
import { ContactModule } from './contact/contact.module';
import { CacheMiddleware } from './common/middlewares/cashe.middleware';

@Module({
  imports: [
    PrismaModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
    AuthModule,
    StorageModule,
    UsersModule,
    GenresModule,
    AuthorsModule,
    BooksModule,
    BannersModule,
    AnnouncementsModule,
    UsefulLinksModule,
    PagesModule,
    DepartmentsModule,
    NewsModule,
    EventsModule,
    DocumentsModule,
    MediaModule,
    OnlineRequestsModule,
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CacheMiddleware).forRoutes('*');
  }
}