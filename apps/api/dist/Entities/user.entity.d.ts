import { packageEntity, shipperEntity, transactionEntity } from ".";
export declare class userEntity implements userInterface {
    id: number;
    shipper: shipperEntity;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    stabucks: number;
    transactions: transactionEntity[];
    packages: packageEntity[];
    addresses: packageEntity[];
}
