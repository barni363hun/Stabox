import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { exchangeDateEntity, packageEntity, userEntity } from '.';
import { recieverEntity } from './reciever.entity';

@Entity()
export class addressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.addresses)
  user: userEntity;

  @Column()
  region: number;

  @Column()
  zipCode: number;

  @Column()
  cityName: string;

  @Column()
  street: string;

  @Column()
  houseNumber: string;

  @Column({nullable:true})
  name: string;

  //Relations
  @OneToMany((type) => recieverEntity, (reciever) => reciever.address)
  recievers: recieverEntity[];

  @OneToMany((type) => packageEntity, (package_) => package_.fromAddress) // "package" is a reserved word for js
  packages: packageEntity[];

  @OneToMany((type) => exchangeDateEntity, (exchangeDate) => exchangeDate.address)
  exchangeDates: exchangeDateEntity[];
}
