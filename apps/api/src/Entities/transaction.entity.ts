import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { userEntity } from '.';

@Entity()
export class transactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => userEntity, (user) => user.transactions)
  user: userEntity;

  @Column()
  amount: number;

  @Column()
  direction: boolean;
}
