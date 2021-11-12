import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shipperEntity implements shipperInterface{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicle: string;

    @Column()
    region: number;

}