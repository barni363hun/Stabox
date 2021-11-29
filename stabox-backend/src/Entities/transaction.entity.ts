import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from ".";


@Entity()
export class transactionEntity implements transactionInterface {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => userEntity, user => user.transactions)
    user: userEntity;

    @Column()
    amount: number;

    @Column()
    direction: boolean;

}