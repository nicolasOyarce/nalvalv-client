"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Industrias", href: "/industrias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 py-4 backdrop-blur-md bg-[#f9f9ff] dark:bg-[#001d28]">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-[#001d28] dark:text-white uppercase"
        >
          NALVALV
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-bold tracking-tight">
          {navLinks.map(({ label, href }) => {
            const active = href !== "#" && pathname === href;

            return active ? (
              <Link
                key={label}
                href={href}
                className="text-[#001d28] dark:text-white border-b-2 border-[#003344] pb-1 text-xs uppercase"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-[#71787c] dark:text-[#c1c7cc] hover:text-[#003344] dark:hover:text-white text-xs uppercase transition-colors duration-200"
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container-low border border-outline/20 px-3 py-1.5">
          <span className="material-symbols-outlined text-outline text-sm mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none"
            placeholder="Buscar codigo o material..."
            type="text"
          />
        </div>
        <Link
          href="/contacto"
          className="bg-[#003344] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest active:opacity-80 transition-all"
        >
          Solicitar Cotizacion
        </Link>
      </div>
    </header>
  );
}
