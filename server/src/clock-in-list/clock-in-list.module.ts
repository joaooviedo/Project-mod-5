import { Module } from '@nestjs/common';
import { ClockInListService } from './clock-in-list.service';
import { ClockInListController } from './clock-in-list.controller';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { DatabaseModule } from 'src/prisma/database.module';
import { ClockInListRepository } from './clock-in-list.repository';
import { WorkspaceController } from 'src/workspace/workspace.controller';
import { UserService } from 'src/user/services/user.service';
import { UserRepository } from 'src/user/user.repository';
import { WorkspaceRepository } from 'src/workspace/workspace.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ClockInListController],
  providers: [ClockInListService, ClockInListRepository, WorkspaceService, WorkspaceController,WorkspaceRepository, UserService, UserRepository,  ],
})
export class ClockInListModule {}
