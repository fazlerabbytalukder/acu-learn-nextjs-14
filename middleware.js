import NextAuth from "next-auth";
import { authConfig } from "./auth.confiq";

const { auth } = NextAuth(authConfig);

export default auth((req) => {

})