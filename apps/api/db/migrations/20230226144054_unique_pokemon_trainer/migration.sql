/*
  Warnings:

  - A unique constraint covering the columns `[trainerId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_trainerId_fkey";

-- AlterTable
ALTER TABLE "Pokemon" ALTER COLUMN "trainerId" DROP NOT NULL,
ALTER COLUMN "trainerId" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_trainerId_key" ON "Pokemon"("trainerId");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
