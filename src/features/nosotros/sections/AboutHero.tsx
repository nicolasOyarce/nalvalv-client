import Image from "next/image";

export default function AboutHero() {
  return (
    <header className="relative w-full h-[716px] min-h-[500px] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          alt="Industrial infrastructure"
          className="w-full h-full object-cover opacity-40 grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbSnn_Bu__b0ewcCZse9-UJQdNgzYwB-Nyg0WRqYaoxWdjHOeV24_7wvhNQet26N36USXABNNRGecFbRfEwRaJtAbQeGuT1_vEO44ItkL5ZET-JeeKKOlKMrn8wXI3uJbhvW2JqlMDIp_pn-QXovvGVxNjOgXFNTixMjNx6fEl8nq2rrQs7fkv1ncO6HrXnTVXQdpROtK1KKqsWrnJYEKKGOlF_m4jnnDrnplH4vKVcAmyP0CNVRwQhH5rSFjey6RZqhl-bchorV0"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-4xl border-l-8 border-primary-fixed-dim pl-8">
          <span className="text-primary-fixed-dim font-bold tracking-[0.2em] uppercase text-sm block mb-4">
            Trayectoria y Autoridad
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 uppercase">
            Trayectoria y Autoridad Tecnica en Control de Fluidos
          </h1>
          <p className="text-surface-container-highest text-xl max-w-2xl font-light leading-relaxed">
            Soluciones de ingenieria de alto rendimiento disenadas para las
            demandas mas rigurosas de la industria chilena.
          </p>
        </div>
      </div>
    </header>
  );
}
