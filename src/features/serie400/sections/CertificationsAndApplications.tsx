const certifications = [
  {
    icon: "verified",
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
  },
  {
    icon: "policy",
    title: "CE PED 2014/68/EU",
    subtitle: "Pressure Equipment",
  },
  {
    icon: "factory",
    title: "API 609",
    subtitle: "Standard Design",
  },
  {
    icon: "local_fire_department",
    title: "FIRE SAFE",
    subtitle: "API 607 Certified",
  },
];

const applications = [
  "Industria Minera y Metalurgica",
  "Tratamiento de Aguas y Desalinizacion",
  "Procesos Petroquimicos y Refinerias",
];

export default function CertificationsAndApplications() {
  return (
    <section id="certificaciones" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <div>
        <h3 className="text-xl font-black uppercase mb-8 border-l-4 border-primary-container pl-4">
          Certificaciones
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {certifications.map(({ icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-4 bg-surface-container p-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                {icon}
              </span>
              <div>
                <p className="text-xs font-bold uppercase">{title}</p>
                <p className="text-[10px] text-outline">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black uppercase mb-8 border-l-4 border-primary-container pl-4">
          Aplicaciones
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {applications.map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden h-16 flex items-center px-6 bg-surface-container-highest"
            >
              <span className="text-xs font-black uppercase tracking-widest z-10">
                {item}
              </span>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-primary opacity-5 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
