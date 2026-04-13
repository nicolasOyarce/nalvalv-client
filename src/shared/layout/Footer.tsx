const navLinks = ["Productos", "Industrias", "Nosotros", "Contacto"];
const legalLinks = ["Políticas de Privacidad", "Términos de Servicio", "Certificaciones ISO"];

export default function Footer() {
  return (
    <footer className="bg-[#f1f3ff] dark:bg-[#001d28] w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full">
        {/* Brand */}
        <div className="space-y-6">
          <span className="text-xl font-black text-[#161c27] dark:text-white tracking-tighter uppercase">
            NALVALV
          </span>
          <p className="text-sm leading-relaxed text-[#71787c] dark:text-[#c1c7cc]">
            Líderes en soluciones técnicas para la conducción y control de
            fluidos en la minería e industria pesada chilena.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h5 className="text-sm font-black text-[#161c27] dark:text-white uppercase tracking-widest">
            Navegación
          </h5>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm leading-relaxed text-[#71787c] dark:text-[#c1c7cc] hover:text-[#003344] dark:hover:text-[#dde2f3] underline decoration-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h5 className="text-sm font-black text-[#161c27] dark:text-white uppercase tracking-widest">
            Legal
          </h5>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm leading-relaxed text-[#71787c] dark:text-[#c1c7cc] hover:text-[#003344] dark:hover:text-[#dde2f3] underline decoration-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5 className="text-sm font-black text-[#161c27] dark:text-white uppercase tracking-widest">
            Contacto Directo
          </h5>
          <p className="text-sm leading-relaxed text-[#71787c] dark:text-[#c1c7cc]">
            Av. Industrial 4500, Santiago.
            <br />
            Tel: +56 2 2345 6789
            <br />
            Email: contacto@nalvalv.cl
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#003344] cursor-pointer">
              share
            </span>
            <span className="material-symbols-outlined text-[#003344] cursor-pointer">
              location_on
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 border-t border-outline-variant/10">
        <p className="text-xs leading-relaxed text-[#71787c] dark:text-[#c1c7cc]">
          © 2024 NALVALV Chile. Todos los derechos reservados. Santiago, Chile.
        </p>
      </div>
    </footer>
  );
}
