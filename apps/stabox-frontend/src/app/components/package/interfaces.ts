interface packageInterface {
    id: number,
    fromAddress: addressInterface,
    size: string,
    weight: string,
    fragile: boolean,
    price: number,
    current_region: string
}
interface addressInterface {
    id: number
    region: string
    zipCode: number,
    city: string,
    street: string,
    houseNumber: number,
    name: string
}