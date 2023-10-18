import { LucideIcon } from "lucide-react";

export interface SidebarLinksInterface {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface JsonPlaceholder {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ContactsProps {
  id: number;
  title: string;
  body: string;
}
