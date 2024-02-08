import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../public/hero-section2.jpg";

export default function Home() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center flex-col">
      <div className="fixed -z-1 w-[100vw] h-[100%]">
        <Image alt="Hero Section Contacts App" src={heroImage} layout="fill" objectFit="cover" style={{ filter: "blur(5px)" }} />
      </div>
      <h1 className="text-6xl text-violet-600 font-medium tracking-widest absolute top-[20%]">Contacts App</h1>
      <p className="text-3xl tracking-wide text-slate-200 absolute top-[35%] ">Save your contacts now!</p>
      <Link href="/login" className="flex justify-center item-center w-[30%] absolute">
        <Button className="w-full">Start Now</Button>
      </Link>
    </div>
  );
}
