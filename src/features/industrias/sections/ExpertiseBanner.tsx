export default function ExpertiseBanner() {
  return (
    <section className="bg-primary text-white py-32">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h3 className="text-5xl font-black tracking-tighter mb-8 leading-tight uppercase">
            Capacidad de Ingenieria sin Limites
          </h3>
          <p className="text-surface-variant text-xl leading-relaxed mb-10">
            Nuestro equipo tecnico no solo vende componentes; disenamos
            soluciones para los desafios mas complejos de la industria. Desde el
            calculo de perdida de carga hasta la seleccion de aleaciones
            exoticas, NALVALV es su partner tecnico en terreno.
          </p>
          <div className="flex gap-12">
            <div>
              <span className="block text-4xl font-black mb-1">20+</span>
              <span className="text-xs uppercase tracking-widest text-outline">
                Anos de Experiencia
              </span>
            </div>
            <div>
              <span className="block text-4xl font-black mb-1">100%</span>
              <span className="text-xs uppercase tracking-widest text-outline">
                Certificacion Tecnica
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-1 text-primary">
          <div className="border-2 border-primary p-12">
            <span className="text-xs font-black tracking-[0.2em] uppercase mb-4 block">
              Engineered Solutions
            </span>
            <h4 className="text-3xl font-black tracking-tight mb-6">
              Expertise en Terreno
            </h4>
            <ul className="space-y-4 font-bold text-sm uppercase tracking-tight">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  engineering
                </span>
                Diagnostico de Fallas
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  design_services
                </span>
                Diseno de Skids a Medida
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
                Auditorias de Vapor y Energia
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  monitoring
                </span>
                Sistemas de Monitoreo de Fluidos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
