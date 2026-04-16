import { authoptions } from "@/next-auth/authoptions"
import NextAuth from "next-auth"

const handler = NextAuth(authoptions)

export { handler as GET, handler as POST }