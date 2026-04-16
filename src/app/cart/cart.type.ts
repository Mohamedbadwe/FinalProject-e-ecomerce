import { ProductType } from "../types/route.misr";

export interface cartData {
  cartOwner: string;
  createdAt: string;
  totalCartPrice: number;
  updatedAt: string;
  __v: string;
  _id: string;
  products : cartProduct[]
}

export interface cartProduct {
  count: number;
  price: number;
  product: ProductType;
}
