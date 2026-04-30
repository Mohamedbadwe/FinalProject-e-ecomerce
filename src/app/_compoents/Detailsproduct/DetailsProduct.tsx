"use client";
import React, { useState } from "react";
import AddBtn from "@/app/_compoents/AddBtn/AddBtn";
import Slider from "@/app/_compoents/Slider/Slider";
import { CiShare2 } from "react-icons/ci";
import Addwishlist from "../../_compoents/Addwishlist/Addwishlist";
import { Updatacart } from "@/action/cart.actions";
import { toast } from "sonner";
import Link from "next/link";
import { DetailsProductProps } from "@/app/types/route.misr";

export default function DetailsProduct({
  Product,
  stars,
  id,
}: DetailsProductProps) {
  const [count, setCount] = useState(1);

  async function updatacart(sign: string, id: string, count: number) {
    const res = await Updatacart(id, count);

    if (res.status === "success") {
      toast.success(res.message, {
        position: "top-center",
      });
    }

    if (sign === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className=" w-full bg-white  md:px-12 lg:px-24 py-10 flex flex-col lg:flex-row gap-15 mt-5">
        <Slider Product={Product} />

        <div className="w-full lg:w-1/1">
          <div>
            <div className="flex gap-2">
              <p className="text-green-600 font-semibold text-sm">
                {Product?.title}
              </p>
              <p className="text-green-600 font-semibold text-sm">
                {Product?.brand.name}
              </p>
            </div>
            <h1 className="text-3xl font-bold mt-1">Woman Shawl</h1>
            <div className="flex items-center gap-1 text-yellow-500 my-2">
              {stars}
              <span className="font-[Font_1] font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#4A5565]">
                {`${Product?.ratingsAverage}`} ({Product?.ratingsQuantity}{" "}
                review)
              </span>
            </div>
            <div className="flex items-center gap-4">
              {Product?.priceAfterDiscount ? (
                <>
                  <span className="text-[#16A34A] font-[Font_1] font-bold text-[18px] leading-7 tracking-[0] align-middle">
                    {Product?.priceAfterDiscount} EGP
                  </span>

                  <span className="font-[Font_1] font-bold text-[30px] leading-9 tracking-[0] align-middle text-gray-400 line-through">
                    {Product?.price} EGP
                  </span>
                </>
              ) : (
                <span className="font-[Font_1] font-bold text-[30px] leading-9 tracking-[0] align-middle text-gray-900">
                  {Product?.price} EGP
                </span>
              )}
            </div>
            <p className="text-green-600 font-semibold mt-2 bg-[#F0FDF4]  w-fit p-3 rounded-full">
              ● In Stock
            </p>
          </div>

          <div className="border-t my-6" />
          <div className="mt-6">
            <p className="font-semibold mb-2">Quantity</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    updatacart("-", Product.id, count);
                  }}
                  className="w-10 h-10 bg-gray-200 rounded-lg cursor-pointer disabled:bg-black-400 disabled:cursor-not-allowed"
                >
                  -
                </button>

                {count}

                <button
                  onClick={() => updatacart("+", Product.id, count)}
                  className="w-10 h-10 bg-green-500 text-white rounded-lg cursor-pointer disabled:bg-black-400 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>

              <p className="text-gray-500">220 available</p>
            </div>
          </div>

          <div className="border-t my-6" />

          <div className="flex justify-between bg-[#F9FAFB] p-4 text-xl font-semibold mb-6">
            <p className="font-[Font_1] font-medium text-[16px] leading-6 tracking-[0] align-middle text-[#4A5565]">
              Total Price:
            </p>
            <p className="font-[Font_1] font-bold text-[30px] leading-9 tracking-[0] align-middle text-[#16A34A]">
              {count * Product?.price} EGP
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <AddBtn
              id={id}
              classes="w-full bg-green-600 cursor-pointer text-white py-3 rounded-lg font-semibold"
              word="🛒 Add to Cart"
            />

            <button className="w-full bg-[#111827] cursor-pointer text-white py-3 rounded-lg font-semibold">
              <Link href="/checkout">buy</Link>
            </button>
          </div>
          <div className="flex gap-2  items-center  ">
            <Addwishlist
              id={Product.id}
              classes="bg-[#E5E7EB] cursor-pointer w-full mt-4 flex justify-center items-center py-3 px-4 "
              word="Add to Wishlist"
            />
            <button className=" bg-[#E5E7EB] cursor-pointer pt-3.75 pr-4 pb-4.25 ps-4   ">
              <CiShare2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
