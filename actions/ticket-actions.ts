"use server";

import { revalidatePath } from "next/cache";
import { saveTicket } from "@/lib/storage";
import { Ticket } from "@/types/ticket";

export async function createTicket(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title?.trim() || !description?.trim()) {
    throw new Error("Título e descrição são obrigatórios.");
  }

  const newTicket: Ticket = {
    id: Date.now().toString(),
    title: title.trim(),
    description: description.trim(),
    status: "Aberto",
    createdAt: new Date().toISOString(),
  };

  await saveTicket(newTicket);

  // Revalidate the page cache so the new ticket appears without a manual refresh
  revalidatePath("/");
}
