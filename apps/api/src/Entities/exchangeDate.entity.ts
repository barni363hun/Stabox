import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class exchangeDateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() //TODO a többi kapcsolathoz is felvenni a ezt az ID-s dolgot
  userId: number;

  @ManyToOne(() => userEntity, (user) => user)
  user: userEntity;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
