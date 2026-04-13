const navLinks = [
  { label: "Productos", href: "#", active: true },
  { label: "Industrias", href: "#" },
  { label: "Nosotros", href: "#" },
  { label: "Contacto", href: "#" },
];

export default function ProductsTopBar() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 backdrop-blur-md bg-[#f9f9ff] dark:bg-[#001d28] z-50">
      <div className="text-2xl font-black tracking-tighter text-[#001d28] dark:text-white">
        NALVALV
      </div>

      <nav className="hidden md:flex gap-8 items-center font-bold tracking-tight">
        {navLinks.map(({ label, href, active }) => (
          <a
            key={label}
            href={href}
            className={
              active
                ? "text-[#001d28] dark:text-white border-b-2 border-[#003344] pb-1 cursor-pointer active:opacity-80 transition-colors duration-200"
                : "text-[#71787c] dark:text-[#c1c7cc] hover:text-[#003344] dark:hover:text-white cursor-pointer active:opacity-80 transition-colors duration-200"
            }
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container-low border border-outline/20 px-3 py-1.5">
          <span className="material-symbols-outlined text-outline text-sm mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none"
            placeholder="Buscar código o material..."
            type="text"
          />
        </div>
        <button className="bg-[#003344] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer active:opacity-80 transition-all">
          Solicitar Cotización
        </button>
      </div>
    </header>
  );
}
