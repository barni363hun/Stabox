import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsEmail, IsString } from 'class-validator';
import { Repository } from 'typeorm';
import { contactUsEntity } from '../../Entities';
import { authRequest } from '../auth';
import { GenericService } from '../generics/generic.service';

class myExchangeDateDto {

    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    message: string;
  }
  

@Controller('contact-us')
export class ContactUsController {

constructor(@InjectRepository(contactUsEntity)private contactUsRepository:Repository<contactUsEntity>){}

@Post()
 async create(@Body() body: myExchangeDateDto) {
  const result= this.contactUsRepository.create(body);
  return await this.contactUsRepository.save(result)
}


}
