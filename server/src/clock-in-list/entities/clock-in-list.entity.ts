import { IUserEntity } from "src/user/entities/user.entity";
import { CreateClockInListDto } from "../dto/create-clock-in-list.dto";

export class ClockInList extends CreateClockInListDto{
    id: string;
    workers: IUserEntity[];
    time: Date;
    day: string;
}
