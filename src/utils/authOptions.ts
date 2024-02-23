import { sendRequest } from "@/src/utils/api";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NO_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await sendRequest<IBackendResponse<JWT>>({
          url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/auth/loginWithCredential`,
          method: "POST",
          body: {
            email: credentials?.username,
            password: credentials?.password,
          },
        });

        if (res) {
          // Any object returned will be saved in `user` property of the JWT
          return res.data as any;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, trigger, account, profile }) {
      if (trigger === "signIn" && account?.provider !== "credentials") {
        const res = await sendRequest<IBackendResponse<JWT>>({
          url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/auth/loginWithSocial`,
          method: "POST",
          body: {
            email: user.email,
            type: account?.provider?.toLocaleUpperCase(),
          },
        });
        if (res.data) {
          token.accessToken = res.data.accessToken;
          token.refreshToken = res.data.refreshToken;
          token.userInfo = res.data.userInfo;
        }
      }
      if (trigger === "signIn" && account?.provider === "credentials") {
        //@ts-ignore
        token.accessToken = user.accessToken;
        //@ts-ignore
        token.refreshToken = user.refreshToken;
        //@ts-ignore
        token.userInfo = user.userInfo;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.userInfo = token.userInfo;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },
};
