/*
  Warnings:

  - Changed the type of `subscribers` on the `subreddits` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "subreddits" DROP COLUMN "subscribers",
ADD COLUMN     "subscribers" INTEGER NOT NULL;
