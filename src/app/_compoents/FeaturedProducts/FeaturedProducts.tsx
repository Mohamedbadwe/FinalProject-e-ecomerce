import { GetAllProduct } from "@/Servies/routemisr.servies";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

export default async function FeaturedProducts() {
  const Allproduct = await GetAllProduct();

  return (
    <>
    <div className="mx-auto w-[90%]">
        <h1 className="font-[Font_1] font-bold text-[30px] leading-9 tracking-[0] align-middle border-s-8  ps-2  border-[#009966]">
        Featured <span className="text-[#009966]">Products</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6  mt-10 w-full mx-auto ">
        {Allproduct?.map((product) => (
          <Link href={`/productdetails/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
