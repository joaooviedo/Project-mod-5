import { Module } from '@nestjs/common';
import { ClockInListService } from './clock-in-list.service';
import { ClockInListController } from './clock-in-list.controller';
import { WorkspaceService } from 'src/workspace/workspace.service';

@Module({
  controllers: [ClockInListController],
  providers: [ClockInListService, WorkspaceService]
})
export class ClockInListModule {}
