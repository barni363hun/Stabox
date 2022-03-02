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
import ormconfig = require('./ormconfig');

const APP_ENV = process.env.APP_ENV || 'local';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${APP_ENV}`,
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    ExchangeDateModule,
    TransactionModule,
    VehicleModule,
    AddressModule,
    RecieverModule,
    PackageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
