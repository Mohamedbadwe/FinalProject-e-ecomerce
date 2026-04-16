import { Brand } from "@/app/types/route.misr";
// import { Brands } from "@/Servies/routemisr.servies";
import Image from "next/image";
import React from "react";

export default async function CardBrand({brand} : {brand : Brand}) {
  // const brand: Brand = await Brands();
  // console.log(brand);

  return (
    <>
      <div className="bg-white  p-3 shadow-[#0000001A] border hover:shadow-2xl transition-all">
        <div className=" flex flex-col justify-center items-center gap-2">

          <Image
            src={brand.image}
            alt={brand.name}
            width={80}
            height={80}
            className=" rounded-full size-30 "
          />
          <h1 className="font-[Font_1] font-mediumtext-[16px] leading-normal  tracking-[0] text-center align-middle text-black">
            {brand.name}
          </h1>
        </div>
      </div>
    </>
  );
}
