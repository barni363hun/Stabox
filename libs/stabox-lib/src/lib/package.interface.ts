export interface packageInterface {
  id: number;
  user: string;
  shipper: number;
  reciever: number;
  fromAdress: number;
  postDate: Date;
  shippingDate: Date;
  size: string;
  weight: string;
  fragile: boolean;
  price: number;
  currentCity: number;
  code: string;
}
