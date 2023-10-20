import { LucideIcon } from "lucide-react";

export interface SidebarLinksInterface {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface JsonPlaceholder {
  number: number;
  photo: string;
  bio: string;
  name: string;
  id: number;
}
