import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { addressEntity, userEntity } from '.';

@Entity()
export class exchangeDateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // userId: string;
  // @ManyToOne(() => userEntity, (user) => user)
  // user: userEntity;

  @Column()
  addressId;
  @ManyToOne(() => addressEntity, (address) => address)
  address: addressEntity;

  @Column()
  addressId: number;

  @ManyToOne(() => addressEntity, (address) => address.exchangeDates)
  address: addressEntity;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
