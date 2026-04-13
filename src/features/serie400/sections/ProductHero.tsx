import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="grid grid-cols-12 gap-0 mb-16 items-stretch">
      <div className="col-span-12 lg:col-span-7 bg-surface-container-low p-12 flex flex-col justify-center">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-[0.2em] text-on-primary-container uppercase">
            Industrial Fluid Control
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-primary leading-[0.9] mb-8">
          Valvula de Mariposa
          <br />
          Tipo Wafer <span className="text-primary-container">Serie 400</span>
        </h1>

        <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Disenada para aplicaciones industriales de alto rendimiento. Nuestra
          Serie 400 ofrece una estanqueidad bidireccional superior y un diseno
          de eje pasante que garantiza la integridad estructural en las
          condiciones mas exigentes de presion y temperatura.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary-container text-white px-10 py-5 uppercase text-sm font-black tracking-widest hover:bg-primary transition-colors">
            Solicitar Cotizacion
          </button>
          <button className="border-2 border-outline text-primary px-10 py-5 uppercase text-sm font-black tracking-widest hover:bg-surface-container-highest transition-colors flex items-center gap-3">
            <span className="material-symbols-outlined">download</span>
            Descargar Ficha PDF
          </button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 relative min-h-[500px] overflow-hidden">
        <Image
          fill
          alt="Valvula Serie 400"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA33bXp22vnUh-6wcBa7oDcRjLO07Ojc82hAEg2-Xvxq4FIQu6kk6gA1_oNxIX1Wx_o9H_mrQWskA1ChueyI0o8XQwE-nA5Pyaxyp4Sm2mvIZwspx1HmumB8abUoosb5URnHTxZfSlV5FzkhCPnr4Su7IrPlZP6LDpYmCj0hJ4ExddosHwWYr7iCSZc9S26p90YWImrZqD8JkM01z0NjX39s7wVsfMNda90QP_FxHS_Ovj0XSYC1-QALKwYFyrivM9DQOQ8yzF-uF8"
        />
        <div className="absolute inset-0 bg-primary-container mix-blend-multiply opacity-10" />
      </div>
    </section>
  );
}
