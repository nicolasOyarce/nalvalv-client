import Image from "next/image";

const categories = [
  {
    id: "valvulas",
    colSpan: "md:col-span-8",
    bg: "bg-surface-container-low",
    title: "Válvulas",
    titleSize: "text-3xl",
    description:
      "Sistemas de control de flujo para alta presión, compuerta, globo y bola con certificaciones internacionales.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUUFniz1jVQ9eCkzXIwQu5QeqEXlKgJd7aOnNEkEmFjNJa0rQxLxcoMcn3GQaNAlF9nTd5lQEtS3LvODXUwPfgShjqU5b6Vz0xih1pmJ1iHH_PPcYI3mb8dBoW2wtO6on64lSF8B1RxnpRRMOitkob6ldaypKzbt0wpe_cQZnw3qxMnNT7r9bNDr1SLOL03LTgj7cpYRXwXLZ0xZd-wwTDsQS_wUDTHIycmSW889RMHaSGBV2-QZGurZFiERlLN7IswpMtCH1IbLc",
      alt: "Macro photography of large blue industrial gate valves in a warehouse setting, heavy duty steel construction",
    },
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-surface px-8">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-2">
              Especialización
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-on-surface uppercase">
              Categorías de Productos
            </h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-outline-variant mb-4" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 — Válvulas (wide) */}
          <div className="md:col-span-8 bg-surface-container-low p-8 group flex flex-col justify-between min-h-[400px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-primary mb-4">
                Válvulas
              </h3>
              <p className="text-on-surface-variant max-w-sm mb-8 leading-relaxed">
                Sistemas de control de flujo para alta presión, compuerta,
                globo y bola con certificaciones internacionales.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary pb-1"
              >
                Ver detalles
              </a>
            </div>
            {/* Hover-reveal image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <Image
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-20 group-hover:opacity-100"
                alt={categories[0].image.alt}
                src={categories[0].image.src}
              />
            </div>
          </div>

          {/* Card 2 — Abrasivos */}
          <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-primary mb-4">
                Abrasivos
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Soluciones de corte y desbaste para procesos industriales de
                alto impacto.
              </p>
            </div>
            <a
              href="#"
              className="text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary w-fit pb-1"
            >
              Ver detalles
            </a>
          </div>

          {/* Card 3 — Filtración (dark) */}
          <div className="md:col-span-4 bg-primary text-on-primary p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-4">Filtración</h3>
              <p className="text-primary-fixed-dim text-sm mb-6">
                Tecnología avanzada para purificación de procesos y
                recuperación de medios.
              </p>
            </div>
            <a
              href="#"
              className="text-on-primary font-bold uppercase text-xs tracking-widest border-b-2 border-on-primary w-fit pb-1"
            >
              Ver detalles
            </a>
          </div>

          {/* Card 4 — Mangueras y Flexibles */}
          <div className="md:col-span-4 bg-surface-container-low p-8 flex flex-col justify-between group">
            <div className="relative w-full h-32 mb-6">
              <Image
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all"
                alt="Industrial reinforced rubber hoses coiled in a distribution center, technical blue and gray colors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGVvco0rFk0WGb0iRPdT3_Lnu54ScDIUOYNPJKeiKUYBXsdK7eTx6JViTFrc4VF2uRyg7rmIVE1yX_y3kmq5y5tsyXozXaPnnYoUjl3CMjba84H2ua2AdBYAKMAYfmX_XuObyfBMoSGnLLvDyVGeI8H4q5Wh5Q0nekCi7d8WeCR7DWGGq2qkzyZnzM2jtP5A9HMd0OWREhUKJx3yJh3UcI97Mapw3APLe7PmdiYYadRmu46RsKs_DaMCe9wvxy3zz7heTi8jwK2lc"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black text-primary mb-2">
                Mangueras y Flexibles
              </h3>
              <p className="text-on-surface-variant text-sm">
                Conducción segura para químicos y combustibles.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary w-fit pb-1"
            >
              Ver detalles
            </a>
          </div>

          {/* Card 5 — Control de Derrames */}
          <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-primary mb-4">
                Control de Derrames
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Kits y absorbentes industriales para respuesta ante emergencias
                químicas.
              </p>
            </div>
            <a
              href="#"
              className="text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary w-fit pb-1"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
