import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from "./user.entity";

@Entity()
export class transactionEntity implements transactionInterface{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>userEntity, user => user.transactions)
    user: userInterface;
    amount: number;
    direction: boolean;

}