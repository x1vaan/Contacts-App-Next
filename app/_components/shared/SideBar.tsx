"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <section className="w-72 bg-white h-full shadow-md shadow-current relative flex justify-center items-center left-0 top-0">
      <div className="w-[90%] h-full flex flex-col items-center text-gray-600">
        <div className="w-full flex justify-start items-center mt-8 gap-4 pb-4 border-b-gray-600 border-b-[1px]">
          <Avatar className="ml-2 w-12 h-12">
            <AvatarFallback className="bg-gray-200">IG</AvatarFallback>
          </Avatar>
          <div className="h-full flex items-end">
            <h2 className="text-xl 2xl:text-2xl xl:text-2xl lg:text-2xl tracking-tighter font-light">Ivan Garcia</h2>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-2 mt-10">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`w-full h-10 rounded-md flex justify-start items-center gap-5 p-4 py-6 text-base font-medium focus:bg-purple-200 transition-colors ${
                  pathname.includes(link.href) ? "bg-gradient-to-tr from-purple-200 to-purple-100 text-purple-600" : "hover:bg-purple-100"
                }`}
              >
                <Icon className={`${pathname.includes(link.href) ? "text-purple-600" : ""}`} size={20} />
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="w-full h-full flex items-end justify-center">
          <Button className="w-full flex justify-start mb-3 bg-inherit text-gray-600 hover:bg-purple-200 text-base font-semibold active:bg-purple-300"><LogOut size={20} className="mr-2"/> Log out</Button>
        </div>
      </div>
    </section>
  );
}
