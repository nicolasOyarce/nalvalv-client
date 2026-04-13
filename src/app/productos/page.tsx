import {
  ProductGrid,
  Pagination,
  TechSupportBanner,
} from "@/features/productos/sections";

const sortOptions = [
  "Relevancia",
  "Precio: Mayor a Menor",
  "Precio: Menor a Mayor",
  "Alfabético",
];

export default function ProductosPage() {
  return (
    <>
      {/* Breadcrumbs & page header */}
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-outline mb-4">
          <a className="hover:text-primary transition-colors" href="/">
            Inicio
          </a>
          <span className="material-symbols-outlined text-[12px]">
            chevron_right
          </span>
          <span className="text-primary font-bold">Productos</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-primary mb-2">
              Catálogo Industrial
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-sm leading-relaxed">
              Sistemas de control de fluidos de alta precisión para aplicaciones
              críticas en minería, petróleo y procesos químicos.
            </p>
          </div>

          <div className="flex items-center gap-6 border-l-0 md:border-l border-outline/20 pl-0 md:pl-8">
            <div className="text-right">
              <p className="text-[10px] font-bold text-outline uppercase tracking-widest">
                Resultados
              </p>
              <p className="text-xl font-bold text-primary">124 Items</p>
            </div>
            <div className="relative">
              <select className="appearance-none bg-surface-container-low border border-outline/20 py-2 pl-4 pr-10 text-[11px] font-bold uppercase tracking-widest focus:ring-primary focus:border-primary outline-none">
                {sortOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                expand_more
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid />
      <Pagination />
      <TechSupportBanner />
    </>
  );
}
