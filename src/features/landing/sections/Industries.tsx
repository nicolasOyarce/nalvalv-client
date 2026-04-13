import Image from "next/image";

const sectors = [
  {
    icon: "precision_manufacturing",
    label: "Minería de Cobre y Litio",
    active: true,
  },
  { icon: "water_drop", label: "Industria Sanitaria" },
  { icon: "science", label: "Química y Petroquímica" },
];

export default function Industries() {
  return (
    <section className="bg-surface-container-low py-24 px-8 border-y border-outline-variant/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — text + sector list */}
          <div className="lg:col-span-5">
            <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">
              Sectores Clave
            </p>
            <h2 className="text-5xl font-black tracking-tighter text-on-surface uppercase mb-8">
              Industrias que Servimos
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Ofrecemos soluciones integrales adaptadas a los estándares de
              seguridad y eficiencia más exigentes de la región.
            </p>

            <div className="space-y-4">
              {sectors.map(({ icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 bg-surface-container-lowest p-4 ${
                    active ? "border-l-4 border-primary" : ""
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      active ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {icon}
                  </span>
                  <span
                    className={`font-bold uppercase text-sm tracking-widest ${
                      active ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — staggered image grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative w-full h-80">
              <Image
                fill
                className="object-cover grayscale"
                alt="Aerial view of a massive open pit mine in Chile at sunset, showing tiered levels and industrial scale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk6LKurbiIAh0SZq1jG0BeVnmsQAE1crgU6rZhpfZFg-a-HLpAQQbhFPwc255orRRyPnoKfoSJ076e4VTUkIrnbw8tsms7wKIizDpY6EY_ESGGsshB3OsCKHPhWV-tOISKZUw3EOph_rxs9bSZyCTS1JGt6lcOLMd5feC04D45uERK_ZcQabF-bTjjVY4nZwY1vG5nQL3OgMC_NI2mObmhHfi_sshbOLVToK3x1640xHRgfRl_YaF3TKRtzYgIQ0lUdsvmccTN8kg"
              />
            </div>
            <div className="relative w-full h-80 mt-12">
              <Image
                fill
                className="object-cover grayscale"
                alt="Interior of a chemical processing plant with complex piping and stainless steel tanks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEh4SA8_kkCGLgYV2NU0phuWFjcKIJOTmW33hji8ARpm1bSHEuoPuHPveSvO9vsfeA_E-WmUFbEty4DBvAPRf9B4_bbah2AR7TSi-vRTMEowSD-AmCrTyAOTja9LGM8w3INyTjY6iHvhMK6QrO4Uqlf7ZJgLLNa94iJEMv6EsxMf0Tvxo1toQPez2SCLPjZwZqXIi64dfKC6epGZTbFlMKS6nXq4Mh-7Fl12q01K40FZrLflxGOmkbL-TI5XM9EYtU3qxO7zogvqY"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
