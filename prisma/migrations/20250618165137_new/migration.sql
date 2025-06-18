-- CreateTable
CREATE TABLE "TradeUp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numPointsRemoved" INTEGER NOT NULL,
    "prizeType" TEXT NOT NULL,
    "customerPhoneNumber" TEXT NOT NULL
);
