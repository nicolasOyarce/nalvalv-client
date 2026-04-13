import Image from "next/image";

export default function IndustriesHero() {
  return (
    <header className="relative h-[819px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          alt="High-impact industrial facility"
          className="w-full h-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9uwrV9F2yrfjF7S9IkQgCjB3TMVJJTG4E1C2-mXempanwohLPB1vc6CCvwjBz8Qvxduzt_OV4ZKVV_1-hgtN7EalIjqyluTankut98J8W85IYIPyOT1pRJO9NjTiqitHi8CG1V3a86gCMn0J8yXKhofzzv3xSJoZkNkvb3UNmirxhpx1Fyhn9dBPTVadSqwCBVJezwiD2H1TmZ88MPKvWsS_jED2-Vrl6SHqeaDSt1C99qFGHS6KGod3uxp3uAuyV_UOChbeUlA"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <span className="text-white text-xs tracking-[0.3em] uppercase mb-4 block font-bold border-l-4 border-primary-container pl-4">
            Presencia Estrategica en Chile
          </span>
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] uppercase">
            Sectores que Impulsan la Industria
          </h1>
          <p className="text-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
            Como socio estrategico de la industria chilena, NALVALV provee
            soluciones de control de fluidos que resisten los entornos mas
            exigentes del pais.
          </p>
        </div>
      </div>
    </header>
  );
}
