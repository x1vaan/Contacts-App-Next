"use server";

import {
  UserRegisterResponse,
  BodyUserRegister,
  Contacts,
  LoginUserResponse,
  CreatedContactResponse,
  PostContact,
} from "@/types/types";

export async function register(
  body: BodyUserRegister
): Promise<UserRegisterResponse> {
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

export async function login(body: {
  email: string;
  password: string;
}): Promise<LoginUserResponse> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      credentials: "include",
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data: LoginUserResponse = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getContacts(
  id: number,
  token: string
): Promise<Contacts[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/${id}/contacts`, {
      credentials: "include",
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Contacts[] = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getContact(
  id: number,
  token: string
): Promise<Contacts> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/contacts/${id}`, {
      credentials: "include",
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Contacts = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function createContact(
  token: string,
  body: PostContact
): Promise<CreatedContactResponse> {
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
    const data: CreatedContactResponse = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteContact(id: number, token: string) {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/contacts/${id}`, {
      credentials: "include",
      cache: "no-store",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
