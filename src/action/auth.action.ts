"use server"
import { LoginSchemaType, registerSchemaType } from "@/Schema/auth.Schems";

export async function userData(data : registerSchemaType) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      },
    );

    const result = await res.json();
    return res.ok
  } catch (err) {}
}


export async function LoginuserData(data : LoginSchemaType) {

}