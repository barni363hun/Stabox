import { HttpService } from '@nestjs/axios';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInterface } from '@stabox/stabox-lib';
import { Repository } from 'typeorm';
import { userEntity } from '../../Entities';
import { authRequest } from '../auth';
import { GenericService } from '../generics/generic.service';
import { TransactionService } from '../transaction/transaction.service';
import { userMinDto } from './userMin.DTO';

@Injectable()
export class UserService extends GenericService<userInterface> {
  constructor(
    @InjectRepository(userEntity)
    private userRepository: Repository<userInterface>,
    private readonly transactinoService: TransactionService,
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
          .subscribe((res) => res);
      }
    });
  }

  async addShipperRole(id: string) {
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
          data: { roles: ['rol_72IOyNuWHPWpC03o'] },
        };
        const data = { roles: ['rol_72IOyNuWHPWpC03o'] };
        return this.httpService
          .post(
            process.env.AUTH0_DOMAIN + 'api/v2/users/' + id + '/roles',
            data,
            options
          )
          .subscribe((res) => res);
      }
    });
  }

  async deletee(id: string) {
    return await this.userRepository.delete(id);
  }

  async updatee(id: string, data: object) {
    return await this.userRepository.update(id, data);
  }

  async new(authId: string, user: userMinDto): Promise<userInterface> {
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
  async getMyData(req: authRequest) {
    return this.userRepository.findOne({ id: req.user.sub }).then((res) => {
      if (res == undefined) {
        throw new NotFoundException(
          'You can only get your data if you already have a user!'
        );
      } else {
        const roles: { 'https://www.stabox.hu/roles': string[] } = {
          'https://www.stabox.hu/roles': [
            ...req.user['https://www.stabox.hu/roles'],
          ],
        };
        return { ...roles, ...res }; // TODO: test this
      }
    });
  }
  async addtransaction(user: userInterface, amount: number) {
    user.stabucks += amount;
    return this.update(user.id, user).then(async () => {
      this.transactinoService.create({
        userId: user.id,
        amount: amount
      })
    });
  }
}
