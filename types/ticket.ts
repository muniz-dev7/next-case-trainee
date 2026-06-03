export type TicketStatus = "Aberto" | "Em Andamento" | "Resolvido";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
}
