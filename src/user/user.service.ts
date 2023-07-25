import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.findOne({
      where: { email: createUserDto.email },
    });
    if (user) {
      throw new Error('user already exists');
    }
    const newUser = this.userRepo.create(createUserDto);
    await this.userRepo.save(newUser);
    return newUser;
  }

  async findAll() {
    const user = await this.userRepo.find();
    return user;
  }

  async findOne(id: number) {
    const findUser = await this.userRepo.findOne({ where: { id } });
    if (!findUser) {
      throw new Error('user not found');
    }
    return findUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new Error('user not found');
    }
    const updateUser = await this.userRepo.update(id, updateUserDto);
    return updateUser;
  }

  remove(id: number) {
    const remove = this.userRepo.delete(id);
    return remove;
  }
}
