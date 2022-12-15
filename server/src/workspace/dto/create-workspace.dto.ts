import { ClockInList } from 'src/clock-in-list/entities/clock-in-list.entity';
import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateWorkspaceDto {
  name: string;
  function: string;
  epi: string;
  workers: IUserEntity[];
  supervisor: IUserEntity[];
  clockinTime: ClockInList[];
}
