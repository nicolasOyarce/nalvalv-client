export default function FieldAssistanceBanner() {
  return (
    <section className="mx-12 mb-24 bg-primary text-white p-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="max-w-xl">
        <h3 className="text-3xl font-black tracking-tight mb-2">
          Asistencia en Terreno
        </h3>
        <p className="text-on-primary-container text-sm leading-relaxed">
          Contamos con un equipo de respuesta rapida para emergencias operativas
          y mantenimiento critico de valvulas industriales en todo el territorio
          nacional.
        </p>
      </div>

      <div className="flex flex-col gap-2 items-end">
        <p className="text-[10px] uppercase tracking-widest text-on-primary-container">
          Emergencias 24/7
        </p>
        <p className="text-2xl font-bold">+56 9 8765 4321</p>
      </div>
    </section>
  );
}
