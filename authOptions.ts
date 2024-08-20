import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials) return null;

        const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        if (user.user) {
          return user;
        }
        return null;
      },
    }),
  ],
  strategy: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      return { ...token, ...user };
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/home",
    error: "/login",
    signOut: '/login'
  },
};

export default authOptions;
