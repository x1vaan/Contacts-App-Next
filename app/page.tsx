import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-6xl text-violet-600 font-medium tracking-widest absolute top-[20%]">Contacts App</h1>
      <p className="text-3xl tracking-wide text-slate-200 absolute top-[35%] ">Save your contacts now!</p>
      <Link href="/login" className="flex justify-center item-center w-full">
        <Button className="w-[30%]">Start Now</Button>
      </Link>
    </div>
  );
}
