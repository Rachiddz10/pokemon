/*
  Warnings:

  - You are about to drop the column `ability` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `force` on the `Pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "ability",
DROP COLUMN "force",
ADD COLUMN     "atk" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "atkspe" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "def" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "defspe" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "hp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "speed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "trainerId" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
