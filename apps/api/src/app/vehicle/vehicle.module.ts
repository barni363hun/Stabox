import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { vehicleEntity } from '../../Entities';

@Module({
  imports: [TypeOrmModule.forFeature([vehicleEntity])],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
