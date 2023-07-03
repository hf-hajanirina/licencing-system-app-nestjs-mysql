import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createTask(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllTask(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }
}
