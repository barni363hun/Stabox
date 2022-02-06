import { Module } from '@nestjs/common';
import { RecieverService } from './reciever.service';
import { RecieverController } from './reciever.controller';
import { recieverEntity } from '../../Entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([recieverEntity]), AddressModule],
  providers: [RecieverService],
  controllers: [RecieverController],
})
export class RecieverModule {}
