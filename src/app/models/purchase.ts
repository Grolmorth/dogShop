import { Address } from './address';
import { Product } from './product';

export interface Purchase {
  date: string;
  paid: boolean;
  sent: boolean;
  totalValue: number;
  userEmail: string;
  userUid: string;
  userAddress: Address;
  purchaseList: [Product];
  sentBy?: string;
  sentDate?: string;
}
