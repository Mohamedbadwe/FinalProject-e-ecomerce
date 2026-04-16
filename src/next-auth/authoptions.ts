import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { jwtDecode } from "jwt-decode";

export const authoptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "MyLogin",
      credentials: {
        email: { Label: "email", type: "email", placeholder: "enter email" },
        password: {
          Label: "password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: { "content-type": "application/json" },
            },
          );

          const result = await res.json();
          console.log("result login", result);
          const jwtToken: { id: string } = jwtDecode(result.token);
          // console.log(jwtToken);

          if (!res.ok) {
            throw new Error(result.message);
          }
          return {
            id: jwtToken.id,
            name: result.user.name,
            email: result.user.email,
            accses: result.token,
          };
        } catch (err) {
          console.log(err);
          throw new Error((err as Error).message);
        }
      },
    }),
  ],

  callbacks: {
jwt(param) {
  if (param.user) {
    param.token.routetoken = param.user.accses;
    param.token.userId = param.user.id;
  }

  // console.log("JWT:", param);

  return param.token;
},



    session({session , token}){
      
     session.id = token.userId;
      
      // console.log("paramssssssssssssss");
      return session;
    },
  },
  pages: { signIn: "/login" },
};
