import { LucideIcon } from "lucide-react";

export interface SidebarLinksInterface {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface JsonPlaceholder {
  number: number;
  photo: string;
  name: string;
  email: string;
  id: number;
}

export interface UserRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  profile_photo: string;
  id: number;
  created_at: number;
}

export interface bodyUserRegister {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface errorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export interface bodyLoginUser {
  email: string;
  password: string;
}

export interface loginUser {
  user: string;
  token: string;
}

export interface Contacts {
  id: number;
  name: string;
  number: number;
  email: string;
  profile_photo: string;
  created_at?: string;
}
