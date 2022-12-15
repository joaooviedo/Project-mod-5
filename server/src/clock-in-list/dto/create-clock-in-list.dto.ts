import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateClockInListDto {
  workspaceId: string;
  workers: IUserEntity[];
  startDate: Date;
  endDate: Date;
  day: Date;
}