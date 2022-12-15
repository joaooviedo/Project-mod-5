import { Injectable } from '@nestjs/common';
import { Worker } from 'cluster';
import { eventNames } from 'process';
import { identity } from 'rxjs';
import { CreateClockInListDto } from 'src/clock-in-list/dto/create-clock-in-list.dto';
import { UpdateClockInListDto } from 'src/clock-in-list/dto/update-clock-in-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspaceRepository {
  private dataToReturn = {
    workers: true,
    supervisor: true,
    clockinTime: {
      include: {
        workers: true,
      },
    },
  };
  constructor(private readonly prismaService: PrismaService) {}

  async createWorkspace(
    { name, activities, epi }: CreateWorkspaceDto,
    id: string,
  ): Promise<Workspace> {
    try {
      return await this.prismaService.workspace.create({
        data: {
          id: id,
          name: name,
          activities: activities,
          epi: epi,
        },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async updateWorkspace(updateData: UpdateWorkspaceDto): Promise<Workspace> {
    try {
      const workersIds = updateData.workersIds;
      const supervisorIds = updateData.supervisorIds;

      delete updateData.workersIds;
      delete updateData.supervisorIds;

      return await this.prismaService.workspace.update({
        where: { id: updateData.id },
        data: {
          workers: {
            connect: workersIds?.map((id) => ({ id: id })),
          },
          supervisor: {
            connect: supervisorIds?.map((id) => ({ id: id })),
          },
        },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async deleteWorkspace(id: string): Promise<Workspace> {
    try {
      return await this.prismaService.workspace.findUnique({
        where: { id: id },
        include: this.dataToReturn,
      });
    } catch (err) {
      console.log('deleted', err);
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async findWorkspaceByid(id: string): Promise<Workspace> {
    try {
      return await this.prismaService.workspace.findUnique({
        where: { id: id },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async  findAllWorkspace(): Promise<Workspace[]> {
    try {
      return await this.prismaService.workspace.findMany({
      include: this.dataToReturn,
    })
  }catch (err) {
    throw new Exception(Exceptions.DatabaseException, err.message);
  }
  }
}
