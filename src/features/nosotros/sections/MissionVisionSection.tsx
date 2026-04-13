const items = [
  {
    icon: "rocket_launch",
    title: "Mision",
    description:
      "Suministrar tecnologia de vanguardia en valvulas y sistemas de control que aseguren la continuidad y eficiencia energetica de los procesos industriales de nuestros clientes, fundamentados en la excelencia tecnica y el cumplimiento de estandares internacionales.",
  },
  {
    icon: "visibility",
    title: "Vision",
    description:
      "Ser el referente indiscutido en ingenieria de fluidos en Sudamerica, reconocidos por nuestra capacidad de resolver desafios hidraulicos complejos mediante la innovacion tecnica y un compromiso inquebrantable con la seguridad industrial.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant">
        {items.map(({ icon, title, description }) => (
          <div key={title} className="bg-surface p-16 flex flex-col items-start">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">
              {icon}
            </span>
            <h3 className="text-3xl font-black tracking-tight mb-6 uppercase">
              {title}
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
