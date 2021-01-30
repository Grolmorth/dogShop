import { Address } from './address';
import { Product } from './product';
import { User } from './user';
export interface Purchase {
  date: Date;
  paid: boolean;
  sent: boolean;
  totalValue: number;
  userEmail: string;
  userAddress: Address;
  purchaseList: [Product];
}
