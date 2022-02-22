import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { packageEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class PackageService extends GenericService<packageEntity> {
  constructor(
    @InjectRepository(packageEntity)
    private packageRepository: Repository<packageEntity>
  ) {
    super(packageRepository);

  }
}
