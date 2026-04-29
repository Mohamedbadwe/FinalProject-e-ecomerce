"use client";
import {
  deleteWishlist,
  getWishlist as getWishlistAPI,
} from "@/action/wishlist.actions";

import { ProductType } from "../types/route.misr";
import AddBtn from "../_compoents/AddBtn/AddBtn";
import { FaLongArrowAltRight, FaPlus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
export default function Page() {
  const [wishlist, setWishlist] = useState<ProductType[]>([]);
  async function fetchWishlist() {
    const res = await getWishlistAPI();
    console.log(res);
    setWishlist(res || []);
  }

  async function removewish(id: string) {
    const res = await deleteWishlist(id);
    console.log(res);

    toast.success("🗑️ Item removed from your wishlist successfully!", {
      position: "top-center",
    });
    fetchWishlist();
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <>
      {!wishlist || wishlist.length === 0 ? (
        <div className="h-screen flex justify-center items-center mx-auto text-center ">
          <div>
            <div className="size-20.25 bg-gray-400 flex justify-center items-center mx-auto rounded-3xl">
              <CiHeart className="size-15" />
            </div>

            <h4 className="text-4xl text-black py-3">Your wishlist is empty</h4>

            <p className="max-w-100">
              Browse products and save your favorites here. Sign in to sync your
              wishlist across devices.
            </p>

            <div className="flex flex-col mx-auto text-center mt-3">
              <button className="bg-green-500 rounded-2xl text-white text-2xl ">
                <Link
                  href="/"
                  className="flex items-center justify-center py-3 gap-2"
                >
                  <p>Browse Product</p>
                  <FaLongArrowAltRight />
                </Link>
              </button>

              <button className="rounded-2xl text-black border my-4 text-2xl ">
                <Link
                  href="/login"
                  className="flex items-center justify-center py-3 gap-2"
                >
                  <p>signup</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-3 w-[90%] mx-auto ">
          {wishlist.map((wish, index) => (
            <div
              key={wish._id || index}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border">
                  <img
                    src={wish.imageCover}
                    alt={wish.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {wish.title}
                  </h3>
                  <p className="text-xs text-gray-500">{wish.category?.name}</p>
                </div>
              </div>

              <div className="font-semibold text-gray-900">
                {wish.price} EGP
              </div>

              <div className="flex items-center gap-10">
                <AddBtn
                  id={wish._id}
                  classes="p-3 bg-green-500 rounded-full text-white text-lg hover:bg-green-600 transition"
                  word={<FaPlus />}
                />

                <button
                  className="bg-red-400 p-3 cursor-pointer"
                  onClick={() => removewish(wish._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
