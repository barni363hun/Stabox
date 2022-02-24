import { Injectable, NotFoundException } from '@nestjs/common';
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
  async getById(id: number): Promise<exchangeDateEntity> {
    const item = await this.repository.findOne(id, { relations: ['address'] });
    if (!item) {
      throw new NotFoundException('NOT_FOUND');
    }
    return item;
  }
}
