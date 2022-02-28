import {
  Body,
  Controller,
  Get,
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

class recieverWithAddressDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phoneNumber: string;
  @IsString()
  country: string;
  @IsNumber()
  zipCode: number;
  @IsString()
  cityName: string;
  @IsString()
  street: string;
  @IsNumber()
  houseNumber: number;
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
    @Body() body: recieverWithAddressDto
  ) {
    return this.addressService
      .create({
        id: 0,
        userId: req.user.sub,
        country: body.country,
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
        where: { userId: req.user.sub },
      })
      .then((addresses) => {
        return addresses.map((a) => a.id);
      });
    return this.recieverService.RecieveresByAddressIds(addressIds);
  }
}
