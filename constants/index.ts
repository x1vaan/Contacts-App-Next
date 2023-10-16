import { SidebarLinksInterface } from "@/types/types";
import { Home, UserPlus, UserCircle } from "lucide-react";

export const sidebarLinks: SidebarLinksInterface[] = [
  {
    href: "/home",
    label: "Home",
    icon: Home,
  },
  {
    href: "/create",
    label: "Create Contact",
    icon: UserPlus,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: UserCircle,
  },
];
