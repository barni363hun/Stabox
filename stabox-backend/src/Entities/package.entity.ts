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

    @Column()
    reciever: recieverInterface;

    @Column()
    fromAdress: addressInterface;

    @Column()
    postDate: Date;

    @Column()
    shippingDate: Date;

    @Column()
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

    //Relations
}