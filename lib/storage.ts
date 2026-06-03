import fs from "fs/promises";
import path from "path";
import { Ticket } from "@/types/ticket";

const DATA_FILE = path.join(process.cwd(), "data", "tickets.json");

// Simulated network delay (2 seconds minimum as required)
const FAKE_DELAY_MS = 2000;

export async function getTickets(): Promise<Ticket[]> {
  // Simulate server latency as required by the spec
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS));

  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileContent) as Ticket[];
  } catch (error) {
    // If the file doesn't exist yet, return empty array
    console.error("Error reading tickets file:", error);
    return [];
  }
}

export async function saveTicket(ticket: Ticket): Promise<void> {
  const tickets = await getTicketsWithoutDelay();
  tickets.push(ticket);
  await fs.writeFile(DATA_FILE, JSON.stringify(tickets, null, 2), "utf-8");
}

// Internal helper — no delay, used for writes
async function getTicketsWithoutDelay(): Promise<Ticket[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileContent) as Ticket[];
  } catch {
    return [];
  }
}
