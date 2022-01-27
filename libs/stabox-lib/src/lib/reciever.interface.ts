import { addressInterface } from '..';

export interface recieverInterface {
  id: number;
  adress: addressInterface;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
