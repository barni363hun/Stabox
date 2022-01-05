import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDog(): string {
    return 'woof';
  }
  getCat(): string {
    return 'meow';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
