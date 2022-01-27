import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';

import { Message } from '@stabox/stabox-lib';

import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //needs to be logged in
  @UseGuards(AuthGuard)
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  //needs admin role
  @UseGuards(AuthGuard, RoleGuard)
  @SetMetadata('roles', ['admin'])
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }

  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }
}
