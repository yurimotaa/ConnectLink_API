import { Injectable } from '@nestjs/common';
import { UserDTO } from './users.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.UserCreateInput) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new Error('user already exists');
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async update(userId: string, data: Prisma.UserCreateInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const updatedUser = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });

    return updatedUser;
  }

  async delete(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return user;
  }
}
