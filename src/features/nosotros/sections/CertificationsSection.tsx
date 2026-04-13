const standards = [
  { icon: "manufacturing", label: "ASTM Standards" },
  { icon: "fluid_balance", label: "Pressure Testing" },
  { icon: "verified", label: "Cert. de Origen" },
  { icon: "settings_suggest", label: "Mantenimiento" },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-surface-dim">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-8 uppercase">
              Certificaciones y Estandares
            </h2>
            <p className="text-lg text-on-surface mb-8">
              Nuestra operacion esta alineada con los mas altos estandares
              globales de gestion y fabricacion, garantizando que cada valvula
              entregada cumpla con las normativas internacionales de seguridad y
              rendimiento.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface p-6 border-l-4 border-primary">
                <h5 className="text-sm font-bold text-primary mb-1 tracking-widest uppercase">
                  Calidad
                </h5>
                <p className="font-black text-xl">ISO 9001:2015</p>
              </div>
              <div className="bg-surface p-6 border-l-4 border-primary">
                <h5 className="text-sm font-bold text-primary mb-1 tracking-widest uppercase">
                  Normativa
                </h5>
                <p className="font-black text-xl">ANSI / API / DIN</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-outline-variant">
            {standards.map(({ icon, label }) => (
              <div
                key={label}
                className="bg-surface-container-lowest p-8 flex flex-col items-center justify-center text-center"
              >
                <span className="material-symbols-outlined text-6xl text-primary mb-4">
                  {icon}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
