import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full justify-center items-center flex absolute">
      {children}
    </section>
  );
}
