import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from "./user.entity";

@Entity()
export class packageEntity implements packageInterface{

    //Columns
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(()=>userEntity, user=>user.packages)
    user: userInterface;

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