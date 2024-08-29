"use server";

import {
  UserRegister,
  bodyLoginUser,
  bodyUserRegister,
  Contacts,
  errorResponse,
  loginUser,
  CreatedContact,
  PostContact,
} from "@/types/types";

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
    const data: loginUser = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getContacts(id: number): Promise<Contacts[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/${id}/contacts`, {
      credentials: "include",
      cache: "no-store",
      method: "GET",
    });
    const data: Contacts[] = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function createContact(
  token: string,
  body: PostContact
): Promise<CreatedContact> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/contacts`, {
      credentials: "include",
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data: CreatedContact = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
