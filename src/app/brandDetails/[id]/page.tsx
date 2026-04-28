import ProductCard from "@/app/_compoents/ProductCard/ProductCard";
import { ProductType } from "@/app/types/route.misr";
import { Brandcard } from "@/Servies/routemisr.servies";
import Link from "next/link";
import React from "react";

export default async function page(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;
  const res = await Brandcard(id);
  console.log(res);

  const Brandcards: ProductType[] = Array.isArray(res) ? res : [];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {!Brandcards.length ? (
        <div className="col-span-full text-center text-gray-500 text-lg">
          No products available for this brand 😢
        </div>
      ) : (
        Brandcards.map((product) => (
          <div className="w-[80%] mx-auto my-5">
            <Link href={`/productdetails/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
