import { IsNumber, IsString } from "class-validator";

export class ShipperDTO {
    @IsNumber()
    id: number;
    @IsString()
    vehicle: string;
    @IsNumber()
    region: number;
}