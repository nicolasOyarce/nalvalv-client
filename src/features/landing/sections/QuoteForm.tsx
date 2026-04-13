"use client";

const productOptions = [
  "Válvulas de Compuerta",
  "Mangueras Industriales",
  "Sistemas de Filtración",
  "Control de Derrames",
  "Otro / Consulta General",
];

const contactInfo = [
  {
    icon: "location_on",
    label: "Casa Matriz",
    detail: "Santiago, Región Metropolitana, Chile",
  },
  {
    icon: "mail",
    label: "Ventas y Soporte",
    detail: "ventas@nalvalv.cl",
  },
];

export default function QuoteForm() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — intro + contact info */}
          <div>
            <h2 className="text-5xl font-black tracking-tighter text-on-surface uppercase mb-8">
              Hablemos de su Proyecto
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Complete el formulario y uno de nuestros especialistas técnicos se
              pondrá en contacto en menos de 24 horas hábiles.
            </p>

            <div className="space-y-8">
              {contactInfo.map(({ icon, label, detail }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    {icon}
                  </span>
                  <div>
                    <p className="font-bold text-sm uppercase">{label}</p>
                    <p className="text-on-surface-variant text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-container-low p-10 border border-outline-variant/10 shadow-2xl shadow-primary/5">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de su compañía"
                  className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.cl"
                  className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+56 9 ..."
                  className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Producto Requerido
                </label>
                <select className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0">
                  {productOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase text-outline tracking-[0.2em]">
                  Mensaje / Requerimiento
                </label>
                <textarea
                  rows={4}
                  placeholder="Describa brevemente las especificaciones técnicas..."
                  className="bg-surface-container-lowest border border-outline-variant px-4 py-3 text-sm focus:border-primary outline-none sharp-0"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 bg-primary text-on-primary font-black py-5 uppercase text-xs tracking-widest hover:bg-primary/90 transition-all"
              >
                Enviar Solicitud de Cotización
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
