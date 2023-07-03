import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DATABASE_PROVIDER } from 'src/app.constant';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(DATABASE_PROVIDER.USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { fullName, email, pwd } = createUserDto;
      const createdTask = this.userRepository.create({
        fullName,
        email,
        pwd,
      });
      await this.userRepository.save(createdTask);
      return createdTask;
    } catch (error) {
      throw new error(`createUser error => ${error}`);
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const foundUser = await this.userRepository.find();
      if (!foundUser) {
        throw new NotFoundException(`No user found`);
      }
      return foundUser;
    } catch (error) {
      throw new error(`getUsers error => ${error}`);
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const foundUser = await this.userRepository.findOneBy({ userId: id });
      if (!foundUser) {
        throw new NotFoundException(`User with ID [${id}] not found`);
      }
      return foundUser;
    } catch (error) {
      throw new Error(`getUser error => ${error}`);
    }
  }
}
