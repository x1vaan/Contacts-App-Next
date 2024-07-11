import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <header className="flex items-center justify-end py-8 w-full px-8">
        <nav className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/sergio-ivan-garcia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a
            href="https://github.com/x1vaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </nav>
      </header>
      <div className="w-full h-full flex justify-center items-center pt-24">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="text-5xl text-center font-medium text-gray-50">
            Manage Your
            <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-100 via-slate-400 to-neutral-400 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
              Contacts Seamlessly
            </span>
          </h2>
          <p className="mt-6 text-center text-lg leading-6 text-gray-200">
            Your ultimate solution for efficient contact management. Simple,
            powerful, and intuitive.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-10 gap-4">
      <Link href="/login" className="flex justify-center item-center w-[30%] absolute">
        <Button className="bg-neutral-800 hover:text-customviolet">
          Start now <ArrowRight className="ml-2 h-4 w-4"/>
        </Button>
      </Link>
      </div>
    </div>
  );
}
