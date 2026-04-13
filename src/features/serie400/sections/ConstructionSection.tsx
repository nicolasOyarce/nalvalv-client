const materials = [
  {
    title: "Disco (Disc)",
    description:
      "Acero Inoxidable 316 pulido a espejo para minimizar la caida de presion y maximizar la vida util del sello.",
  },
  {
    title: "Eje (Shaft)",
    description:
      "Diseno de una sola pieza en SS 410/416 con sistema de retencion de seguridad anti-expulsion.",
  },
  {
    title: "Asiento (Seat)",
    description:
      "Asiento reemplazable vulcanizado o con respaldo fenolico para garantizar estabilidad dimensional.",
  },
  {
    title: "Cuerpo (Body)",
    description:
      "Tipo Wafer con orejetas de alineacion, fundicion de precision segun normativas internacionales.",
  },
];

export default function ConstructionSection() {
  return (
    <section className="grid grid-cols-12 gap-12 mb-20">
      <div className="col-span-12 lg:col-span-8">
        <div className="mb-8 flex justify-between items-end border-b-2 border-primary pb-4">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            Materiales & Construccion
          </h2>
          <span className="text-xs font-bold text-outline">
            ENGINEERING DATA SHEET 400-B
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map(({ title, description }) => (
            <div key={title} className="p-6 bg-surface-container-low border-l-4 border-primary-container">
              <h4 className="text-sm font-bold uppercase mb-2">{title}</h4>
              <p className="text-sm text-on-surface-variant">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 flex flex-col">
        <div className="mb-8 flex justify-between items-end border-b-2 border-primary pb-4">
          <h2 className="text-3xl font-black uppercase tracking-tight">Esquema</h2>
        </div>
        <div className="flex-grow bg-surface-container-highest flex items-center justify-center p-8 border border-outline-variant border-dashed">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-on-primary-container mb-4">
              architecture
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Technical Blueprint 400-W
            </p>
            <p className="text-[10px] text-outline mt-1 uppercase">
              Dimensions in Millimeters (mm)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
