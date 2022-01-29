import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../../Entities';
import { userDto } from './user.DTO';
import { userMinDto } from './userMin.DTO';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEntity) private userRepository: Repository<userEntity>
  ) {}

  create(authId: string, user: userMinDto): Promise<userEntity> {
    const newUser: {
      email: string;
      username: string;
      id: string;
    } = {
      email: user.email,
      username: user.username,
      id: authId,
    };
    return this.userRepository.findOne({ email: user.email }).then((res) => {
      if (res == undefined) {
        return this.userRepository.findOne({ id: authId }).then((res) => {
          if (res == undefined) {
            return this.userRepository.save(newUser);
          } else {
            throw new ConflictException('User already exists with this id!');
          }
        });
      } else {
        throw new ConflictException(
          'User already exists with this email address!'
        );
      }
    });
  }
  delete(id: string) {
    return this.userRepository.delete(id);
  }
  modify(authId: string, user: userDto) {
    const newUser: {
      username: string;
      id: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
    } = {
      username: user.username,
      id: authId,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    };
    return this.userRepository.update(authId, newUser);
  }
  getAll() {
    return this.userRepository.find().then((res) => {
      return res.map((user) => user.username);
    });
  }
  getMyData(authId: string): Promise<userEntity> {
    return this.userRepository.findOne({ id: authId }).then((res) => {
      if (res == undefined) {
        throw new NotFoundException(
          'You can only get your data if you already have a user!'
        );
      } else {
        return res;
      }
    });
  }
}
