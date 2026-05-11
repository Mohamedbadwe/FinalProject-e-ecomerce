"use server";

import { checkoutType } from "@/Schema/checkout.schem";
import { getMyToken } from "@/utilites";

export async function onlinePayment(
  ChekoutId: string,
  url: string = process.env.NEXTAUTH_URL!,
  valueform: checkoutType,
) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("please login");
  }
  try {
    const res = await fetch(
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
    const data = await res.json();
    console.log(data);
    return data;

  } catch (err) {
    console.log(err);
  }
  
}
// export async function gets(data , cleanProducts , cart) {
//   const res = await fetch(
//     "https://script.google.com/macros/s/AKfycbyQH5LlWRHMgMGaN8bEy85mWkj0RqdVA329xmHJDr9UwlsN8vI1buOSTKXuDdMr8pH2uA/exec",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: data.details, // أو أي field عندك
//         phone: data.phone,
//         city: data.city,
//         products: cleanProducts,
//         totalPrice: cart?.totalCartPrice,
//       }),
//     },
//   );

// const text = await res.text();
// console.log("API RESPONSsssssssssssssssssEثثثثثثثثثثثثثثثثثثثث:", text);
// }
