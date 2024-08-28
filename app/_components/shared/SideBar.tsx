"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function SideBar() {
  const pathname = usePathname();
  const session = useSession();
  
  return (
    <nav className="w-72 bg-black h-full shadow-md shadow-current relative flex justify-center items-center left-0 top-0">
      <div className="w-[95%] h-full flex flex-col items-center text-textGray p-2">
        {/* USER INFO */}
        <div className="w-full flex justify-start items-center mt-8 space-x-3 pb-4 border-b border-[#282828]">
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarFallback className="text-gray-600">
              {session.data?.user.user.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="h-full flex flex-col items-start justify-center">
            <p className="font-semibold text-sm text-white">{session.data?.user.user}</p>
            <p className="text-xs text-[#B3B3B3]">{session.data?.user?.email}</p>
          </div>
        </div>
        {/* OPTIONS NAVIGATION */}
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-10">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`w-full h-10 rounded-md flex justify-start items-center gap-5 p-4 text-base transition-colors ease-linear duration-200 ${
                  pathname.includes(link.href)
                    ? "bg-selectedColor text-greenSpotify"
                    : "hover:text-white"
                }`}
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* LOGOUT BUTTON */}
        <div className="w-full h-full flex items-end justify-center">
          <Button
            className="w-full flex justify-start mb-3 bg-inherit text-textGray font-medium transition-colors ease-linear duration-200 hover:text-red-600"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut size={20} className="mr-2" /> Log out
          </Button>
        </div>
      </div>
    </nav>
  );
}
