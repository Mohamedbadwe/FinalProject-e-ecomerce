"use client";

import { addtowishlist } from "@/action/wishlist.actions";
import { Button } from "@base-ui/react";
import React, { useContext } from "react";
import { toast } from "sonner";

export default function AddBtn({
  classes,
  word,
  id,
}: {
  classes: string;
  word: React.ReactNode;
  id: string;
}) {

  async function addwishlist() {
    const res = await addtowishlist(id);

    if (res.status === "success") {
      toast.success(res.message, { position: "top-center" });
      // setnumberofcart(numberofcart + 1);
    } else {
      toast.error(res.message, {
        position: "top-center",
      });
    }
  }
 if(!id)return <><p>not login</p></>
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        addwishlist();
      }}
      className={classes}
    >
      {word}
    </Button>
  );
}
