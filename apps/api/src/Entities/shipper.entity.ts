import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { packageEntity } from '.';

@Entity()
export class shipperEntity {
  //Columns
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle: string;

  @Column()
  region: number;

  //Relations
  @OneToMany(() => packageEntity, (package_) => package_.shipper)
  packages: packageEntity[];
}
