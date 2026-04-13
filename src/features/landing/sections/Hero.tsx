import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative pt-20 min-h-[921px] flex items-center overflow-hidden">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          priority
          className="object-cover grayscale opacity-40"
          alt="Close-up of a high-precision stainless steel industrial valve assembly with mechanical pressure gauges in a brightly lit engineering facility"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRIR_83egITsAUCfvXVJTN6sJ1UNU_VxG_tj5toxXOYk-fGE8z_i0mt4xTXGzMs_CEGIzq7EOQHl9XfVQuqlqN-OSpOvlJbcu-W7SFKZhnv_PGO5Q-7IDwKQB1Aq90AsuZ_2FrQFbDkfxRPrMZ2X_gjdEeJiaCCw7eOolKfJVpp_ghEPjPOpzAs3nP0_tMIYKAr1ks18HlVrODk8R_T0VoRmIckwhmZjw0rLWAbCbTFUM8g0vYIAoyezll3_mc5o5iMGqg6Uds37Q"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 text-xs font-black uppercase tracking-widest mb-6">
            Ingeniería en Fluidos
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-on-primary tracking-tighter leading-none mb-8">
            SOLUCIONES
            <br />
            INDUSTRIALES
            <br />
            PARA FLUIDOS
          </h1>

          <p className="text-xl text-primary-fixed-dim font-light max-w-xl mb-12 leading-relaxed">
            Suministros técnicos especializados para minería e industria pesada
            en Chile. Conducción y control de fluidos con precisión quirúrgica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-surface-container-highest text-primary font-black px-10 py-5 text-sm uppercase tracking-tighter hover:bg-white transition-colors">
              Solicitar Cotización
            </button>
            <button className="border border-outline-variant text-on-primary font-bold px-10 py-5 text-sm uppercase tracking-tighter hover:bg-on-primary/10 transition-colors">
              Ver Catálogo de Productos
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
