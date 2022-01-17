import { userInterface } from '..';

export interface transactionInterface {
  id: number;
  user: userInterface;
  amount: number;
  direction: boolean;
}
