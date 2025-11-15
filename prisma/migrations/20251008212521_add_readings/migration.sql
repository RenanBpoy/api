/*
  Warnings:

  - Added the required column `type` to the `components` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "components" ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "readings" (
    "id" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "readings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "readings_componentId_idx" ON "readings"("componentId");

-- CreateIndex
CREATE INDEX "alerts_componentId_idx" ON "alerts"("componentId");

-- AddForeignKey
ALTER TABLE "readings" ADD CONSTRAINT "readings_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "components"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "components"("id") ON DELETE CASCADE ON UPDATE CASCADE;
