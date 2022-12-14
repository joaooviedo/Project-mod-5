import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './services/dto/partialUserImport.dto';
import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(): Promise<IUserEntity[]> {
    const AllUsers = await this.prisma.user.findMany();
    return AllUsers;
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const FoundUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return FoundUser;
  }

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    try {
      const CreatedUser = await this.prisma.user.create({ data: user });
      return CreatedUser;
    } catch (err) {
      throw {
        message: 'User, CPF or email already registered',
        exception: Exceptions.DatabaseException,
      };
    }
  }

  async updateUser(user: PartialUserDto): Promise<IUserEntity> {
    const UpdatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedUser;
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    const DeletedUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return DeletedUser;
  }
}
