import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export async function getMyToken() {
  const cookie = await cookies();

  const myToken = cookie.get("next-auth.session-token")?.value;
  const Tokendecode = await decode({
    token: myToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  const tokens = Tokendecode?.routetoken;


  return tokens
}
