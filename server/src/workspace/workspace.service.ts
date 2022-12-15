import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';

@Injectable()
export class WorkspaceService {
  async create(createWorkspaceDto: CreateWorkspaceDto) {
    return 'This action adds a new workspace';
  }

  async findAll() {
    return `This action returns all workspace`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} workspace`;
  }

  async  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  async  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
