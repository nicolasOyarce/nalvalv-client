import type { Metadata } from "next";
import { Footer, Navbar } from "@/shared/layout";
import { Sidebar } from "@/features/productos/sections";

export const metadata: Metadata = {
  title: "Catálogo Industrial - NALVALV",
  description:
    "Sistemas de control de fluidos de alta precisión para aplicaciones críticas en minería, petróleo y procesos químicos.",
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-8 min-h-screen bg-surface">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
