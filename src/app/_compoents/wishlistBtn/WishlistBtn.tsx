"use client";

import { addtowishlist } from "@/action/wishlist.actions";
import { CiHeart } from "react-icons/ci";

export default function WishlistBtn({ id }: { id: string }) {
  async function addwishlist() {
    const res = await addtowishlist(id);
    console.log(res);
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addwishlist();
      }}
      className="p-2 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer"
    >
      <CiHeart />
    </button>
  );
}
