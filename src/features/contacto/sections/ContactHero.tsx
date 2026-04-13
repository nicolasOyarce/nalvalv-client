import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="px-12 py-24 bg-surface-container-low relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
        <Image
          fill
          className="object-cover grayscale"
          alt="close-up of technical engineering blueprints with metallic calipers and industrial valve diagrams in high-contrast lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNSvxzieLBfcrr-3JdTDNE690TwnRkqVmKLPxK6MJr58wcj5HJlRUryqJ2NmXTttUTek8Ym5tvPJHg1ZM77SswEHhxO9vUNjX1_mAzr_E5LoDgUFPUBpg7NB0GVVQaRQE9Cc-gGWflVPFiVGcby1KfQayNfy5y740jQUhwFOYUX5hB5EMctLhGE--H644LWmsRAAz4e9UZNTR7E2HOFUZi6phU_drih-DmErLeMqeUV6vJGoNSBKT2FvuEe4CZtFrI1fjImwzyffg"
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="block text-primary-container text-xs uppercase tracking-[0.2em] mb-4">
          Soporte de Ingenieria
        </span>
        <h1 className="text-7xl font-black text-on-surface tracking-tighter leading-none mb-8">
          Contacto y <br /> Asistencia Tecnica
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
          Nuestros especialistas estan disponibles para brindar asesoria tecnica
          personalizada y soluciones de control de fluidos para proyectos
          industriales de alta complejidad.
        </p>
      </div>
    </section>
  );
}
