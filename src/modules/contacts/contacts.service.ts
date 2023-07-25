import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ContactCreateInput) {
    const contactExists = await this.prisma.contact.findFirst({
      where: {
        email: data.email,
      },
    });

    if (contactExists) {
      throw new Error('Contact already exists');
    }

    const client = await this.prisma.contact.create({
      data,
    });

    return client;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany({
      include: {
        client: true,
      },
    });
    return contacts;
  }

  async findById(contactId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      include: {
        client: true,
      },
    });

    return contact;
  }

  async update(contactId: string, data: Prisma.ClientCreateInput) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    if (!contact) {
      throw new Error('Contact not found');
    }

    const updatedContact = await this.prisma.contact.update({
      where: {
        id: contactId,
      },
      data,
    });

    return updatedContact;
  }

  async delete(contactId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    if (!contact) {
      throw new Error('Contact not found');
    }

    await this.prisma.contact.delete({
      where: {
        id: contactId,
      },
    });

    return contact;
  }
}
