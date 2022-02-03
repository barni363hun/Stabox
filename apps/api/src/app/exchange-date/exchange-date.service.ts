import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { exchangeDateEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class ExchangeDateService extends GenericService<exchangeDateEntity> {
  constructor(
    @InjectRepository(exchangeDateEntity)
    private exchangeDateRepository: Repository<exchangeDateEntity>
  ) {
    super(exchangeDateRepository);
  }
}
