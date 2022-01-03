import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { transactionEntity, userEntity } from './Entities';
import { packageController } from './Package/package.controller';
import { PackageModule } from './Package/package.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PackageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
