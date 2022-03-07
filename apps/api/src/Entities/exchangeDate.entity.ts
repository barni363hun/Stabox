import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { addressEntity } from '.';

@Entity()

// on frontend we save start and end Dates as string TODO?
export class exchangeDateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressId;

  @ManyToOne(() => addressEntity, (address) => address)
  address: addressEntity;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
