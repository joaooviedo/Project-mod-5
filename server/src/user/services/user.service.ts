import { randomUUID } from 'node:crypto';
import { IUserEntity } from '../entities/user.entity';
import { UserDto } from './dto/userinput.dto';
import { PartialUserDto } from './dto/partialUserImport.dto';

export class UserService {
  private users: IUserEntity[] = [];
  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity);
    return userEntity;
  }
  async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
    this.users.map((user, index) => {
      if (user.id === userData.id) {
        const UpdatedUser = Object.assign(user, userData);
        this.users.splice(index, 1, UpdatedUser);
      }
    });
    const updatedUser = this.users.find((user) => user.id === userData.id);
    return updatedUser;
  }
  async getAllUsers(): Promise<IUserEntity[]> {
    return this.users;
  }
}
