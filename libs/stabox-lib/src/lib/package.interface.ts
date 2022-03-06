export interface packageInterface {
  id: number;
  userId: string;
  recieverId: number;
  fromAddressId: number;
  postDate: Date;
  shippingDate: Date;
  size: string;
  weight: string;
  fragile: boolean;
  price: number;
  currentCity: number;
}
