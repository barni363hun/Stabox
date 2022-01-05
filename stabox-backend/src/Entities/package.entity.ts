import { from } from "rxjs";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { addressEntity, shipperEntity, userEntity } from ".";
import { recieverEntity } from "./reciever.entity";


@Entity()
export class packageEntity implements packageInterface {

    //Columns
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => userEntity, user => user.packages)
    user: userInterface;

    @ManyToOne(() => shipperEntity, shipper => shipper.packages)
    shipper: shipperInterface;

    @ManyToOne(type => recieverEntity, reciever => reciever.package)
    reciever: recieverInterface;

    @ManyToOne(type => addressEntity, fromAdress => fromAdress.packages)
    fromAdress: addressInterface;

    @Column({ nullable: false })
    postDate: Date;

    @Column()
    shippingDate: Date;

    @Column({ nullable: false })
    size: string;

    @Column()
    weight: string;

    @Column()
    fragile: boolean;

    @Column()
    price: number;

    @Column()
    currentRegion: number;

    @Column()
    code: string;

    @Column()
    name: string;

    //Relations
}