import ProductCard from "@/app/_compoents/ProductCard/ProductCard";
import {  ProductType, SingleType } from "@/app/types/route.misr";
import { GetAllProduct, Singlecategory } from "@/Servies/routemisr.servies";
import Link from "next/link";

export default async function page(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;

  const Categoty: SingleType | null = await Singlecategory(id) ;

  const slugs = Categoty?.slug;


  const products: ProductType[] = (await GetAllProduct()) || [];

  const filteredProducts = products.filter(
    (item) => item.category?.slug?.toLowerCase() === slugs,
  );


  return (
    <>
      <div className="flex justify-center p-3  flex-col cursor-pointer bg-[#16A34A] h-51">
        <div className="flex gap-2 ">
          <div className="bg-white p-3">
            <img
              src={Categoty?.image}
              alt={Categoty?.name}
              className="size-16 object-cover"
            />
          </div>
          <div>
            <h2 className=" font-semibold text-[18px] mt-3 text-gray-700">
              {Categoty?.name}
            </h2>
            <p>Choose a subcategory to browse products</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6  mt-10 w-[90%] mx-auto">
        {filteredProducts.map((item) => (
          <Link href={`/productdetails/${item._id}`} key={item._id}>
            <ProductCard product={item} />
          </Link>
        ))}{" "}
      </div>
    </>
  );
}
