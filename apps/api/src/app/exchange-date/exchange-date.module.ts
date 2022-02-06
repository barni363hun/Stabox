import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { exchangeDateEntity } from '../../Entities';
import { UserModule } from '../user/user.module';
import { ExchangeDateController } from './exchange-date.controller';
import { ExchangeDateService } from './exchange-date.service';

@Module({
  imports: [TypeOrmModule.forFeature([exchangeDateEntity]), UserModule],
  controllers: [ExchangeDateController],
  providers: [ExchangeDateService],
  exports: [ExchangeDateService],
})
export class ExchangeDateModule {}
