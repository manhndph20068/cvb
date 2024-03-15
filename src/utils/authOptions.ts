import { sendRequest } from "@/src/utils/api";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dayjs from "dayjs";

async function refreshAccessToken(token: JWT) {
  const res = await sendRequest<IBackendResponse<JWT>>({
    url: `${process.env.NEXTAUTH_URL_INTERNAL}/api-be/v1/auth/refreshToken`,
    method: "POST",
    body: { token: token?.refreshToken, type: token?.type },
  });
  console.log(">>> refresh token", res);
  if (res.data) {
    return {
      ...token,
      accessToken: res.data?.accessToken ?? "",
      refreshToken: res.data?.refreshToken ?? "",
      userInfo: res.data?.userInfo ?? {},
      accessExpire: dayjs(new Date())
        .add(
          +(process.env.TOKEN_EXPIRE_NUMBER as string),
          process.env.TOKEN_EXPIRE_UNIT as any
        )
        .unix(),
      error: "",
    };
  } else {
    //failed to refresh token => do nothing
    return {
      ...token,
      error: "RefreshAccessTokenError", // This is used in the front-end, and if present, we can force a re-login, or similar
    };
  }
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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
          url: `${process.env.NEXTAUTH_URL_INTERNAL}/api-be/v1/auth/loginWithCredential`,
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
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, trigger, account, profile }) {
      if (trigger === "signIn" && account?.provider !== "credentials") {
        console.log(
          ">>> loginWithSocial",
          `${process.env.NEXTAUTH_URL_INTERNAL}/api-be/v1/auth/loginWithSocial`
        );
        const res = await sendRequest<IBackendResponse<JWT>>({
          url: `${process.env.NEXTAUTH_URL_INTERNAL}/api-be/v1/auth/loginWithSocial`,
          method: "POST",
          useCredentials: true,
          body: {
            email: user.email,
            type: account?.provider?.toLocaleUpperCase(),
          },
        });
        console.log(">>> loginWithSocial", res);
        if (res.data) {
          token.accessToken = res.data.accessToken;
          token.refreshToken = res.data.refreshToken;
          token.userInfo = res.data.userInfo;
          token.type = account?.provider?.toLocaleUpperCase()!;
          token.accessExpire = dayjs(new Date())
            .add(
              +(process.env.TOKEN_EXPIRE_NUMBER as string),
              process.env.TOKEN_EXPIRE_UNIT as any
            )
            .unix();
        }
      }
      if (trigger === "signIn" && account?.provider === "credentials") {
        //@ts-ignore
        token.accessToken = user.accessToken;
        //@ts-ignore
        token.refreshToken = user.refreshToken;
        //@ts-ignore
        token.userInfo = user.userInfo;
        //@ts-ignore
        token.type = account?.provider?.toLocaleUpperCase()!;
        //@ts-ignore
        token.accessExpire = dayjs(new Date())
          .add(
            +(process.env.TOKEN_EXPIRE_NUMBER as string),
            process.env.TOKEN_EXPIRE_UNIT as any
          )
          .unix();
      }

      const isTimeAfter = dayjs(dayjs(new Date())).isAfter(
        dayjs.unix((token?.accessExpire as number) ?? 0)
      );

      if (isTimeAfter) {
        return refreshAccessToken(token);
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
  },
};
