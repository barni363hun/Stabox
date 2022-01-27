import { packageEntity } from ".";
export declare class shipperEntity implements shipperInterface {
    id: number;
    vehicle: string;
    region: number;
    packages: packageEntity[];
}
