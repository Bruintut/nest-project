import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(dto: CreateUserDto) {
    const saltOrRounds = 10;
    const data: UserEntity = {
      ...dto,
      password: await bcrypt.hash(dto.password, saltOrRounds),
    };

    return this.prisma.user.create({
      data,
      select: {
        name: true,
        email: true,
        password: false,
      },
    });
  }

  findAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
      },
    });
  }

  findUserById(id: string, email:string) {
    return this.prisma.user.findUnique({
        where: {id, email}
    })
  }

  updateUser(id: string, dto: UpdateUserDto, user: UserEntity) {
    const data: Partial<UserEntity> = {...dto};

    return this.prisma.user.update({
        where:{id},
        data,
    })
  }

  async removeUser(id: string, user: UserEntity) {
    await this.prisma.user.delete({ where: {id}});
    return {message: 'User successfully removed'}

  }
}
