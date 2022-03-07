import { transactionInterface } from '@stabox/stabox-lib';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class transactionEntity implements transactionInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @ManyToOne(() => userEntity, (user) => user.transactions)
  user: userEntity;

  @Column()
  amount: number;

  @Column()
  direction: boolean;

  @Column('timestamp')
  timeStamp: Date;
}
