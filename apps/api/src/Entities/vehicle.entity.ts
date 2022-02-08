import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class vehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.vehicles)
  user: userEntity;

  @Column()
  name: string;
}
