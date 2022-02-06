import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {
  addressEntity,
  exchangeDateEntity,
  packageEntity,
  recieverEntity,
  transactionEntity,
  userEntity,
  vehicleEntity,
} from '../Entities';
import { AuthModule } from './auth/auth.module';
import { ExchangeDateModule } from './exchange-date/exchange-date.module';
import { TransactionModule } from './transaction/transaction.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AddressModule } from './address/address.module';
import { RecieverModule } from './reciever/reciever.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT || '3306'),
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'myDatabase',
      entities: [
        userEntity,
        addressEntity,
        exchangeDateEntity,
        packageEntity,
        recieverEntity,
        vehicleEntity,
        transactionEntity,
      ],
      autoLoadEntities: true, //only in development mode
      synchronize: true,
    }),
    UserModule,
    ExchangeDateModule,
    TransactionModule,
    VehicleModule,
    AddressModule,
    RecieverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
