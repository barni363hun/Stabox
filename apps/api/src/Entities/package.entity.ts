import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { addressEntity, shipperEntity, userEntity } from '.';
import { recieverEntity } from './reciever.entity';

@Entity()
export class packageEntity {
  //Columns
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => userEntity, (user) => user.packages)
  user: userEntity;

  @ManyToOne(() => shipperEntity, (shipper) => shipper.packages)
  shipper: shipperEntity;

  @ManyToOne((type) => recieverEntity, (reciever) => reciever.package)
  reciever: recieverEntity;

  @ManyToOne((type) => addressEntity, (fromAdress) => fromAdress.packages)
  fromAdress: addressEntity;

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
  currentRegion: number;

  @Column()
  code: string;

  @Column()
  name: string;

  //Relations
}
