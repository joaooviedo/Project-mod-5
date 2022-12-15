import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClockInList } from './entities/clock-in-list.entity';

@Injectable()
export class ClockInListRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createClockInList({
    workspaceId,
    day,
    id,
    time,
    workers,
  }: ClockInList): Promise<ClockInList> {
    return await this.prismaService.clockInList.create({
      data: {
        id: id,
        day: day,
        workspaceId: workspaceId,
        time: time,
      },
      include: {
        workers: true,
      },
    });
  }
  async allClockInLists(): Promise<ClockInList[]> {
    return await this.prismaService.clockInList.findMany({
      include: { workers: true },
    });
  }
  async clockInListById(id:string):Promise<ClockInList>{
    return await this.prismaService.clockInList.findUniqueOrThrow({
      where:{id:id},
      include:{ 
        workers: true
       },
    })
  }
}