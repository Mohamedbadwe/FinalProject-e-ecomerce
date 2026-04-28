"use server";
import { getMyToken } from "@/utilites";

export async function addtocart(producId: string) {
  try {
    const token = await getMyToken();
    console.log("tokennnnnnnnnnnnnn", token);

    if (!token) {
      throw new Error("please login");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: producId }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
export async function getCart() {
  const token = await getMyToken();
  if (!token) {
    throw new Error("please login");
  }
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "GET",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function Updatacart(producId: string, count: number) {
  const token = await getMyToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${producId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: count }),
    },
  );

  const data = await res.json();
  return data;
}

export async function Removecart(producId: string) {
  const token = await getMyToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart/${producId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();
  return data;
}

export async function ClearAllcart() {
  const token = await getMyToken();

  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}
