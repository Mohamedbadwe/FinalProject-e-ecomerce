import { Brands } from "@/Servies/routemisr.servies";
import React from "react";
import Link from "next/link";
import { Brand } from "../types/route.misr";
import CardBrand from "../_compoents/Brand/CardBrand";
import { TbBrandAppleFilled } from "react-icons/tb";

export default async function Page() {
  const brands: Brand[] = await Brands();

  return (
    <>
      <div className="bg-[linear-gradient(135deg,#7F22FE_0%,#8E51FF_50%,#C27AFF_100%)] h-60 flex items-center">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-[#FFFFFF33] backdrop-blur-sm p-2 rounded-[16px] ">

            <TbBrandAppleFilled size={40} />
            </div>

            <div>
              <h1 className="font-bold text-[36px] leading-10 tracking-[-0.9px]">
                Top Brands
              </h1>
              <p className="font-medium text-[16px] leading-6 mt-2">
                Shop from your favorite brands{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-[90%] mx-auto mt-10">
        {brands?.map((item) => (
          <Link href={`/brandDetails/${item._id}`} key={item._id}>
            <CardBrand brand={item} />
          </Link>
        ))}
      </div>
    </>
  );
}
