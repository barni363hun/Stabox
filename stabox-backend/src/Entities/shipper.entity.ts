import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { packageEntity } from ".";

@Entity()
export class shipperEntity implements shipperInterface{

    //Columns
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicle: string;

    @Column()
    region: number;

    //Relations
    @ManyToOne(()=> packageEntity, package_=>package_.shipper) // OneToMany
    packages:packageEntity; // []
    
}