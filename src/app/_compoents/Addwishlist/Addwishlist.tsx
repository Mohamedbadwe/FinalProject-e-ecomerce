import React from "react";
import WishlistBtn from "../wishlistBtn/WishlistBtn";
import { Button } from "@base-ui/react";
import { addtowishlist } from "@/action/wishlist.actions";

export default function Addwishlist({ id }: { id: string }) {



  return <WishlistBtn id={id} />;
}
