import { addressEntity, packageEntity } from ".";
export declare class recieverEntity implements recieverInterface {
    id: number;
    adress: addressEntity;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    package: packageEntity[];
}
