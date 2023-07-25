import { Prisma } from '@prisma/client';
import { ContactsService } from './contacts.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
  @Post()
  async create(@Body() data: Prisma.ContactCreateInput) {
    return this.contactsService.create(data);
  }

  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') contactId: string) {
    return this.contactsService.findById(contactId);
  }

  @Patch(':id')
  async update(
    @Param('id') contactId: string,
    @Body() data: Prisma.ClientCreateInput,
  ) {
    return this.contactsService.update(contactId, data);
  }

  @Delete(':id')
  async delete(@Param('id') contactId: string) {
    return this.contactsService.delete(contactId);
  }
}
