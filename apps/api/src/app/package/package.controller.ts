import {
  Body,
  Controller,
  Delete,
  Get,
  MethodNotAllowedException,
  NotAcceptableException,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';
import { Not } from 'typeorm';
import { packageEntity } from '../../Entities';
import { AddressService } from '../address/address.service';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { ExchangeDateService } from '../exchange-date/exchange-date.service';
import { TransactionService } from '../transaction/transaction.service';
import { UserService } from '../user/user.service';
import { VehicleService } from '../vehicle/vehicle.service';
import { PackageService } from './package.service';

class idDto {
  @IsNumber()
  id: number;
}

class idDateDto {
  @IsNumber()
  id: number;
  // @IsDateString()
  // shipped: Date;
}

class packageDto {
  @IsString()
  @Matches('[0-9]+x[0-9]+x[0-9]+')
  size: string;
  @IsString()
  @Matches('([0-9]+gramm|[0-9]+kilogramm)')
  weight: string;
  @IsBoolean()
  fragile: boolean;
  @IsNumber()
  fromAddressId: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  recieverId: number;
}

class assignMeDto {
  @IsNumber()
  id: number;
  @IsNumber()
  vehicleId: number;
  @IsDateString()
  postDate: Date;
}

@Controller('package')
export class PackageController {
  constructor(
    private readonly packageService: PackageService,
    private readonly addressService: AddressService,
    private readonly exchangeDateService: ExchangeDateService,
    private readonly vehicleService: VehicleService,
    private readonly userService: UserService,
    private readonly transactionService: TransactionService
  ) { }

  //creates package
  // TODO!! NEEDS TESTING!!!!
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  async create(@Req() req: authRequest, @Body() body: packageDto) {
    const price = await this.calculatePrice(body.size, body.weight);
    const user = await this.userService.getById(req.user.sub)
    if (price < user.stabucks) {
      throw new NotAcceptableException('Not enough stabucks to post this package')
    }
    return this.packageService.create({
      userId: req.user.sub,
      price: price,
      ...body,
    }).then(async () => {
      this.userService.addtransaction(user, -price)
    })
    // .then(async () => {
    //   user.stabucks -= price;
    //   await this.userService.update((await user).id, user);
    // })
    // .then(async () => this.transactionService.create({
    //   userId: user.id,
    //   amount: -price
    // },
    // ));
  }

  // gets all packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Post('/all')
  getAll() {
    return this.packageService.getAll();
  }

  // gets user packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  getMyPackages(@Req() req: authRequest): Promise<packageEntity[]> {
    return this.packageService.find({
      where: { userId: req.user.sub },
    });
  }

  //returns user's own packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get('/mypackages')
  getMyPackagesWithAddress(@Req() req: authRequest): Promise<packageEntity[]> {
    return this.packageService.find({
      where: { userId: req.user.sub },
      relations: ['fromAddress', 'reciever', 'reciever.address'],
    });
  }
  // gets acceptable packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Get('/acceptable')
  async getAcceptable(@Req() req: authRequest): Promise<any> {
    const res = await this.packageService.find({
      where: { vehicleId: null, userId: Not(req.user.sub) },
      relations: ['fromAddress', 'reciever', 'reciever.address'],
    });
    return res;
  }
  // gets accepted packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Get('/accepted')
  getAccepted(@Req() req: authRequest): Promise<packageEntity[]> {
    return this.packageService.find({
      where: {
        shippingDate: false,
        vehicle: {
          userId: req.user.sub,
        },
      },
      relations: ['fromAddress', 'vehicle', 'reciever', 'reciever.address'],
    });
  }

  // delete own package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Delete()
  async delete(@Req() req: authRequest, @Body() body: idDto) {
    const a = await this.packageService.getById(body.id);
    if (a.userId == req.user.sub) {
      return this.packageService.delete(body.id);
    } else {
      throw new MethodNotAllowedException(
        'You can only delete your own package'
      );
    }
  }

  //assign vehicle, select post date
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Patch()
  async assignMe(@Req() req: authRequest, @Body() body: assignMeDto) {
    const a = await this.packageService.getById(body.id);
    if (a.userId !== req.user.sub) {
      return this.packageService.update(body.id, {
        vehicleId: body.vehicleId,
        postDate: body.postDate,
      });
    } else {
      throw new MethodNotAllowedException(
        'You can not accept your own package'
      );
    }
  }

  //sent
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Post()
  async sent(@Req() req: authRequest, @Body() body: idDto) {
    return this.packageService.getById(body.id).then(async (a) => {
      if (a.vehicleId == 0) {
        const n = await this.addressService.getById(a.fromAddressId);
        return await this.packageService.update(body.id, {
          currentCity: n.cityName,
        });
      } else {
        throw new MethodNotAllowedException(
          'You can only assign to a package without a shipper'
        );
      }
    });
  }

  //getAvaibleDates
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Get('/dates')
  async getAvaibleDates(@Req() req: authRequest, @Body() body: idDto) {
    return this.packageService.getById(body.id).then((a) => {
      return this.exchangeDateService.find({
        where: { address: { userId: a.userId } },
      });
    });
  }

  // gets shipper's all package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Get('/vehicle')
  getPackageByVehicleId(
    @Req() req: authRequest,
    @Body() body: idDto
  ): Promise<packageEntity[]> {
    return this.packageService.find({
      where: { vehicleId: body.id },
    });
  }

  //adds "shipped" date
  //finishes a package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Post('/shipped')
  async shipped(@Req() req: authRequest, @Body() body: idDateDto) {
    const _package = await this.packageService.getById(body.id);
    const vehicle = await this.vehicleService.getById(_package.vehicleId);
    if (vehicle.userId == req.user.sub) {
      return this.packageService.update(body.id, {
        shippingDate: new Date().toISOString(),
      }).then(async () => {
        this.userService.addtransaction(await this.userService.getById(vehicle.userId), _package.price)
      });
    } else {
      throw new MethodNotAllowedException(
        'You can only approve packages shipped by you'
      );
    }
  }

  private async calculatePrice(size: string, weight: string): Promise<number> {
    const weightNumber = this.getWeightInGramms(weight);
    const sizeNumber = this.calcDimensions(size);
    return (await weightNumber * await sizeNumber) / 100000;
  }

  private async getWeightInGramms(weight: string): Promise<number> {
    if (weight.includes('gramm'))
      return Number(weight.replace('gramm', ''));
    else
      return Number(weight.replace('kilogramm', '')) * 1000;
  }

  private async calcDimensions(size: string): Promise<number> {
    const dimensions: number[] = size.split('x').map(Number);
    return dimensions.reduce((a, b) => a * b, 1)
  }


}
