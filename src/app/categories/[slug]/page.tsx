import { ProductType } from "@/app/types/route.misr";
import {
  GetAllProduct,
} from "../../../Servies/routemisr.servies";
import ProductCard from "@/app/_compoents/ProductCard/ProductCard";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const props = await params;
  const slugs = props.slug;
  const products: ProductType[]  = (await GetAllProduct()) || [] ;
  const filteredProducts = products.filter((item: ProductType) =>
    item.category?.slug?.toLowerCase() === slugs
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6  mt-10 w-[90%] mx-auto">
      {filteredProducts.map((item: ProductType) => (
        <Link href={`/productdetails/${item._id}`} key={item._id}>
          <ProductCard product={item} />
        </Link>
      ))}
    </div>
  );
}
