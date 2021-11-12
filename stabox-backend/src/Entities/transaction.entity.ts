import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from ".";


@Entity()
export class transactionEntity implements transactionInterface{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>userEntity, user => user.transactions)
    user: userInterface;
    amount: number;
    direction: boolean;

}