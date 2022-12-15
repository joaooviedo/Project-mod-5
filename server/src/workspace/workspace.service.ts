import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspaceService {
  private _workspaceList: Workspace[] = [];
  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const createdWorkspace: Workspace = {
      ...createWorkspaceDto,
      id: randomUUID(),
      workers: [],
      supervisor: [],
      clockinTime: [],
    };
    this._workspaceList.push(createdWorkspace);
    return createdWorkspace;
  }

  async findAll(): Promise<Workspace[]> {
    return this._workspaceList;
  }

  async findOne(id: string): Promise<Workspace> {
    return this._workspaceList.find((workspace) => workspace.id === id);
  }

  async update(
    id: string,
    updateWorkspaceDto: UpdateWorkspaceDto,
  ): Promise<Workspace> {
    this._workspaceList.map((workspace, index) => {
      const updatedWorkspace = Object.assign(workspace, updateWorkspaceDto);
      this._workspaceList.splice(index, 1, updatedWorkspace);
    });
    return await this.findOne(id);
  }

  async remove(id: string): Promise<String> {
    this._workspaceList.map((workspace, index) => {
      if (workspace.id === id) {
        this._workspaceList.splice(index, 1);
      }
    });

    return Promise.resolve('Workspace deleted succesfully');
  }
}
