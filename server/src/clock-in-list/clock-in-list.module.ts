import { Module } from '@nestjs/common';
import { ClockInListService } from './clock-in-list.service';
import { ClockInListController } from './clock-in-list.controller';

@Module({
  controllers: [ClockInListController],
  providers: [ClockInListService]
})
export class ClockInListModule {}
