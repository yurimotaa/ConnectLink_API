import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Client, Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClientCreateInput) {
    const clientExists = await this.prisma.client.findFirst({
      where: {
        email: data.email,
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const client = await this.prisma.client.create({
      data,
    });

    return client;
  }

  async findAll(): Promise<Client[]> {
    return this.prisma.client.findMany({
      include: {
        contacts: true,
      },
    });
  }

  async findById(clientId: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
      include: {
        contacts: true,
      },
    });

    return client;
  }

  async update(clientId: string, data: Prisma.ClientCreateInput) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!client) {
      throw new Error('Client not found');
    }

    const updatedClient = await this.prisma.client.update({
      where: {
        id: clientId,
      },
      data,
    });

    return updatedClient;
  }

  async delete(clientId: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!client) {
      throw new Error('Client not found');
    }

    await this.prisma.client.delete({
      where: {
        id: clientId,
      },
    });

    return client;
  }
}
