import { Controller, Get, UseGuards } from '@nestjs/common';
import { Message } from '@stabox/stabox-lib';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { Permissions } from './auth/permissions.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions('create:cats')
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }

  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }
}
