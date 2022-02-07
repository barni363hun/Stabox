import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { TransactionService } from './transaction.service';

class buyDto {
  @IsNumber()
  amount: number;
}

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Post()
  all() {
    return this.transactionService.getAll();
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  getMyTransactions(@Req() req: authRequest) {
    return this.transactionService.find({
      where: { userId: req.user.sub },
    });
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin') // TODO: hogyan lehessen venni stabuck-ot
  @Patch()
  buy(@Req() req: authRequest, @Body() body: buyDto) {
    const tra = { userId: req.user.sub, amount: body.amount, direction: true };
    return this.transactionService.create(tra);
  }
}
