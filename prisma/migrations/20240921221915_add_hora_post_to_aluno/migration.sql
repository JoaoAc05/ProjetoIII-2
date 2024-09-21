/*
  Warnings:

  - A unique constraint covering the columns `[ra]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "hora_post" TIMESTAMP(3),
ALTER COLUMN "status" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_ra_key" ON "Aluno"("ra");
