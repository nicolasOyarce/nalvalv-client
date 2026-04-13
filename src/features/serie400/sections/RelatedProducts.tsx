import Image from "next/image";

const related = [
  {
    title: "Actuadores Neumaticos",
    description:
      "Automatizacion de alta respuesta para ciclos de apertura constantes.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI4ydCkWCKhm8KkBhycv4fzwMFazFd4U74BwLgwRG4EX95uPB7YLbMf5PUY3mK4e7r7nxTUI0MeM1KTRYruqKTTSevFtqRgoKO-WV6N-pXiAuUjTm4rLrAywEBddqsB4Ccs9Ujus87ynQnYXGYP-hmhQ698qolrciniXvgdQioqpwf8U-h0mGe-CKerPr-fZ8X-RsXCf7dXDz7pignP-IqygKuTHw98YKx5AdU1-2PsJ2bW3XIqbs0I14ng49KEcyqYbP6Ti9wT1I",
    alt: "Actuador Neumatico",
  },
  {
    title: "Sellos y Empaquetaduras",
    description:
      "Kits de repuesto certificados para mantenimiento preventivo Serie 400.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYyxcjQH0yJ1TZlQ28Y5HubSUk6Ac1DsxCh2YK2LaJ1NWfJ4LJKTh7vXo3idTMwSZ33f3xH0kPFeLC_9K3XH_o2MpOUKROb3geQ1JcO9eV3AWwl3E21fd4hqEHmvaL-gy5OIZ2gFwtjTVGmoqSl8HhDwfWyhg1bS6dLLSvbqKEzEtGA0Ws6KudZ4vFzrmn1OZdF2-2QLdDHM_ZLJwwoneWKH94U4E7UwqtRotnjuRYhpsbcAPnWWzZEYjXRQB0uasZwL413dIcxQ",
    alt: "Empaquetaduras",
  },
  {
    title: "Posicionadores Digitales",
    description:
      "Control preciso de flujo mediante senal 4-20mA y protocolo HART.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEncvnhrmD9GUJhkVTbaa9f9uLSrDFbO3gtagB16aQ6aCyIwzrx93dActh3gWViZ75x9xNBcmy65FcQWCMkW_qVAL_-zDWX8sU_Egzmv7b4y0-2v9da3DcYBN98inpFgOMQSL6K9N0hNIiC8sKuAB2gjlUlK-3Jb46yajtW_1AYruszccQ75fAQx1R2g2tvMKpRZbXoiepkdqehV36DcX_AVX4FvicjloqT6Euxef9qgrU-t9iTsqn-hnPeHyejURdqC-L1KVL-sg",
    alt: "Posicionadores",
  },
];

export default function RelatedProducts() {
  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-black uppercase tracking-tight">
          Equipos Complementarios
        </h2>
        <div className="flex-grow mx-8 h-px bg-outline-variant" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map(({ title, description, src, alt }) => (
          <div
            key={title}
            className="bg-surface-container-low border border-transparent hover:border-primary transition-all p-8 flex flex-col"
          >
            <div className="w-full aspect-square bg-white mb-6 p-4 relative">
              <Image fill alt={alt} className="w-full h-full object-contain" src={src} />
            </div>
            <h4 className="font-black uppercase text-sm mb-2">{title}</h4>
            <p className="text-xs text-on-surface-variant mb-6">{description}</p>
            <a
              className="mt-auto text-xs font-bold uppercase text-primary-container flex items-center gap-2 hover:gap-4 transition-all"
              href="#"
            >
              Ver Mas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
