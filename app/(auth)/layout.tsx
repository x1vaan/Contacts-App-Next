import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-screen h-screen justify-center items-center flex absolute">
      {children}
    </section>
  );
}
