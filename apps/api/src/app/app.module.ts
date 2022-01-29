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
  shipperEntity,
  transactionEntity,
  userEntity,
} from '../Entities';
import { AuthModule } from './auth/auth.module';

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
        shipperEntity,
        transactionEntity,
      ],
      autoLoadEntities: true, //only in development mode
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
