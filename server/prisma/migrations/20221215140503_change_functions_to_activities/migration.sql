/*
  Warnings:

  - You are about to drop the column `function` on the `Workspace` table. All the data in the column will be lost.
  - Added the required column `activities` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workspace" DROP COLUMN "function",
ADD COLUMN     "activities" TEXT NOT NULL;
