-- CreateTable
CREATE TABLE "audiences" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subreddits" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "audiences_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "audiences" ADD CONSTRAINT "audiences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
