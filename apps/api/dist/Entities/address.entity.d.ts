import { packageEntity, userEntity } from '.';
import { recieverEntity } from './reciever.entity';
export declare class addressEntity implements addressInterface {
    id: number;
    user: userEntity;
    region: number;
    zipCode: number;
    cityName: string;
    street: string;
    houseNumber: number;
    name: string;
    recievers: recieverEntity[];
    packages: packageEntity[];
}
