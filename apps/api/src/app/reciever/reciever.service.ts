import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { recieverEntity } from '../../Entities';
import { GenericService } from '../generics/generic.service';

@Injectable()
export class RecieverService extends GenericService<recieverEntity> {
  constructor(
    @InjectRepository(recieverEntity)
    private recieverRepository: Repository<recieverEntity>
  ) {
    super(recieverRepository);
  }

  async RecieveresByAddressIds(addressIds: number[]) {
    const recievers = await Promise.all(
      addressIds.map((id) => {
        return this.getRecByAdId(id);
      })
    );
    return [].concat(...recievers);
  }
  private async getRecByAdId(id: number): Promise<recieverEntity[]> {
    return this.recieverRepository.find({
      where: { addressId: id },
    });
  }
}
