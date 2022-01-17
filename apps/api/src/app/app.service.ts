import { Injectable } from '@nestjs/common';
import { Message } from '@stabox/stabox-lib';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
