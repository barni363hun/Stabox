import { packageInterface } from '@stabox/stabox-lib';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { addressEntity, userEntity, vehicleEntity } from '.';
import { recieverEntity } from './reciever.entity';

@Entity()
export class packageEntity implements packageInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  vehicleId: number;

  @ManyToOne(() => vehicleEntity, (vehicle) => vehicle.id)
  vehicle: vehicleEntity;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.packages)
  user: userEntity;

  @Column()
  recieverId: number;

  @ManyToOne(() => recieverEntity, (reciever) => reciever.package)
  reciever: recieverEntity;

  @Column()
  fromAddressId: number;

  @ManyToOne(() => addressEntity, (fromAddress) => fromAddress.packages)
  fromAddress: addressEntity;

  @Column()
  postDate: Date;

  @Column()
  shippingDate: Date;

  @Column()
  size: string;

  @Column()
  weight: string;

  @Column()
  fragile: boolean;

  @Column()
  price: number;

  @Column()
  currentCity: number;

  @Column()
  name: string;
}
