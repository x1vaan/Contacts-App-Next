"use server";

import { JsonPlaceholder, UserRegister, bodyLoginUser, bodyUserRegister, contacts, errorResponse, loginUser } from "@/types/types";

export async function getJson(): Promise<JsonPlaceholder[] | null> {
  try {
    const res = await fetch("https://653173714d4c2e3f333d0605.mockapi.io/contacts", { cache: "no-store" });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function register(body: bodyUserRegister): Promise<UserRegister> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function login(body: bodyLoginUser): Promise<loginUser> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      credentials: "include",
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getContacts(id: number): Promise<contacts[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/${id}/contacts`, {
      credentials: "include",
      cache: "no-store",
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error : any) {
    throw new Error(error.message);
  }
}
