import { Purchase } from './purchase';
import { Product } from './product';
import { Address } from './address';
export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName?: string;
  photoURL?: string;
  address?: Address;
  cart?: [Product];
  shoppingHistory?: [Purchase];
}
