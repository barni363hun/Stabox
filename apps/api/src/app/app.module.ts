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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import ormconfig = require('./ormconfig');
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ENV === 'development' ? '.env' : `.env.production`,
    }),
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'stabox-frontend'),
    }),
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
