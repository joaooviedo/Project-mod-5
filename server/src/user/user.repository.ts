import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './services/dto/partialUserImport.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(): Promise<IUserEntity[]> {
    const AllUsers = await this.prisma.user.findMany()
    return AllUsers
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const FoundUser = await this.prisma.user.findUniqueOrThrow({
        where: {id: id}
    })
    return FoundUser
  }

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    const CreatedUser = await this.prisma.user.create({ data: user });
    return CreatedUser;
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
        where: {id: id},
    })
    return DeletedUser
  }
}
