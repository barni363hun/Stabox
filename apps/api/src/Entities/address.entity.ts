import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { exchangeDateEntity, packageEntity, userEntity } from '.';
import { recieverEntity } from './reciever.entity';
import { addressInterface } from '@stabox/stabox-lib';

@Entity()
export class addressEntity implements addressInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.addresses)
  user: userEntity;

  @Column()
  country: string;

  @Column()
  zipCode: number;

  @Column()
  cityName: string;

  @Column()
  street: string;

  @Column()
  houseNumber: string;

  @Column({ nullable: true })
  name: string;

  @Column({ default: false })
  isDeleted: boolean;

  //Relations
  @OneToMany(() => recieverEntity, (reciever) => reciever.address)
  recievers: recieverEntity[];

  @OneToMany(() => exchangeDateEntity, (exchangeDate) => exchangeDate.address)
  exchangeDates: exchangeDateEntity[];

  @OneToMany(() => packageEntity, (package_) => package_.fromAddress) // "package" is a reserved word for js
  packages: packageEntity[];
}
