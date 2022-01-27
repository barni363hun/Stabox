import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from ".";

 @Entity()
 export class exchangeDateEntity implements exchangeDateInterface{

    @PrimaryGeneratedColumn()
     id: number;

     @ManyToOne(()=> userEntity, user=> user)
     user: userInterface;

     @Column()
     startDate: Date;
     
     @Column()
     endDate: Date;

 }