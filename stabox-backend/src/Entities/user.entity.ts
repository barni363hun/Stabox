import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Transaction } from "typeorm";
import { packageEntity, shipperEntity, transactionEntity } from ".";


@Entity()
export class userEntity implements userInterface {

    //Columns
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => shipperEntity)
    @JoinColumn()
    shipper: shipperEntity;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @Column()
    stabucks: number;

    //Relations
    @OneToMany(()=> transactionEntity, transaction=>transaction.user)
    transactions:transactionEntity[]

    @OneToMany(()=> packageEntity, package_=> package_.user)// package name is reserved in 'strict mode'
    packages:packageEntity[]



}