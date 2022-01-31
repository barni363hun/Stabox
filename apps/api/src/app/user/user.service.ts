import { HttpService } from '@nestjs/axios';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { userEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';
import { userMinDto } from './userMin.DTO';

@Injectable()
export class UserService extends GenericService<userEntity> {
  constructor(
    @InjectRepository(userEntity)
    private userRepository: Repository<userEntity>,
    private httpService: HttpService
  ) {
    super(userRepository);
  }

  async addUserRole(id: string) {
    return this.userRepository.findOne({ id: id }).then((res) => {
      if (res == undefined) {
        throw new NotFoundException('This user does not exist!');
      } else {
        const options = {
          headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + process.env.AUTH0_API_TOKEN,
            'cache-control': 'no-cache',
          },
          data: { roles: ['rol_fOmBHGPGmePItkqG'] },
        };
        const data = { roles: ['rol_fOmBHGPGmePItkqG'] };
        return this.httpService
          .post(
            process.env.AUTH0_DOMAIN + 'api/v2/users/' + id + '/roles',
            data,
            options
          )
          .subscribe((asd) => asd);
      }
    });
  }

  async new(authId: string, user: userMinDto): Promise<userEntity> {
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
  async getAllUsername() {
    return this.userRepository.find().then((res) => {
      return res.map((user) => user.username);
    });
  }
  async getMyData(authId: string): Promise<userEntity> {
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
