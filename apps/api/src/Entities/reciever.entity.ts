import { recieverInterface } from '@stabox/stabox-lib';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { addressEntity, packageEntity } from '.';

@Entity()
export class recieverEntity implements recieverInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressId: number;

  @ManyToOne((type) => addressEntity, (address) => address.recievers)
  address: addressEntity;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  //Relations
  @OneToMany((type) => packageEntity, (package_) => package_.reciever)
  package: packageEntity[];
}
