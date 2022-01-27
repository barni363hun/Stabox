import { userEntity } from ".";
export declare class transactionEntity implements transactionInterface {
    id: number;
    user: userEntity;
    amount: number;
    direction: boolean;
}
