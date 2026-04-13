const pages = ["01", "02", "03", "...", "12"];

export default function Pagination() {
  return (
    <div className="mt-20 flex justify-between items-center py-8 border-t border-outline/10">
      <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-outline hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Anterior
      </button>

      <div className="flex gap-4">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={i} className="text-[10px] font-black text-outline">
              ...
            </span>
          ) : i === 0 ? (
            <span
              key={page}
              className="text-[10px] font-black text-primary border-b-2 border-primary pb-1"
            >
              {page}
            </span>
          ) : (
            <span
              key={page}
              className="text-[10px] font-black text-outline hover:text-primary cursor-pointer transition-colors"
            >
              {page}
            </span>
          )
        )}
      </div>

      <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
        Siguiente
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  );
}
