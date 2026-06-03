export default function Loading() {
  return (
    <div>
      {/* Page Header skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="h-8 w-56 bg-gray-200 rounded-lg animate-pulse mb-2" />
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Stats row skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex-1">
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-6 w-10 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      <div className="flex items-center gap-3 mb-5 text-sm text-gray-500">
        <svg
          className="w-4 h-4 animate-spin text-[#003366]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Carregando chamados...
      </div>

      {/* Ticket card skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 shadow-sm"
            style={{ opacity: 1 - i * 0.1 }}
          >
            {/* Title + badge */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-1.5 w-3/4" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              </div>
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse shrink-0" />
            </div>
            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <div className="h-3 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 bg-gray-100 rounded animate-pulse w-5/6" />
              <div className="h-3 bg-gray-100 rounded animate-pulse w-4/6" />
            </div>
            {/* Date */}
            <div className="h-3 w-28 bg-gray-100 rounded animate-pulse mt-auto pt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
