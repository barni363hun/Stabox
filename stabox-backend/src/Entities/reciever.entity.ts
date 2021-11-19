import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { addressEntity, packageEntity } from ".";

@Entity()
export class recieverEntity implements recieverInterface {


    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type=> addressEntity, adress => adress.reciever)
    adress: addressInterface;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    //Relations
    @OneToMany(type => packageEntity, package_ => package_.reciever)
    package : packageInterface[];

}