/*
  Warnings:

  - Added the required column `workspaceSupervisorId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceWorkerId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "workspaceSupervisorId" TEXT NOT NULL,
ADD COLUMN     "workspaceWorkerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ClockInList" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "ClockInList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workspace" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "epi" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClockInListToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ClockInList_id_key" ON "ClockInList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_id_key" ON "Workspace"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ClockInListToUser_AB_unique" ON "_ClockInListToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ClockInListToUser_B_index" ON "_ClockInListToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workspaceWorkerId_fkey" FOREIGN KEY ("workspaceWorkerId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workspaceSupervisorId_fkey" FOREIGN KEY ("workspaceSupervisorId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClockInList" ADD CONSTRAINT "ClockInList_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClockInListToUser" ADD CONSTRAINT "_ClockInListToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ClockInList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClockInListToUser" ADD CONSTRAINT "_ClockInListToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
