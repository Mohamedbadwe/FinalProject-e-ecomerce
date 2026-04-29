import { ReactNode } from "react";

export interface ProductType {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: CategoryType;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount: number;
  id: string;
}

export interface CategoryType {
  createdAt: string;
  image: string;
  name: string;
  slug: string;
  updatedAt: string;
  _id: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
export interface SingleType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface DetailsProductProps  {
  Product: ProductType;
  stars: ReactNode;
  id: string;
};