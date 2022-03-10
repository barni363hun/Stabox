import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class contactUsEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
  @Column()
  name: string;
  @Column()
  message: string;


}
