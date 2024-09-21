"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useEffect } from 'react';

export default function SideBar() {
  const pathname = usePathname();
  const session = useSession();

  useEffect(() => {
    const adjustHeight = () => {
      const sidebar = document.querySelector('nav');
      if (sidebar) {
        sidebar.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', adjustHeight);
    adjustHeight(); // Ajustar al cargar

    return () => window.removeEventListener('resize', adjustHeight);
  }, []);

  return (
    <nav className="w-72 bg-black h-screen shadow-md shadow-current relative flex justify-center items-center left-0 top-0">
      <div className="w-[95%] h-full flex flex-col items-center text-textGray p-2">
        {/* USER INFO */}
        <div className="w-full flex justify-start items-center mt-6 space-x-3 pb-4 border-b border-[#282828]">
          {/* ALTERNATIVA QUE QUEDA EPICA */}
          {/* <div className="w-full flex justify-start items-center mt-8 space-x-3 p-4 rounded-md bg-gradient-to-b from-customViolet via-customViolet/80 to-customViolet/50"> */}
          <Link href="/profile">
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarFallback className="text-gray-600">
                {session.data?.user?.name?.charAt(0) || ''}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="h-full flex flex-col items-start justify-center">
            <p className="font-semibold text-sm text-white">
              {session.data?.user?.user}
            </p>
            <p className="text-xs text-textGray">
              {session.data?.user?.email}
            </p>
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
