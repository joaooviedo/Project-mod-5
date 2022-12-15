import { Injectable } from '@nestjs/common';
import { CreateClockInListDto } from './dto/create-clock-in-list.dto';
import { UpdateClockInListDto } from './dto/update-clock-in-list.dto';

@Injectable()
export class ClockInListService {
  create(createClockInListDto: CreateClockInListDto) {
    return 'This action adds a new clockInList';
  }

  findAll() {
    return `This action returns all clockInList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clockInList`;
  }

  update(id: number, updateClockInListDto: UpdateClockInListDto) {
    return `This action updates a #${id} clockInList`;
  }

  remove(id: number) {
    return `This action removes a #${id} clockInList`;
  }
}
