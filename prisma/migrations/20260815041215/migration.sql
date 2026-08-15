/*
  Warnings:

  - You are about to drop the column `biography` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Genre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_latin]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_cyril]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_ru]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `full_name_cyril` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name_latin` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name_ru` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_cyril` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_latin` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_cyril` to the `Genre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_latin` to the `Genre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PageSlug" AS ENUM ('HISTORY', 'CHARTER', 'STRUCTURE');

-- CreateEnum
CREATE TYPE "DocumentCategory" AS ENUM ('LAW', 'DECISION', 'ORDER', 'REPORT');

-- DropIndex
DROP INDEX "Genre_name_key";

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "biography",
DROP COLUMN "full_name",
DROP COLUMN "nationality",
ADD COLUMN     "biography_cyril" TEXT,
ADD COLUMN     "biography_latin" TEXT,
ADD COLUMN     "biography_ru" TEXT,
ADD COLUMN     "full_name_cyril" TEXT NOT NULL,
ADD COLUMN     "full_name_latin" TEXT NOT NULL,
ADD COLUMN     "full_name_ru" TEXT NOT NULL,
ADD COLUMN     "nationality_cyril" TEXT,
ADD COLUMN     "nationality_latin" TEXT,
ADD COLUMN     "nationality_ru" TEXT;

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "description_cyril" TEXT,
ADD COLUMN     "description_latin" TEXT,
ADD COLUMN     "description_ru" TEXT,
ADD COLUMN     "download_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "name_cyril" TEXT NOT NULL,
ADD COLUMN     "name_latin" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "rating_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "score_updated_at" TIMESTAMP(3),
ADD COLUMN     "weekly_trend_score" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "name",
ADD COLUMN     "name_cyril" TEXT NOT NULL,
ADD COLUMN     "name_latin" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Banner" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT,
    "title_cyril" TEXT,
    "title_ru" TEXT,
    "image_url" TEXT NOT NULL,
    "link_url" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "content_latin" TEXT NOT NULL,
    "content_cyril" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "cover_image" TEXT,
    "is_published" BOOLEAN NOT NULL DEFAULT true,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsefulLink" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UsefulLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookDownloadLog" (
    "id" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,
    "downloaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookDownloadLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "slug" "PageSlug" NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "content_latin" TEXT NOT NULL,
    "content_cyril" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name_latin" TEXT NOT NULL,
    "name_cyril" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "description_latin" TEXT,
    "description_cyril" TEXT,
    "description_ru" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "content_latin" TEXT NOT NULL,
    "content_cyril" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "cover_image" TEXT,
    "views_count" INTEGER NOT NULL DEFAULT 0,
    "is_published" BOOLEAN NOT NULL DEFAULT true,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "description_latin" TEXT,
    "description_cyril" TEXT,
    "description_ru" TEXT,
    "location_latin" TEXT,
    "location_cyril" TEXT,
    "location_ru" TEXT,
    "cover_image" TEXT,
    "event_date" TIMESTAMP(3) NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT true,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "title_latin" TEXT NOT NULL,
    "title_cyril" TEXT NOT NULL,
    "title_ru" TEXT NOT NULL,
    "category" "DocumentCategory" NOT NULL,
    "file_url" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BookDownloadLog_book_id_downloaded_at_idx" ON "BookDownloadLog"("book_id", "downloaded_at");

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_latin_key" ON "Genre"("name_latin");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_cyril_key" ON "Genre"("name_cyril");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_ru_key" ON "Genre"("name_ru");

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookDownloadLog" ADD CONSTRAINT "BookDownloadLog_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
