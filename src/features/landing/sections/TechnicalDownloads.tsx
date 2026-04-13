export default function TechnicalDownloads() {
  return (
    <section className="py-20 px-8 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-primary-container p-12 relative overflow-hidden">
          {/* Text + CTA */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black text-on-primary mb-4 uppercase tracking-tighter">
              Documentación Técnica NALVALV 2024
            </h2>
            <p className="text-on-primary-container mb-8">
              Descargue nuestro catálogo completo de especificaciones técnicas,
              diámetros y resistencias de materiales.
            </p>
            <button className="flex items-center gap-3 bg-white text-primary font-black px-8 py-4 uppercase text-xs tracking-widest">
              <span className="material-symbols-outlined">download</span>
              Descargar Ficha Técnica (PDF)
            </button>
          </div>

          {/* Decorative icon */}
          <div className="hidden lg:block relative z-10 opacity-20">
            <span className="material-symbols-outlined text-[200px] text-white">
              description
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
