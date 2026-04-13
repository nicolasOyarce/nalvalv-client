const rows = [
  { size: '2" (DN50)', a: 161, b: 80, c: 42, cv: 135, torque: 20, weight: 3.5 },
  { size: '4" (DN100)', a: 200, b: 114, c: 52, cv: 600, torque: 45, weight: 6.2 },
  { size: '8" (DN200)', a: 270, b: 175, c: 60, cv: 2500, torque: 180, weight: 14.0 },
  { size: '12" (DN300)', a: 340, b: 245, c: 78, cv: 6200, torque: 420, weight: 32.5 },
];

export default function TechnicalDataTable() {
  return (
    <section className="mb-20 overflow-x-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
          Technical Data Table
        </h2>
        <div className="h-1 w-24 bg-primary-container" />
      </div>

      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-4 text-xs font-bold uppercase tracking-widest">Tamano (Size)</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">A (mm)</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">B (mm)</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">C (mm)</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">CV Factor</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">Torque (Nm)</th>
            <th className="p-4 text-xs font-bold uppercase tracking-widest">Peso (kg)</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {rows.map((row, index) => (
            <tr
              key={row.size}
              className={`border-b border-outline-variant hover:bg-surface-container-low transition-colors ${
                index % 2 === 1 ? "bg-surface-container-lowest" : ""
              }`}
            >
              <td className="p-4 font-bold">{row.size}</td>
              <td className="p-4">{row.a}</td>
              <td className="p-4">{row.b}</td>
              <td className="p-4">{row.c}</td>
              <td className="p-4">{row.cv}</td>
              <td className="p-4">{row.torque}</td>
              <td className="p-4">{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
