import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { vehicleEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class VehicleService extends GenericService<vehicleEntity> {
  constructor(
    @InjectRepository(vehicleEntity)
    private vehicleRepository: Repository<vehicleEntity>
  ) {
    super(vehicleRepository);
  }
}
