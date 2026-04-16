"use server";

import { getMyToken } from "@/utilites";

export async function addtowishlist(producId: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("please login");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
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

export async function getWishlist() {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("please login");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      method: "GET",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data.data;
  } catch (err) {
    return err;
  }
}

export async function deleteWishlist(producId : string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("please login");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${producId}`, {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data.data;
  } catch (err) {
    return err;
  }
}