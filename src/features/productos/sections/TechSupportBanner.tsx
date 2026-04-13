export default function TechSupportBanner() {
  return (
    <section className="mt-12 bg-primary p-1">
      <div className="bg-primary-container p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] font-bold text-on-primary-container uppercase tracking-[0.3em] mb-4">
            Soporte Técnico Especializado
          </p>
          <h2 className="text-3xl font-black tracking-tighter text-white mb-4">
            ¿Requiere una especificación crítica?
          </h2>
          <p className="text-on-tertiary-container max-w-xl text-sm leading-relaxed">
            Nuestros ingenieros están disponibles para ayudarle a seleccionar el
            material y la presión adecuada para su aplicación industrial
            específica.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-3 min-w-[240px]">
          <button className="bg-white text-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all">
            Solicitar Asesoría
          </button>
          <p className="text-[10px] text-center text-on-primary-container font-medium">
            Respuesta técnica en menos de 24 horas
          </p>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-[-20deg] translate-x-20" />
      </div>
    </section>
  );
}
