import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          email: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {},
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
