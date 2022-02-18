import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { transactionEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class TransactionService extends GenericService<transactionEntity> {
  constructor(
    @InjectRepository(transactionEntity)
    private transactionRepository: Repository<transactionEntity>
  ) {
    super(transactionRepository);
  }
}
