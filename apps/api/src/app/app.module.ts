import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ExchangeDateModule } from './exchange-date/exchange-date.module';
import { TransactionModule } from './transaction/transaction.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AddressModule } from './address/address.module';
import { RecieverModule } from './reciever/reciever.module';
import { PackageModule } from './package/package.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import ormconfig = require('./ormconfig');

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    ExchangeDateModule,
    TransactionModule,
    VehicleModule,
    AddressModule,
    RecieverModule,
    PackageModule,
    ContactUsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
