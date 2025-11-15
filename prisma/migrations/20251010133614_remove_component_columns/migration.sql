/*
  Warnings:

  - You are about to drop the column `code` on the `components` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `components` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."components_code_key";

-- AlterTable
ALTER TABLE "components" DROP COLUMN "code",
DROP COLUMN "type";
