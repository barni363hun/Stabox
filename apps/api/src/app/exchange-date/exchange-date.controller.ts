import {
  Body,
  Controller,
  Delete,
  Get,
  MethodNotAllowedException,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IsDateString, IsNumber } from 'class-validator';
import { exchangeDateEntity } from '../../Entities';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { ExchangeDateService } from './exchange-date.service';

class idDto {
  @IsNumber()
  id: number;
}

class exchangeDateDto {
  @IsDateString()
  startDate: Date;
  @IsDateString()
  endDate: Date;
}

class myExchangeDateDto {
  @IsNumber()
  id: number;
  @IsDateString()
  startDate: Date;
  @IsDateString()
  endDate: Date;
}

@Controller('EXdate')
export class ExchangeDateController {
  constructor(private readonly exchangeDateService: ExchangeDateService) {}

  //creates exchangeDate
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  create(@Req() req: authRequest, @Body() body: exchangeDateDto) {
    return this.exchangeDateService.create({
      id: 0,
      userId: req.user.sub,
      startDate: body.startDate,
      endDate: body.endDate,
    });
  }

  // gets all exchange dates
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Post('/all')
  getAll() {
    return this.exchangeDateService.getAll();
  }

  // gets user's all exchange date
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  getMyExchangeDates(@Req() req: authRequest): Promise<exchangeDateEntity[]> {
    return this.exchangeDateService.find({
      where: { userId: req.user.sub },
    });
  }
    // gets user's all exchange date
    @UseGuards(AuthGuard, RoleGuard)
    @Roles('user')
    @Get('/package/:id')
    getByPackageId(@Req() req: authRequest,@Param()id:number): Promise<exchangeDateEntity[]> {
      return this.exchangeDateService.find({
        where: { userId:id },
      });
    }

  // delete own exchange date
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Delete()
  delete(@Req() req: authRequest, @Body() body: idDto) {
    return this.exchangeDateService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        return this.exchangeDateService.delete(body.id);
      } else {
        throw new MethodNotAllowedException(
          'You can only delete your own exchange dates'
        );
      }
    });
  }

  //modify own exchange date
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Patch()
  update(@Req() req: authRequest, @Body() body: myExchangeDateDto) {
    return this.exchangeDateService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        const newDates: exchangeDateDto = {
          startDate: body.startDate,
          endDate: body.endDate,
        };
        return this.exchangeDateService.update(body.id, newDates);
      } else {
        throw new MethodNotAllowedException(
          'You can only modify your own exchange dates'
        );
      }
    });
  }
}
