"use client";
import { getCart } from "@/action/cart.actions";
import { cartProduct } from "@/app/cart/cart.type";
import { createContext, useEffect, useState , ReactNode } from "react";


export const CartContext = createContext({numberofcart : 0  ,setnumberofcart(num : number){} });

export default function CartContextProvider({ children } : {children : ReactNode}) {
  const [numberofcart, setnumberofcart] = useState(0);

  async function UserCartContext() {
    try {
      const res = await getCart();
      console.log("context cart", res.data.products);

      let sum = 0;

      res.data.products.forEach((product : cartProduct) => {
        sum += product.count;
      });
      setnumberofcart(sum);

    } catch (err : unknown) {
      if(err instanceof Error){
        console.log(err);
      }
      
    }
  }
  useEffect(() => {
    UserCartContext();
  }, []);

  return (
    <CartContext.Provider value={{ numberofcart, setnumberofcart }}>
      {children}
    </CartContext.Provider>
  );
}
