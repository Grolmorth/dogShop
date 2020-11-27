export interface Product {
  name: string;
  info: string;
  alteration: [Alteration];
}
export interface Alteration {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}
