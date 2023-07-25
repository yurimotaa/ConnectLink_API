import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.usersService.create(data);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') userId: string) {
    return this.usersService.findById(userId);
  }

  @Patch(':id')
  async update(@Param('id') userId: string, @Body() data: UserDTO) {
    return this.usersService.update(userId, data);
  }

  @Delete(':id')
  async delete(@Param('id') userId: string) {
    return this.usersService.delete(userId);
  }
}
