import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import {
  addressEntity,
  packageEntity,
  transactionEntity,
  vehicleEntity,
} from '.';

@Entity()
  
//forntend gets roles but we are not storing them so userEntity cant implement userInterface  
export class userEntity {
  @PrimaryColumn()
  id: string;

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

  @OneToMany(() => vehicleEntity, (vehicles) => vehicles.user)
  vehicles: vehicleEntity[];

  @OneToMany(() => packageEntity, (package_) => package_.user) // package name is reserved in 'strict mode'
  packages: packageEntity[];

  @OneToMany(() => addressEntity, (address) => address.user) // package name is reserved in 'strict mode'
  addresses: addressEntity[];
}
