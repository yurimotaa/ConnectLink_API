import { Prisma } from '@prisma/client';
import { ClientService } from './client.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Post()
  async create(@Body() data: Prisma.ClientCreateInput) {
    return this.clientService.create(data);
  }

  @Get()
  async findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') clientId: string) {
    return this.clientService.findById(clientId);
  }

  @Patch(':id')
  async update(
    @Param('id') clientId: string,
    @Body() data: Prisma.ClientCreateInput,
  ) {
    return this.clientService.update(clientId, data);
  }

  @Delete(':id')
  async delete(@Param('id') clientId: string) {
    return this.clientService.delete(clientId);
  }
}
