export interface BookDownloadCount {
  bookId: string;
  count: number;
}

const CONFIDENCE_THRESHOLD = 50; // m

/**
 * Bayesian og'irlashtirilgan ball hisoblaydi — kam sonli namunali
 * (kam yuklangan) kitoblar tasodifan yuqori ball olib ketmasligi uchun.
 */
export function calculateBayesianScores(
  counts: BookDownloadCount[],
): Map<string, number> {
  const result = new Map<string, number>();

  if (counts.length === 0) return result;

  const vMax = Math.max(...counts.map((c) => c.count), 0);

  if (vMax === 0) {
    counts.forEach((c) => result.set(c.bookId, 0));
    return result;
  }

  const totalNorm = counts.reduce((sum, c) => sum + c.count / vMax, 0);
  const cNorm = totalNorm / counts.length;

  for (const { bookId, count } of counts) {
    const rNorm = count / vMax;
    const v = count;
    const m = CONFIDENCE_THRESHOLD;
    const score = (v / (v + m)) * rNorm + (m / (v + m)) * cNorm;
    result.set(bookId, score);
  }

  return result;
}
