import { Type } from "class-transformer";
import { IsObject, isObject, IsString, isString, ValidateNested } from "class-validator";
import { shipperEntity } from "src/Entities";
import { ShipperDTO } from "./shipper.dto";

export class CreatePackageDTO {

    // user: userInterface;
    shipper: ShipperDTO;
    // reciever: recieverInterface;
    // fromAdress: addressInterface;
    // postDate: Date;
    // shippingDate: Date;
    @IsString()
    size: string;
    // weight: string;
    // fragile: boolean;
    // price: number;
    // currentRegion: number;
    // code: string;

}