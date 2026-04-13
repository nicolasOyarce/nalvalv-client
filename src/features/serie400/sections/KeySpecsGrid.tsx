const specs = [
  {
    title: "Presion Nominal",
    value: "PN16",
    subtitle: "Maximum Operating Pressure",
  },
  {
    title: "Rango de Temp.",
    value: "-40C / +120C",
    subtitle: "Operational Range",
  },
  {
    title: "Cuerpo",
    value: "SS 316",
    subtitle: "Stainless Steel ASTM A351",
  },
  {
    title: "Sello",
    value: "EPDM / VITON",
    subtitle: "High Resilience Sealing",
  },
];

export default function KeySpecsGrid() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
        {specs.map(({ title, value, subtitle }) => (
          <div key={title} className="bg-white p-10 transition-colors hover:bg-surface-container-low">
            <span className="block text-[10px] font-bold tracking-widest text-on-secondary-container uppercase mb-4">
              {title}
            </span>
            <h3 className="text-4xl font-black text-primary">{value}</h3>
            <p className="text-xs text-outline mt-2 uppercase tracking-tighter">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
