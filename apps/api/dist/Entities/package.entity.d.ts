export declare class packageEntity implements packageInterface {
    id: number;
    user: userInterface;
    shipper: shipperInterface;
    reciever: recieverInterface;
    fromAdress: addressInterface;
    postDate: Date;
    shippingDate: Date;
    size: string;
    weight: string;
    fragile: boolean;
    price: number;
    currentRegion: number;
    code: string;
    name: string;
}
