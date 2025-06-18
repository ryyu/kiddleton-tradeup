-- CreateTable
CREATE TABLE "PrizeStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numPrizesReturned" INTEGER NOT NULL,
    "numPointsAwarded" INTEGER NOT NULL,
    "prizeType" TEXT NOT NULL
);
