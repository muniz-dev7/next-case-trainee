import { Ticket } from "@/types/ticket";

const statusConfig: Record<
  Ticket["status"],
  { label: string; className: string; dot: string }
> = {
  Aberto: {
    label: "Aberto",
    className: "bg-red-100 text-red-700 border border-red-200",
    dot: "bg-red-500",
  },
  "Em Andamento": {
    label: "Em Andamento",
    className: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    dot: "bg-yellow-500",
  },
  Resolvido: {
    label: "Resolvido",
    className: "bg-green-100 text-green-700 border border-green-200",
    dot: "bg-green-500",
  },
};

interface TicketCardProps {
  ticket: Ticket;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  const config = statusConfig[ticket.status];
  const date = new Date(ticket.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-800 text-base leading-snug">
          {ticket.title}
        </h3>
        <span
          className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${config.className}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
          {config.label}
        </span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
        {ticket.description}
      </p>

      <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-auto pt-1 border-t border-gray-100">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {date}
      </div>
    </div>
  );
}
