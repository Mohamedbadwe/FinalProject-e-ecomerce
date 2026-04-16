"use server";

import { checkoutType } from "@/Schema/checkout.schem";
import { getMyToken } from "@/utilites";

export async function onlinePayment(
  ChekoutId: string,
  url: string = process.env.NEXTAUTH_URL!,
  valueform: checkoutType,
) {
  const token = await getMyToken();
  // console.log("tokennnnnnnnnnn",token);

  if (!token) {
    throw new Error("please login");
  }
  try {
    const res =await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${ChekoutId}?url=${url}`,
      {
        method: "POST",
        headers: {
          token: token,
          "content-type": "application/json",
        },
        body: JSON.stringify({ shippingAddress: valueform }),
      },
    );
    const data = await res.json()
    return data

  } catch (err) {
    console.log(err);
  }
}
