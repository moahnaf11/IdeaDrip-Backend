/*
  Warnings:

  - Changed the type of `subreddits` on the `audiences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "audiences" DROP COLUMN "subreddits",
ADD COLUMN     "subreddits" JSONB NOT NULL;
