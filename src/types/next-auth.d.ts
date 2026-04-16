import NextAuth from "next-auth";
import { string } from "zod";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
    };
    expires: string;
    id: string;
  }
  interface User {
    id: string;
    name: string;
    email: string;
    accses: string;
  }
}



declare module "next-auth/jwt" {



  interface JWT {

    routetoken : string,
    userId : string
  }
}
