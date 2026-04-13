import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="bg-primary text-white py-24">
      <div className="max-w-[1440px] mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase">
          Hablemos de su proximo proyecto industrial
        </h2>
        <p className="text-surface-container-highest text-lg max-w-2xl mx-auto mb-12">
          Nuestros ingenieros estan listos para asesorarlo en la optimizacion de
          sus sistemas de control de fluidos.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-primary px-12 py-5 font-black text-lg uppercase tracking-widest hover:bg-primary-fixed transition-colors"
        >
          Contactar Ahora
        </Link>
      </div>
    </section>
  );
}
