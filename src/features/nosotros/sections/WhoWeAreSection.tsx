export default function WhoWeAreSection() {
  return (
    <section className="py-24 bg-surface max-w-[1440px] mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7">
          <div className="bg-surface-container-low p-12 relative">
            <h2 className="text-4xl font-black tracking-tight mb-8 text-primary uppercase">
              Quienes Somos
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
              NALVALV se ha consolidado como el socio estrategico fundamental
              para el sector industrial en Chile, proveyendo soluciones criticas
              de control de fluidos en los entornos mas exigentes de la
              <span className="font-bold text-primary">
                {" "}
                mineria, industria sanitaria y petroquimica
              </span>
              .
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              No somos solo un proveedor de componentes; somos un aliado
              tecnico. Nuestra capacidad se basa en la profunda comprension de
              los procesos de nuestros clientes, garantizando
              <span className="font-bold text-primary">
                {" "}
                confiabilidad operativa y soporte tecnico
              </span>
              {" "}
              especializado en cada etapa del proyecto.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 pt-12">
          <div className="relative border-2 border-outline-variant p-8">
            <div className="absolute -top-6 -left-6 bg-primary-container p-4">
              <span className="material-symbols-outlined text-white text-4xl">
                precision_manufacturing
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 mt-4 tracking-tight">
              Presencia Estrategica
            </h3>
            <p className="text-on-secondary-container">
              Operamos con una red logistica optimizada para responder a las
              urgencias operativas en todo el territorio nacional, minimizando
              los tiempos de inactividad de su planta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
