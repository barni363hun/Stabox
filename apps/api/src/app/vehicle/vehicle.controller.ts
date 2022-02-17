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
import { vehicleEntity } from '../../Entities';
import { AuthGuard, authRequest, RoleGuard } from '../auth';
import { Roles } from '../auth/roles.decorator';
import { VehicleService } from './vehicle.service';

class idDto {
  @IsNumber()
  id: number;
}

class vehicleDto {
  @IsString()
  name: string;
}

class myVehicleDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  //creates vehicle
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Put()
  create(@Req() req: authRequest, @Body() body: vehicleDto) {
    return this.vehicleService.create({
      id: 0,
      userId: req.user.sub,
      name: body.name,
    });
  }

  // gets all vehicles
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('admin')
  @Post('/all')
  getAll() {
    return this.vehicleService.getAll();
  }

  // gets user's all vehicles
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Get()
  getMyVehicles(@Req() req: authRequest): Promise<vehicleEntity[]> {
    return this.vehicleService.find({
      where: { userId: req.user.sub },
    });
  }

  // delete own vehicles
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Delete()
  delete(@Req() req: authRequest, @Body() body: idDto) {
    return this.vehicleService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        return this.vehicleService.delete(body.id);
      } else {
        throw new MethodNotAllowedException(
          'You can only delete your own vehicles'
        );
      }
    });
  }

  //modify own vehicles
  @UseGuards(AuthGuard, RoleGuard)
  @Roles('shipper')
  @Patch()
  update(@Req() req: authRequest, @Body() body: myVehicleDto) {
    return this.vehicleService.getById(body.id).then((a) => {
      if (a.userId == req.user.sub) {
        const newVehicle: vehicleDto = {
          name: body.name,
        };
        return this.vehicleService.update(body.id, newVehicle);
      } else {
        throw new MethodNotAllowedException(
          'You can only modify your own vehicles'
        );
      }
    });
  }
}
