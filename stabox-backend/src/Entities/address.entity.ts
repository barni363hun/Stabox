import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class addressEntity implements addressInterface {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => userEntity, (user) => user.addresses)
  user: userInterface;

  @Column()
  region: number;

  @Column()
  zipCode: number;

  @Column()
  cityName: string;

  @Column()
  street: string;

  @Column()
  houseNumber: number;
}
