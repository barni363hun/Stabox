import { userInterface } from '..';

export interface addressInterface {
  id: number;
  user: userInterface;
  region: number;
  zipCode: number;
  cityName: string;
  street: string;
  houseNumber: number;
}
