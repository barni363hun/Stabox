import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { shipperEntity, userEntity } from ".";


@Entity()
export class packageEntity implements packageInterface{

    //Columns
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>userEntity, user=>user.packages)
    user: userInterface;

    @ManyToOne(()=> shipperEntity, shipper => shipper)
    shipper: shipperInterface;

    reciever: recieverInterface;

    fromAdress: addressInterface;

    postDate: Date;

    shippingDate: Date;

    size: string;

    weight: string;

    fragile: boolean;

    price: number;

    currentRegion: number;
    
    code: string;

    //Relations
}