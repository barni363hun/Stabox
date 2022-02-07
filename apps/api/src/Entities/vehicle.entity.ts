import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class vehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() //TODO a többi kapcsolathoz is felvenni a ezt az ID-s dolgot
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.vehicles)
  user: userEntity;

  @Column()
  name: string;
}
