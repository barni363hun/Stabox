import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { contactUsEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';
import { UserModule } from '../user/user.module';
import { ContactUsController } from './contact-us.controller';

@Module({
  imports: [TypeOrmModule.forFeature([contactUsEntity]), UserModule],
  controllers: [ContactUsController],
  providers: [Repository],
  exports: [],
})
export class ContactUsModule {}
