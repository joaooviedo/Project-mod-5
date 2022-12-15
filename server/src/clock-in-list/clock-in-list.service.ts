import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { ClockInListRepository } from './clock-in-list.repository';
import { CreateClockInListDto } from './dto/create-clock-in-list.dto';
import { UpdateClockInListDto } from './dto/update-clock-in-list.dto';
import { ClockInList } from './entities/clock-in-list.entity';

@Injectable()
export class ClockInListService {
  private _clockInList: ClockInList[] = [];

  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly clockInListRepository: ClockInListRepository,
  ) {}

  async create(
    createClockInListDto: CreateClockInListDto,
  ): Promise<ClockInList> {
    await this.workspaceService.findOne(createClockInListDto.workspaceId);

    const Today = new Date(Date.now()).toISOString().slice(0, 10);
    const formatedToday =
      Today.slice(8, 10) + '/' + Today.slice(5, 7) + '/' + Today.slice(0, 4);

    const clockInToday = new ClockInList();
    (clockInToday.id = randomUUID()),
      (clockInToday.time = new Date(Date.now())),
      (clockInToday.workers = []),
      (clockInToday.day = formatedToday);

    return await this.clockInListRepository.createClockInList(clockInToday);
  }

  async findAll() {
    return await this.clockInListRepository.allClockInLists();
  }

  async findOne(id: string): Promise<ClockInList> {
    const findedClockInList = await this.clockInListRepository.clockInListById(id)
    return findedClockInList;
  }
  
  async RegisterOnClockInList(
    clockInListId: string,
    userId: string,
  ): Promise<String> {
    const FindedClockInList = await this.findOne(clockInListId);
    const ActualDate = new Date(Date.now());
    return 'Clock In realized';
  }
}
