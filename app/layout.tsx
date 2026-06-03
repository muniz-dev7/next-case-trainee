import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sistema de Chamados TI | Meta Consultoria",
  description: "Dashboard interno para abertura e acompanhamento de tickets de suporte de TI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="min-h-screen bg-gray-50 antialiased" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {/* Header / Navbar */}
        <header className="bg-[#003366] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
            {/* Logo icon */}
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight">
                Meta Consultoria
              </span>
              <span className="text-white/50 mx-2 text-sm">|</span>
              <span className="text-white/80 text-sm font-medium">
                Suporte TI
              </span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-4 border-t border-gray-200">
          <p className="text-center text-xs text-gray-400">
            © 2026 Meta Consultoria — Sistema de Chamados de TI
          </p>
        </footer>
      </body>
    </html>
  );
}
