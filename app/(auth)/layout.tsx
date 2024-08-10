import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full justify-center items-center flex absolute">
      <article className="w-[85%] xl:w-[30rem] md:w-[30rem] sm:w-[30rem] h-auto bg-white shadow-2xl flex flex-col items-center rounded">
        {children}
      </article>
    </section>
  );
}
