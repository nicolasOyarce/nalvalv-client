const features = [
  {
    icon: "engineering",
    title: "Soporte Técnico Especializado",
    description:
      "Asesoría de ingenieros expertos en cada etapa de su proyecto.",
  },
  {
    icon: "bolt",
    title: "Respuesta Rápida",
    description: "Logística optimizada para entregas críticas en todo Chile.",
  },
  {
    icon: "verified",
    title: "Calidad Certificada",
    description: "Productos que cumplen con normativas ISO y estándares API.",
  },
  {
    icon: "history_edu",
    title: "Experiencia Industrial",
    description:
      "Más de una década liderando el suministro técnico en el país.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-10 border border-outline-variant/20 hover:bg-surface-container-highest transition-colors"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
              {icon}
            </span>
            <h4 className="font-black uppercase text-sm tracking-widest mb-4">
              {title}
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
