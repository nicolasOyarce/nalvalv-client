const productLines = [
  "Válvulas Industriales",
  "Mangueras de Alta Presión",
  "Sistemas de Filtración",
  "Compuestos Abrasivos",
];

const companyLinks = [
  "Nuestra Trayectoria",
  "Certificaciones ISO",
  "Proyectos de Ingeniería",
  "Portal de Proveedores",
];

const contactItems = [
  { icon: "call", text: "+56 2 2456 7890" },
  { icon: "mail", text: "ingenieria@nalvalv.com" },
  { icon: "location_on", text: "Santiago, Chile" },
];

export default function ProductsFooter() {
  return (
    <footer className="bg-primary text-white py-16 px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="text-2xl font-black tracking-tighter mb-6 text-white">
            NALVALV
          </div>
          <p className="text-on-primary-container text-xs leading-relaxed">
            Excelencia en control de fluidos para la industria pesada.
            Ingeniería aplicada y distribución autorizada.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-on-primary-container">
            Líneas de Producto
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            {productLines.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary-fixed transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-on-primary-container">
            Compañía
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            {companyLinks.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary-fixed transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-on-primary-container">
            Contacto Técnico
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            {contactItems.map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-medium text-on-primary-container">
        <p>© 2024 NALVALV INDUSTRIAL. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">PRIVACIDAD</a>
          <a href="#" className="hover:text-white transition-colors">TÉRMINOS TÉCNICOS</a>
        </div>
      </div>
    </footer>
  );
}
