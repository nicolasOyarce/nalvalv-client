const logos = ["ASME", "ANSI", "API", "ISO 9001", "ATEX", "FDA"];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8">
        <span className="text-outline text-[10px] tracking-[0.4em] uppercase mb-12 block text-center font-black">
          Certificaciones y Alianzas Estrategicas
        </span>
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-3xl font-black tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
