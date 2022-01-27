import { Controller, Get, UseGuards } from '@nestjs/common';

import { Message } from '@stabox/stabox-lib';

import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @UseGuards(AuthorizationGuard)
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }

  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }
}
