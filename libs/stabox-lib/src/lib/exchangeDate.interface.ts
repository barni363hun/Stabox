import { userInterface } from '..';

export interface exchangeDateInterface {
  id: number;
  user: userInterface;
  startDate: Date;
  endDate: Date;
}
