import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const Routes = ["/cart", "/wishlist", "/checkout", "/allorders"];
  const authRoutes = ["/login", "/signup"];

  const Mypath = req.nextUrl.pathname;

  const myToken = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });
  const userTokens = myToken?.routetoken;

  if (!userTokens && Routes.some((path) => Mypath.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (userTokens && authRoutes.some((path) => Mypath.startsWith(path))) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  return NextResponse.next();
}
