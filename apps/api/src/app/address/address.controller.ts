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
import { IsNumber, IsString } from 'class-validator';
import { addressEntity } from '../../Entities';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { AddressService } from './address.service';

class idDto {
  @IsNumber()
  id: number;
}

class addressDTO {
  @IsNumber()
  region: number;
  @IsNumber()
  zipCode: number;
  @IsString()
  cityName: string;
  @IsString()
  street: string;
  @IsString()
  houseNumber: string;
  @IsString()
  name: string;
}

class myAddressDTO {
  @IsNumber()
  id: number;
  @IsNumber()
  region: number;
  @IsNumber()
  zipCode: number;
  @IsString()
  cityName: string;
  @IsString()
  street: string;
  @IsString()
  houseNumber: string;
  @IsString()
  name: string;
}

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  //creates address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  create(@Req() req: authRequest, @Body() body: addressDTO) {
    return this.addressService.create({
      id: 0,
      userId: req.user.sub,
      region: body.region,
      zipCode: body.zipCode,
      cityName: body.cityName,
      street: body.street,
      houseNumber: body.houseNumber,
      name: body.name,
    });
  }

  // gets all addresses
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Post('/all')
  getAll() {
    return this.addressService.getAll();
  }

  // gets user's all address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  getMyAddresses(@Req() req: authRequest): Promise<addressEntity[]> {
    return this.addressService.find({
      where: { userId: req.user.sub },
    });
  }

  // delete own address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Delete()
  delete(@Req() req: authRequest, @Body() body: idDto) {
    return this.addressService.getById(body.id).then((a) => {
      if (a.userId.toString() == req.user.sub) {
        return this.addressService.delete(body.id);
      } else {
        throw new MethodNotAllowedException(
          'You can only delete your own address'
        );
      }
    });
  }

  //modify own address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Patch()
  update(@Req() req: authRequest, @Body() body: myAddressDTO) {
    return this.addressService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        const newDates: addressDTO = {
          region: body.region,
          zipCode: body.zipCode,
          cityName: body.cityName,
          street: body.street,
          houseNumber: body.houseNumber,
          name: body.name,
        };
        return this.addressService.update(body.id, newDates);
      } else {
        throw new MethodNotAllowedException(
          'You can only modify your own address'
        );
      }
    });
  }
}
