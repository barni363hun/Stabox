import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { packageEntity, userEntity } from '.';
import { recieverEntity } from './reciever.entity';

@Entity()
export class addressEntity implements addressInterface {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => userEntity, (user) => user.addresses)
	user: userInterface;

	@Column()
	region: number;

	@Column()
	zipCode: number;

	@Column()
	cityName: string;

	@Column()
	street: string;

	@Column()
	houseNumber: number;

	//Relations
	@ManyToOne(type => recieverEntity, reciever => reciever.adress)
	reciever: recieverInterface;

	@OneToMany(type => packageEntity, package_ => package_.fromAdress) // "package" is a reserved word for js
	package: packageInterface[];
}
