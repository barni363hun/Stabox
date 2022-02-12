import {
  Body,
  Controller,
  Delete,
  Get,
  MethodNotAllowedException,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';
import { packageEntity } from '../../Entities';
import { AddressService } from '../address/address.service';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { ExchangeDateService } from '../exchange-date/exchange-date.service';
import { VehicleService } from '../vehicle/vehicle.service';
import { PackageService } from './package.service';

class idDto {
  @IsNumber()
  id: number;
}

class idDateDto {
  @IsNumber()
  id: number;
  @IsDateString()
  shipped: Date;
}

class packageDto {
  @IsString()
  size: string;
  @IsString()
  weight: string;
  @IsBoolean()
  fragile: boolean;
  @IsNumber()
  fromAddressId: number;
  @IsString()
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
    private readonly vehicleService: VehicleService
  ) { }

  //creates package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  create(@Req() req: authRequest, @Body() body: packageDto) {
    return this.packageService.create({
      userId: req.user.sub,
      vehicleId: 0,
      recieverId: body.recieverId,
      fromAddressId: body.fromAddressId,
      size: body.size,
      weight: body.weight,
      fragile: body.fragile,
      price: 5,
      name: body.name,
    });
  }

  // gets all packages
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Post('/all')
  getAll() {
    return this.packageService.getAll();
  }

  // gets user's all package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  getMyPackages(@Req() req: authRequest): Promise<packageEntity[]> {
    return this.packageService.find({
      where: { userId: req.user.sub },
    });
  }

  // delete own package
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Delete()
  delete(@Req() req: authRequest, @Body() body: idDto) {
    return this.packageService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        return this.packageService.delete(body.id);
      } else {
        throw new MethodNotAllowedException(
          'You can only delete your own package'
        );
      }
    });
  }

  //assign vehicle, select post date
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Patch()
  assignMe(@Req() req: authRequest, @Body() body: assignMeDto) {
    return this.packageService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        return this.packageService.delete(body.id);
      } else {
        throw new MethodNotAllowedException(
          'You can only delete your own package'
        );
      }
    });
  }

  //sent
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Post()
  async sent(@Req() req: authRequest, @Body() body: idDto) {
    return this.packageService.getById(body.id).then((a) => {
      if (a.vehicleId == 0) {
        return this.addressService.getById(a.fromAddressId).then((n) => {
          return this.packageService.update(body.id, {
            currentRegion: n.region,
          });
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
      return this.exchangeDateService.find({ where: { userId: a.userId } });
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
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Post('/shipped')
  shipped(@Req() req: authRequest, @Body() body: idDateDto) {
    return this.packageService
      .find({
        where: { id: body.id },
      })
      .then((packag) => {
        return this.vehicleService.getById(packag[0].vehicleId).then((veh) => {
          if (veh.userId == req.user.sub) {
            return this.packageService.update(body.id, {
              shippingDate: body.shipped,
            });
          } else {
            throw new MethodNotAllowedException(
              'You can only approve packages shipped by you'
            );
          }
        });
      });
  }
}