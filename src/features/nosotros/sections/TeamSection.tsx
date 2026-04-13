import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 relative h-[500px]">
          <Image
            fill
            alt="Engineering team"
            className="w-full h-[500px] object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmdx145Cv4_1RCn1ikXZWkbsaJ6APr_lWDvsLIGSd9A3L--7yHVhL50fHvegYgmPYagv1T54gThKqjVBPjazesXmu7tHZAhE7mazf1eb_pmdNJ4rIoPhA2lCyAqr3pbdqM4hV97Nc97wywXrQkruHQR4eVrDGfOMESKf-LYLJY5NMEVOPqJWxZr04AVaO0_Ax7XjRWlQDJ6HTU8CcYo5da9RA8E-L-afMUdbZ51xU8pPJIEnlB9JRVCniNGWunW1YzA_8O4GSvloY"
          />
        </div>

        <div className="md:col-span-8 flex flex-col justify-center">
          <h2 className="text-4xl font-black tracking-tight mb-8 uppercase">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
            En NALVALV, el capital humano es nuestro activo tecnologico mas
            valioso. Contamos con un cuerpo de
            <span className="font-bold text-primary">
              {" "}
              ingenieros de soporte altamente especializados
            </span>
            , formados en las principales plantas de fabricacion de valvulas a
            nivel mundial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex gap-4">
              <span className="text-primary-container font-black text-3xl">01</span>
              <div>
                <h6 className="font-bold uppercase tracking-tight">
                  Soporte en Terreno
                </h6>
                <p className="text-sm text-secondary">
                  Asistencia inmediata para diagnostico y puesta en marcha de
                  sistemas hidraulicos complejos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-primary-container font-black text-3xl">02</span>
              <div>
                <h6 className="font-bold uppercase tracking-tight">
                  Diseno de Soluciones
                </h6>
                <p className="text-sm text-secondary">
                  Calculo de dimensionamiento y seleccion de materiales
                  especificos para fluidos abrasivos o corrosivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
