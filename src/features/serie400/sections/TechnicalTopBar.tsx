import Link from "next/link";

const navLinks = [
  { label: "Products", href: "/productos" },
  { label: "Technical Data", href: "/producto/serie-400", active: true },
  { label: "Certifications", href: "/producto/serie-400#certificaciones" },
  { label: "Contact", href: "/contacto" },
];

export default function TechnicalTopBar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b-0 bg-[#f9f9ff] bg-opacity-85 backdrop-blur-md flex justify-between items-center px-8 py-4">
      <Link
        href="/"
        className="text-xl font-black uppercase tracking-tighter text-[#001d28]"
      >
        NALVALV
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map(({ label, href, active }) => (
          <Link
            key={label}
            href={href}
            className={
              active
                ? "text-[#001d28] border-b-2 border-[#001d28] pb-1 tracking-tight uppercase text-xs font-bold"
                : "text-[#71787c] hover:text-[#001d28] transition-colors tracking-tight uppercase text-xs font-bold"
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      <button className="bg-[#003344] text-white px-6 py-2 uppercase text-xs font-bold tracking-widest hover:opacity-90 transition-opacity">
        Request Quote
      </button>
    </header>
  );
}
