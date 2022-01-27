import { shipperInterface } from './shipper.interface';

export interface userInterface {
  id: number;
  shipper: shipperInterface;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  stabucks: number;
}
