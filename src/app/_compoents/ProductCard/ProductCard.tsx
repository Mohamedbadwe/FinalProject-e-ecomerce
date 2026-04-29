"use client";
import Image from "next/image";
import { FiRefreshCw } from "react-icons/fi";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CategoryType, ProductType } from "@/app/types/route.misr";
import { IoEyeSharp } from "react-icons/io5";
import AddBtn from "../AddBtn/AddBtn";
import Addwishlist from "../Addwishlist/Addwishlist";
import { Button } from "@base-ui/react";
import { CiHeart } from "react-icons/ci";

export default function ProductCard({ product }: { product: ProductType  } ) {
  const rating = product?.ratingsAverage || 0;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return <FaStar key={i} className="text-yellow-400" />;
    else if (rating >= i + 0.5)
      return <FaStarHalfAlt key={i} className="text-yellow-400" />;
    else return <FaRegStar key={i} className="text-yellow-400" />;
  });
  return (
    <div className="border rounded-2xl p-4 shadow-lg hover:shadow-md transition relative bg-white min-h-104.5 flex flex-col ">
      <div className="absolute top-3 right-1 flex flex-col gap-2 text-xl text-gray-600 z-20">
        
        <Addwishlist id={product.id} classes="p-2 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer focus:text-red-500 " word={<CiHeart />} />
        <Button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer">
          <FiRefreshCw />
        </Button>
        <Button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer">
          <IoEyeSharp />
        </Button>
      </div>

      <div className="w-full flex items-center justify-center relative     ">
        <Image
          src={product.imageCover}
          alt="Woman Shawl"
          width={273.2}
          height={240}
          className="object-cover h-60 z-0 "
        />
        {product.priceAfterDiscount && (
          <p className="absolute top-0 left-0 bg-red-600 text-white p-1 rounded-4xl font-bold">
            {(
              ((product.price - product.priceAfterDiscount) / product.price) *
              100
            ).toFixed(2)}
            %
          </p>
        )}
      </div>
      <div className="grow">
        <p className="font-[Font_1] font-medium text-[12px] my-2 text-[#6A7282] leading-4 tracking-[0] align-middle">
          {product.category.name}
        </p>

        <h3 className="font-[Font_1] font-medium text-[16px] leading-6 tracking-[0] align-middle text-[#364153] line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mt-1">
          <div className="flex text-yellow-400">{stars}</div>

          <span className="text-gray-600 ml-1 text-sm">
            {product.ratingsAverage} {`(${product.ratingsQuantity})`}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-[#16A34A] font-[Font_1] font-bold text-[18px] leading-7 tracking-[0] align-middle">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="font-[Font_1] font-medium text-[14px] leading-5 tracking-[0] align-middle line-through">
                  {product.price} EGP
                </span>
              </>
            ) : (
              <span className="font-['Font_1'] font-bold text-[18px] leading-7 tracking-[0] align-middle">
                {product.price}EGP
              </span>
            )}{" "}
          </div>
          <div>
            <AddBtn
              id={product.id}
              classes="p-3 bg-green-500 rounded-full text-white text-lg hover:bg-green-600 transition cursor-pointer"
              word={<FaPlus />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
