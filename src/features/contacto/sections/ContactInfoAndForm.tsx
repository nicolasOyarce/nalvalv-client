import Image from "next/image";

export default function ContactInfoAndForm() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 px-12 py-24 gap-12 bg-surface">
      <div className="md:col-span-5 flex flex-col gap-12">
        <div className="bg-surface-container-low p-12 flex flex-col gap-8 h-full">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8 border-b-2 border-primary-container pb-2 inline-block">
              Sede Central
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-outline mb-1">
                    Direccion
                  </p>
                  <p className="text-lg font-medium">
                    Av. Industrial 4500,
                    <br />
                    Santiago, Chile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-outline mb-1">
                    Telefono Directo
                  </p>
                  <p className="text-lg font-medium">+56 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mail
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-outline mb-1">
                    Correo Electronico
                  </p>
                  <p className="text-lg font-medium">contacto@nalvalv.cl</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-outline-variant">
            <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Horario de Atencion
            </h3>
            <div className="flex justify-between items-center text-on-surface">
              <span className="font-medium">Lunes a Viernes</span>
              <span className="font-bold">08:30 - 18:00</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-4 opacity-70">
              Cerrado fines de semana y festivos nacionales.
            </p>
          </div>
        </div>

        <div className="relative bg-surface-container-highest h-[400px] overflow-hidden group">
          <Image
            fill
            className="object-cover grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
            alt="top-down satellite view of a modern industrial park in Santiago Chile with clean architecture and gray-toned pavement"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FRS1mHMKSJltSapDFoRdF3ReJsDr7gtbejsBDJiztSm84ws1NteCTLXVYzaYFQ-GIYTS-K9H8EQr_woOMDcD1L3BMPm7_vQBpLgXEP2gJQvqWRTfJYkGd4Dw5Rk62niXHME6doYdFqIA4xxVHSS3_kg5Ofguzq5i--kzG-4s3ikN_gt8OEl4DB__sv2Ty2IAmSCYTTzV_LDHW6ORAYwo1Uo_24lOCQbSPtPZOc7Qq5j32l5cHuBa9Zmc4kzk9Zp3g-W9MdyqhSU"
          />
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-xl">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>
            <div className="mt-2 bg-white px-4 py-2 shadow-lg">
              <p className="text-[10px] font-black uppercase text-primary">
                Nalvalv Headquarters
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="w-8 h-8 bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
            <button className="w-8 h-8 bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 bg-surface-container-lowest p-12 border border-outline-variant/10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">
            Formulario Tecnico
          </h2>
          <p className="text-on-surface-variant mb-12">
            Complete los siguientes campos para que un ingeniero de nuestra area
            tecnica se ponga en contacto con su requerimiento.
          </p>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-outline">
                  Nombre Completo
                </label>
                <input
                  className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors"
                  placeholder="Ej: Roberto Salas"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-outline">
                  Empresa / Institucion
                </label>
                <input
                  className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors"
                  placeholder="Nombre de la compania"
                  type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-outline">
                  Cargo / Departamento
                </label>
                <input
                  className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors"
                  placeholder="Ej: Jefe de Planta"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-outline">
                  Correo Electronico
                </label>
                <input
                  className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors"
                  placeholder="email@corporativo.cl"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-outline">
                Telefono de Contacto
              </label>
              <input
                className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors"
                placeholder="+56 9 .... ...."
                type="tel"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-outline">
                Mensaje / Detalle del Requerimiento
              </label>
              <textarea
                className="w-full border-b border-outline bg-transparent py-3 px-0 focus:border-primary-container focus:ring-0 transition-colors resize-none"
                placeholder="Describa las especificaciones tecnicas o consulta..."
                rows={5}
              />
            </div>

            <div className="pt-6">
              <button
                className="w-full md:w-auto bg-primary text-white font-bold uppercase tracking-[0.2em] px-12 py-5 hover:bg-primary-container transition-all flex items-center justify-center gap-4"
                type="submit"
              >
                Enviar Consulta Tecnica
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
