import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DG-MEC Logistics | Especialistas em Cargas Perigosas", // [cite: 7, 8]
  description: "Operador Logístico Internacional Especializado em Cargas Perigosas (DG) e fluxo Espanha-Brasil.", // [cite: 8, 11]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-50 text-slate-800 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}