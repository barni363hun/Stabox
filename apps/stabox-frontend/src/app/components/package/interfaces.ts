import { addressInterface } from '@stabox/stabox-lib';

interface packageInterface {
  id: number;
  fromAddress: addressInterface;
  size: string;
  weight: string;
  fragile: boolean;
  price: number;
  current_region: string;
}
