const filterItems = [
  { icon: "precision_manufacturing", label: "Material" },
  { icon: "compress", label: "Presión" },
  { icon: "factory", label: "Marca" },
];

const subcategories = ["Válvulas", "Mangueras", "Filtración", "Abrasivos"];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-4 p-6 overflow-y-auto !bg-white h-screen w-64 fixed left-0 top-[72px] text-sm uppercase tracking-widest">
      <div className="mb-6">
        <h2 className="text-[#003344] font-black text-lg tracking-tighter mb-1">
          Filtros Técnicos
        </h2>
        <p className="text-[10px] text-outline tracking-[0.2em] normal-case">
          Especificaciones Industriales
        </p>
      </div>

      <div className="space-y-1">
        {/* Categoría — active, expanded */}
        <div>
          <div className="flex items-center gap-3 p-3 bg-white text-[#001d28] font-bold cursor-pointer transition-all duration-150 border border-outline/10">
            <span className="material-symbols-outlined">category</span>
            <span>Categoría</span>
          </div>
          <div className="pl-11 py-2 space-y-2 text-[11px] font-medium text-secondary normal-case tracking-normal">
            {subcategories.map((sub) => (
              <div
                key={sub}
                className="hover:text-primary cursor-pointer transition-colors"
              >
                {sub}
              </div>
            ))}
          </div>
        </div>

        {filterItems.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-3 text-[#161c27] hover:bg-[#dde2f3] cursor-pointer transition-all duration-150"
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-outline/10">
        <div className="bg-surface-container-highest p-4">
          <p className="text-[9px] font-bold mb-2">SOPORTE DE INGENIERÍA</p>
          <p className="text-[11px] normal-case tracking-normal text-secondary leading-relaxed mb-3">
            ¿Requiere una especificación fuera de catálogo?
          </p>
          <button className="w-full bg-primary text-white py-2 text-[10px] font-bold">
            CONTACTAR
          </button>
        </div>
      </div>
    </aside>
  );
}
