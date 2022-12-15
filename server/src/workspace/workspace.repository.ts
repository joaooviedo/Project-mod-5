import { Worker } from 'cluster';
import { eventNames } from 'process';
import { identity } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { Workspace } from './entities/workspace.entity';

export class WorkspaceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createWorkspace({
    id,
    name,
    activities,
    epi,
  }: Workspace): Promise<Workspace> {
    return await this.prismaService.workspace.create({
      data: {
        id: id,
        name: name,
        activities: activities,
        epi: epi,
      },
      include: {
        workers: true,
        supervisor: true,
        clockinTime: {
          include: {
            workers: true,
          },
        },
      },
    });
  }
  async updateClassroom(): Promise<void> {
    const a = 'abc';
  }
}
