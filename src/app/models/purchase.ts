import { Address } from './address';
import { Product } from './product';
import { User } from './user';
export interface Purchase {
  date: string;
  paid: boolean;
  sent: boolean;
  totalValue: number;
  userEmail: string;
  userAddress: Address;
  purchaseList: [Product];
}
