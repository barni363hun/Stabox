import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard, authRequest, RoleGuard } from './auth';
import { Roles } from './auth/roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //needs to be logged in
  @UseGuards(AuthGuard)
  @Get('hello')
  getData(@Req() req: authRequest) {
    return req.user;
  }

  //needs admin role
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }

  @Get('/dog')
  getDog(@Req() req): string {
    return req.user + ' and a dog';
  }
}
