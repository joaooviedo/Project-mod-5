-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workspaceSupervisorId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workspaceWorkerId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "workspaceSupervisorId" DROP NOT NULL,
ALTER COLUMN "workspaceWorkerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workspaceWorkerId_fkey" FOREIGN KEY ("workspaceWorkerId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workspaceSupervisorId_fkey" FOREIGN KEY ("workspaceSupervisorId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;
