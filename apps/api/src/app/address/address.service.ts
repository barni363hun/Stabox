import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addressEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class AddressService extends GenericService<addressEntity> {
  constructor(
    @InjectRepository(addressEntity)
    private addressRepository: Repository<addressEntity>
  ) {
    super(addressRepository);
  }
}
