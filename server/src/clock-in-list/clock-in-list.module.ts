import { Module } from '@nestjs/common';
import { ClockInListService } from './clock-in-list.service';
import { ClockInListController } from './clock-in-list.controller';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { DatabaseModule } from 'src/prisma/database.module';
import { ClockInListRepository } from './clock-in-list.repository';

@Module({
  imports:[DatabaseModule],
  controllers: [ClockInListController],
  providers: [ClockInListService, WorkspaceService,ClockInListRepository ]
})
export class ClockInListModule {}
