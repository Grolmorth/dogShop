import { Product } from './product';
export interface Purchase {
  date: Date;
  paid: boolean;
  purchaseList: [Product];
}
