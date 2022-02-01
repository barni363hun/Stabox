import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class exchangeDateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => userEntity, (user) => user)
  user: userEntity;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
