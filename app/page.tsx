import { getTickets } from "@/lib/storage";
import TicketCard from "@/components/TicketCard";
import NewTicketForm from "@/components/NewTicketForm";
import { Ticket } from "@/types/ticket";

// Async Server Component — no useEffect allowed per non-functional requirements
export default async function HomePage() {
  const tickets: Ticket[] = await getTickets();

  const totalAberto = tickets.filter((t) => t.status === "Aberto").length;
  const totalEmAndamento = tickets.filter(
    (t) => t.status === "Em Andamento"
  ).length;
  const totalResolvido = tickets.filter((t) => t.status === "Resolvido").length;

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Central de Chamados
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {tickets.length === 0
              ? "Nenhum chamado registrado."
              : `${tickets.length} chamado${tickets.length !== 1 ? "s" : ""} registrado${tickets.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <NewTicketForm />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Abertos"
          count={totalAberto}
          color="text-red-600"
          bg="bg-red-50"
          borderColor="border-red-200"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Em Andamento"
          count={totalEmAndamento}
          color="text-yellow-600"
          bg="bg-yellow-50"
          borderColor="border-yellow-200"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Resolvidos"
          count={totalResolvido}
          color="text-green-600"
          bg="bg-green-50"
          borderColor="border-green-200"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Ticket List */}
      {tickets.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-700 mb-1">
            Nenhum chamado encontrado
          </h3>
          <p className="text-sm text-gray-400">
            Clique em &ldquo;Novo Chamado&rdquo; para abrir o primeiro ticket.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
}

// Internal helper component for stat cards
function StatCard({
  label,
  count,
  color,
  bg,
  borderColor,
  icon,
}: {
  label: string;
  count: number;
  color: string;
  bg: string;
  borderColor: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
      <div className={`w-10 h-10 ${bg} border ${borderColor} rounded-lg flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          {label}
        </p>
        <p className={`text-2xl font-bold ${color}`}>{count}</p>
      </div>
    </div>
  );
}
