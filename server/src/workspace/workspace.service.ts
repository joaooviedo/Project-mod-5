import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceRepository } from './workspace.repository';

@Injectable()
export class WorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const id = randomUUID();
    return await this.workspaceRepository.createWorkspace(
      createWorkspaceDto,
      id,
    );
  }

  async findAll(): Promise<Workspace[]> {
    return await this.workspaceRepository.findAllWorkspace();
  }

  async findOne(id: string): Promise<Workspace> {
    return this.workspaceRepository.findWorkspaceByid(id);
  }

  async update(updateWorkspaceDto: UpdateWorkspaceDto,): Promise<Workspace> {
    if (!updateWorkspaceDto.workersIds && !updateWorkspaceDto.supervisorIds){
      throw new Exception(
        Exceptions.InvalidData,
        'not send reference to connection',
      );
    }
    return await this.workspaceRepository.updateWorkspace(updateWorkspaceDto);
  }

  async remove(id: string): Promise<String> {
    await this.workspaceRepository.deleteWorkspace(id)
    return'Workspace deleted succesfully';
  }
}
