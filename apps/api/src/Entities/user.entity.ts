import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import {
  addressEntity,
  packageEntity,
  shipperEntity,
  transactionEntity,
} from '.';

@Entity()
export class userEntity {
  //Columns
  @PrimaryColumn()
  id: string;

  @OneToOne((type) => shipperEntity)
  @JoinColumn()
  shipper: shipperEntity;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column({ default: 0 })
  stabucks: number;

  //Relations
  @OneToMany(() => transactionEntity, (transaction) => transaction.user)
  transactions: transactionEntity[];

  @OneToMany(() => packageEntity, (package_) => package_.user) // package name is reserved in 'strict mode'
  packages: packageEntity[];

  @OneToMany(() => addressEntity, (address) => address.user) // package name is reserved in 'strict mode'
  addresses: packageEntity[];
}
