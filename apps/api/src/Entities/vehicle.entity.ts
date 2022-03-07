import { vehicleInterface } from '@stabox/stabox-lib';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class vehicleEntity implements vehicleInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.vehicles)
  user: userEntity;

  @Column()
  name: string;
}
