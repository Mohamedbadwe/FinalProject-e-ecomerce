"use client";
import { ProductType } from "@/app/types/route.misr";
import React, { useState } from "react";

export default function Slider({
  Product,
}: {
  Product: ProductType;
}){
  const [mainimg, setmainimg] = useState(Product.imageCover);

  return (
    <>
      <div className="w-full lg:w-1/4 flex flex-col items-center">
        <div className="w-full bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={mainimg}
            alt={Product?.title}
            width={344}
            height={469.8}
            className="w-full object-cover"
          />
        </div>
        <div className="flex mt-3.5">
          {Product?.images.map((src) => {
            return (
              <div key={src} className="flex w-1/2 cursor-pointer ">
                <img
                  src={src}
                  alt={src}
                  className="w-full"
                  onClick={() => setmainimg(src)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
