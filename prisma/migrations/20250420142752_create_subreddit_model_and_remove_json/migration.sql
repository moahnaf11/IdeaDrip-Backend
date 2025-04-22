/*
  Warnings:

  - You are about to drop the column `subreddits` on the `audiences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "audiences" DROP COLUMN "subreddits";

-- CreateTable
CREATE TABLE "subreddits" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subscribers" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "subreddits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AudienceToSubreddit" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AudienceToSubreddit_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "subreddits_name_key" ON "subreddits"("name");

-- CreateIndex
CREATE INDEX "_AudienceToSubreddit_B_index" ON "_AudienceToSubreddit"("B");

-- AddForeignKey
ALTER TABLE "_AudienceToSubreddit" ADD CONSTRAINT "_AudienceToSubreddit_A_fkey" FOREIGN KEY ("A") REFERENCES "audiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AudienceToSubreddit" ADD CONSTRAINT "_AudienceToSubreddit_B_fkey" FOREIGN KEY ("B") REFERENCES "subreddits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
