import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { packageEntity } from '../../Entities';
import { AddressModule } from '../address/address.module';
import { ExchangeDateModule } from '../exchange-date/exchange-date.module';
import { VehicleModule } from '../vehicle/vehicle.module';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([packageEntity]),
    AddressModule,
    ExchangeDateModule,
    VehicleModule,
  ],
  controllers: [PackageController],
  providers: [PackageService],
})
export class PackageModule {}
