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
import { IsNotEmpty, IsNumber, IsString, NotEquals } from 'class-validator';
import { addressEntity } from '../../Entities';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { AddressService } from './address.service';
import { Not } from 'typeorm';

class idDto {
  @IsNumber()
  id: number;
}

class addressDto {
  @IsString()
  country: string;
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

class myAddressDto {
  @IsNumber()
  id: number;
  @IsString()
  @IsNotEmpty()
  country: string;
  @IsNumber()
  @NotEquals(0)	
  zipCode: number;
  @IsString()
  @IsNotEmpty()
  cityName: string;
  @IsString()
  @IsNotEmpty()
  street: string;
  @IsString()
  @IsNotEmpty()
  houseNumber: string;
  @IsString()
  @IsNotEmpty()
  name: string;
}

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  //creates address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  create(@Req() req: authRequest, @Body() body: addressDto) {
    return this.addressService.create({
      id: 0,
      userId: req.user.sub,
      country: body.country,
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
      where: { userId: req.user.sub, name: Not(''), isDeleted: false },
    });
  }

  // gets user's own addresses
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get('/reciever')
  getMyRecieverAddresses(@Req() req: authRequest): Promise<addressEntity[]> {
    return this.addressService.find({
      where: { userId: req.user.sub, name: '', isDeleted: false },
    });
  }

  // delete own address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Delete()
  delete(@Req() req: authRequest, @Body() body: idDto) {
    return this.addressService.getById(body.id).then((a: addressEntity) => {
      if (a.userId == req.user.sub) {
        a.isDeleted = true;
        return this.addressService.update(body.id, a).then(() => {
          return this.addressService.delete(body.id);
        });
        // this.update(req, a)
        // throw new MethodNotAllowedException(
        //   'done'
        // ); 
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
  update(@Req() req: authRequest, @Body() body: myAddressDto) {
    return this.addressService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        const newDates: addressDto = {
          country: body.country,
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
