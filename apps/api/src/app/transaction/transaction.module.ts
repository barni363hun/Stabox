import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { transactionEntity } from '../../Entities';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([transactionEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService]
})
export class TransactionModule { }
