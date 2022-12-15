import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { ClockInListModule } from './clock-in-list/clock-in-list.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
    imports: [DatabaseModule, ClockInListModule, WorkspaceModule],
    controllers: [UserController],
    providers: [UserService, UserRepository] 
})

export class AppModule {}
