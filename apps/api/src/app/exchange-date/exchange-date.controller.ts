import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { exchangeDateInterface } from '@stabox/stabox-lib';
import { exchangeDateEntity } from '../../Entities';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { UserService } from '../user/user.service';
import { exchangeDateDTO } from './exchange-date.DTO';
import { ExchangeDateService } from './exchange-date.service';

@Controller('EXdate')
export class ExchangeDateController {
  constructor(
    private readonly exchangeDateService: ExchangeDateService,
    private readonly userService: UserService
  ) {}

  // - create
  // - delete
  // - getMyExchangeDates
  // - update
  //creates exchangeDate
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin') //TODO user role-ra visszaállítani
  @Put()
  create(@Req() req: authRequest, @Body() body: exchangeDateDTO) {
    // return this.userService.getMyData(req.user.sub);
    return this.exchangeDateService.create({
      id: 0,
      userId: req.user.sub,
      startDate: body.startDate,
      endDate: body.endDate,
    });
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin') //TODO user role-ra visszaállítani
  @Post('/all')
  getAll() {
    return this.exchangeDateService.getAll();
  }

  // @UseGuards(AuthGuard, RoleGuard)
  // @Roles('user') //TODO user role-ra visszaállítani
  // @Get()
  // getMyExchangeDates(
  //   @Req() req: authRequest
  // ): Promise<exchangeDateInterface[]> {
  //   return this.exchangeDateService.find({
  //     where: {},
  //   });
  // }
}
