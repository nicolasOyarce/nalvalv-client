const values = [
  {
    icon: "handshake",
    title: "Compromiso",
    description:
      "Lealtad con los objetivos operativos de nuestros socios comerciales.",
    className: "bg-surface-container-highest",
    textClass: "text-on-surface-variant",
  },
  {
    icon: "architecture",
    title: "Precision Tecnica",
    description:
      "Cada especificacion es validada bajo rigurosos calculos de ingenieria.",
    className: "bg-primary text-white",
    textClass: "text-surface-container-highest",
  },
  {
    icon: "verified_user",
    title: "Seguridad",
    description:
      "Proteccion total de los activos criticos y del capital humano.",
    className: "bg-surface-container-highest border-b-4 border-primary",
    textClass: "text-on-surface-variant",
  },
  {
    icon: "check_circle",
    title: "Disponibilidad",
    description:
      "Stock estrategico para garantizar respuesta inmediata ante fallas.",
    className: "bg-surface-container-low border-2 border-outline-variant",
    textClass: "text-on-surface-variant",
  },
];

export default function ValuesGridSection() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tight uppercase">
          Valores Corporativos
        </h2>
        <div className="w-24 h-2 bg-primary-container mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {values.map(({ icon, title, description, className, textClass }) => (
          <div key={title} className={`${className} p-8 h-64 flex flex-col justify-between`}>
            <span className="material-symbols-outlined text-primary-container text-4xl">
              {icon}
            </span>
            <div>
              <h4 className="font-bold text-lg mb-2 uppercase">{title}</h4>
              <p className={`text-sm ${textClass}`}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
