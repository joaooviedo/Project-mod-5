import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { CreateClockInListDto } from './dto/create-clock-in-list.dto';
import { UpdateClockInListDto } from './dto/update-clock-in-list.dto';
import { ClockInList } from './entities/clock-in-list.entity';

@Injectable()
export class ClockInListService {
  private _clockInList: ClockInList[] = [];
  constructor(private readonly workspaceService: WorkspaceService) {}
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

    this._clockInList.push(clockInToday);

    return Promise.resolve(clockInToday);
  }

  async findAll() {
    return `This action returns all clockInList`;
  }

  async findOne(id: string): Promise<ClockInList> {
    const findedClockInList = this._clockInList.find(
      (clockInList) => clockInList.id === id,
    );
    return findedClockInList;
  }

  async update(id: number, updateClockInListDto: UpdateClockInListDto) {
    return `This action updates a #${id} clockInList`;
  }

  async RegisterOnClockInList(
    clockInListId: string,
    userId: string,
  ): Promise<String> {
    const FindedClockInList = await this.findOne(clockInListId);
    const ActualDate = new Date(Date.now());
    return 'Clock In realized';
  }

  async remove(id: number) {
    return `This action removes a #${id} clockInList`;
  }
}
