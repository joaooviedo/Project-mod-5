import { ClockInList } from 'src/clock-in-list/entities/clock-in-list.entity';
import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateWorkspaceDto } from '../dto/create-workspace.dto';

export class Workspace extends CreateWorkspaceDto {
  id: string;
  workers: IUserEntity[];
  supervisor: IUserEntity[];
  clockinTime: ClockInList[];
}
