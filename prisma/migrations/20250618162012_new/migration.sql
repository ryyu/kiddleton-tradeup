/*
  Warnings:

  - Added the required column `customerPhoneNumber` to the `PrizeStats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PrizeStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numPrizesReturned" INTEGER NOT NULL,
    "numPointsAwarded" INTEGER NOT NULL,
    "prizeType" TEXT NOT NULL,
    "customerPhoneNumber" TEXT NOT NULL
);
INSERT INTO "new_PrizeStats" ("createdAt", "id", "numPointsAwarded", "numPrizesReturned", "prizeType") SELECT "createdAt", "id", "numPointsAwarded", "numPrizesReturned", "prizeType" FROM "PrizeStats";
DROP TABLE "PrizeStats";
ALTER TABLE "new_PrizeStats" RENAME TO "PrizeStats";
CREATE UNIQUE INDEX "PrizeStats_customerPhoneNumber_key" ON "PrizeStats"("customerPhoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
