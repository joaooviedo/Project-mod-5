import { PartialType } from '@nestjs/swagger';
import { CreateClockInListDto } from './create-clock-in-list.dto';

export class UpdateClockInListDto extends PartialType(CreateClockInListDto) {}
