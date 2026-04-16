import { getAllCategory } from "@/Servies/routemisr.servies";
import { CategoryType } from "@/app/types/route.misr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrLinkNext } from "react-icons/gr";

export default async function HomeCategory() {
  const Category = await getAllCategory();
  //   console.log(Category);

  return (
    <>
      <div className="mt-1 w-[90%] mx-auto ">
        <div className="flex justify-between items-center h-25">
          <h1 className="font-[Font_1] font-bold text-[30px] leading-9 tracking-[0] align-middle border-s-8  ps-2 border-[#009966]">
            Shop By <span className="text-[#009966]">Category</span>
          </h1>
          <Link href={`/categories`} className=" cursor-pointer font-[Font_1] text-[#16A34A] font-medium text-[16px] leading-5 tracking-[0] align-middle flex  items-center gap-2">
            View All Categories <GrLinkNext className="text-[20px]" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-3.5 py-4">
          {Category?.map((card) => {
            return (
              <Link href={`/categorydetails/${card._id}`} key={card._id}>
                <div className="bg-white rounded-[8px] p-3 shadow-[#0000001A] border hover:shadow-2xl transition-all">
                  <div className="w-full flex flex-col justify-center items-center gap-2">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={80}
                      height={80}
                      className=" rounded-full size-20 "
                    />
                    <h1 className="font-[Font_1] font-mediumtext-[16px] leading-normal  tracking-[0] text-center align-middle text-[#364153]">
                      {card.name}
                    </h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

//
