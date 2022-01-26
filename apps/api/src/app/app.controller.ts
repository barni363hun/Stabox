import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';

import { Message } from '@stabox/stabox-lib';

import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { PermissionsGuard } from './auth/permissions.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @UseGuards(AuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:cats'])
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }

  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }
}
