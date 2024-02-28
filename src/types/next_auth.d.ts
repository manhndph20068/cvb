import NextAuth, { DefaultSession } from "next-auth";

interface IUser {
  id: number;
  username: string | null;
  email: string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  refreshToken: string | null;
  isVerified: number;
  type: string;
  role: string;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    refreshToken: string;
    userInfo: IUser;
  }
}
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    refreshToken: string;
    userInfo: IUser;
  }
}
