import { PrismaService } from 'src/prisma/prisma.service';
import { ClockInList } from './entities/clock-in-list.entity';

export class ClockInListRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createClockInList({
    workspaceId,
    day,
    id,
    workers,
  }: ClockInList): Promise<ClockInList> {
    return await this.prismaService.clockInList.create({
      data: {
        day: day,
        workspaceId: workspaceId,
        id: id,
      },
      include: {
        workers: true,
      },
    });
  }
}
