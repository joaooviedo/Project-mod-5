import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ClockInListService } from './clock-in-list.service';
import { CreateClockInListDto } from './dto/create-clock-in-list.dto';
import { RegisterOnClockInListDto } from './dto/register-on-clockin-list.dto';
import { UpdateClockInListDto } from './dto/update-clock-in-list.dto';

@Controller('clock-in-list')
export class ClockInListController {
  constructor(private readonly clockInListService: ClockInListService) {}

  @Post()
  create(@Body() createClockInListDto: CreateClockInListDto) {
    return this.clockInListService.create(createClockInListDto);
  }

  @Post('registerInClockInList')
  async registerInClockInList(
    @Body() { clockInListId, userId }: RegisterOnClockInListDto,
  ) {
    try {
      return await this.clockInListService.RegisterOnClockInList(
        clockInListId,
        userId,
      );
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  findAll() {
    return this.clockInListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clockInListService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClockInListDto: UpdateClockInListDto,
  ) {
    return this.clockInListService.update(+id, updateClockInListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clockInListService.remove(+id);
  }
}
