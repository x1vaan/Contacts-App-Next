import { LucideIcon } from "lucide-react";

export interface SidebarLinksInterface {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface UserRegisterResponse {
  name: string;
  username: string;
  email: string;
  password: string;
  profile_photo: string;
  id: number;
  created_at: number;
}

export interface BodyUserRegister {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginUserResponse {
  user: string;
  id: number;
  email: string;
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

export interface CreatedContactResponse {
  id: number;
  user: number;
  name: string;
  number: number;
  email: string;
  profile_photo: string | null;
  created_at?: string;
}

export interface PostContact {
  name: string;
  number: number;
  email: string;
  profile_photo?: string | null;
}

export interface DeletedContactResponse {
  
}