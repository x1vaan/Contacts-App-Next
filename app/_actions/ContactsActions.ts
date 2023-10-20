"use server";

import { JsonPlaceholder } from "@/types/types";

export async function getJson(): Promise<JsonPlaceholder[] | null> {
  try {
    const res = fetch("https://653173714d4c2e3f333d0605.mockapi.io/contacts", { cache: "no-store" });
    const data = (await res).json();
    return data;
  } catch (error:any) {
    throw new Error(error.message)
  }
}
