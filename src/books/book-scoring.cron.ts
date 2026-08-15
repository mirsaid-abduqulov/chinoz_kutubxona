import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../core/database/prisma.service';
import { calculateBayesianScores } from '../common/scoring/book-scoring.helper';

@Injectable()
export class BookScoringCron {
  private readonly logger = new Logger(BookScoringCron.name);

  constructor(private readonly prisma: PrismaService) {}

  // Har yakshanba kuni, kun oxirida (23:59) ishga tushadi
  @Cron('59 23 * * 0')
  async handleWeeklyScoring() {
    this.logger.log('Haftalik kitob reytingini hisoblash boshlandi...');

    try {
      await this.updateAllTimeScores();
      await this.updateWeeklyTrendScores();
      this.logger.log('Haftalik kitob reytingi muvaffaqiyatli yangilandi.');
    } catch (error) {
      this.logger.error('Reytingni hisoblashda xatolik', error);
    }
  }

  private async updateAllTimeScores() {
    const books = await this.prisma.book.findMany({
      select: { id: true, download_count: true },
    });

    const scores = calculateBayesianScores(
      books.map((b) => ({ bookId: b.id, count: b.download_count })),
    );

    await Promise.all(
      Array.from(scores.entries()).map(([bookId, score]) =>
        this.prisma.book.update({
          where: { id: bookId },
          data: { rating_score: score, score_updated_at: new Date() },
        }),
      ),
    );
  }

  private async updateWeeklyTrendScores() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklyCounts = await this.prisma.bookDownloadLog.groupBy({
      by: ['book_id'],
      where: { downloaded_at: { gte: sevenDaysAgo } },
      _count: { id: true },
    });

    // Shu hafta hech qanday yuklash bo'lmagan kitoblar uchun ham 0 hisobga olinsin
    const allBooks = await this.prisma.book.findMany({ select: { id: true } });
    const countMap = new Map(
      weeklyCounts.map((w) => [w.book_id, w._count.id]),
    );

    const counts = allBooks.map((b) => ({
      bookId: b.id,
      count: countMap.get(b.id) ?? 0,
    }));

    const scores = calculateBayesianScores(counts);

    await Promise.all(
      Array.from(scores.entries()).map(([bookId, score]) =>
        this.prisma.book.update({
          where: { id: bookId },
          data: { weekly_trend_score: score },
        }),
      ),
    );
  }
}
