import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    try {
      return this.workspaceService.create(createWorkspaceDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @Get()
  async findAll() {
    try {
      return this.workspaceService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.workspaceService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @Patch()
  async update(@Body() updateWorkspaceDto:UpdateWorkspaceDto) {
    try {
      return this.workspaceService.update(updateWorkspaceDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.workspaceService.remove(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
