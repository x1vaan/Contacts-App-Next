"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarLinks } from "@/constants";

import Link from "next/link";

export default function SideBar() {

  return (
    <section className="w-72 bg-white h-full shadow-lg shadow-current relative flex justify-center items-center">
      <div className="w-[90%] h-full flex flex-col items-center text-zinc-900">
        <div className="w-full flex justify-start items-center mt-8 gap-4 pb-4 border-b-white border-b-[1px]">
          <Avatar className="ml-2 w-12 h-12">
            <AvatarFallback className="bg-gray-200 opacity-100">IG</AvatarFallback>
          </Avatar>
          <div className="h-full flex items-end">
            <h2 className="text-2xl text-zinc-900 tracking-tighter">Ivan Garcia</h2>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-4 mt-10">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link href={link.href} key={link.label} className="w-full h-10 rounded-md flex justify-start items-center gap-5 hover:bg-purple-100 p-4 ">
                <Icon className="text-purple-600"/>
                <p className="text-lg text-zinc-900 font-normal">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
