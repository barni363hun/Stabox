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
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { AddressService } from '../address/address.service';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { RecieverService } from './reciever.service';

class idDto {
  @IsNumber()
  id: number;
}

class recieverWithAddressDTO {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phoneNumber: string;
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
}

class myRecieverDTO {
  @IsNumber()
  id: number;
  @IsNumber()
  addressId: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phoneNumber: string;
}

@Controller('reciever')
export class RecieverController {
  constructor(
    private readonly recieverService: RecieverService,
    private readonly addressService: AddressService
  ) {}

  //creates reciever with address
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Put()
  createWithAddress(
    @Req() req: authRequest,
    @Body() body: recieverWithAddressDTO
  ) {
    return this.addressService
      .create({
        id: 0,
        userId: req.user.sub,
        region: body.region,
        zipCode: body.zipCode,
        cityName: body.cityName,
        street: body.street,
        houseNumber: body.houseNumber,
      })
      .then((res) => {
        return this.recieverService.create({
          id: 0,
          addressId: res.id,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phoneNumber: body.phoneNumber,
        });
      });
  }

  // gets all recieveres
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Post('/all')
  getAll() {
    return this.recieverService.getAll();
  }

  // gets user's all reciever
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('user')
  @Get()
  async getMyRecieveres(@Req() req: authRequest) {
    const addressIds: number[] = await this.addressService
      .find({
        where: { userId: req.user.sub, name: '' },
      })
      .then((addresses) => {
        return addresses.map((a) => a.id);
      });
    return this.recieverService.RecieveresByAddressIds(addressIds);
  }
}
