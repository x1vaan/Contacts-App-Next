"use server";

import { JsonPlaceholder } from "@/types/types";

export async function getJson(): Promise<JsonPlaceholder[] | null> {
  try {
    const res = fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
    const data = (await res).json();
    return data;
  } catch (error:any) {
    throw new Error(error.message)
  }
}
