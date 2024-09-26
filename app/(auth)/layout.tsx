import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <section className="w-screen h-screen justify-center items-center flex absolute">
      {children}
    </section>
  );
}
