import { randomUUID } from 'node:crypto';
import { IUserEntity } from '../entities/user.entity';
import { UserDto } from './dto/userinput.dto';

export class UserService {
  private users: IUserEntity[] = [];
  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity);
    return userEntity;
  }
}
