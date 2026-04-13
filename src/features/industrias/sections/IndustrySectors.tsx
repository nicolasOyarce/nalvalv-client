import Image from "next/image";

type Sector = {
  id: string;
  indexLabel: string;
  title: string;
  description: string;
  leftItems: string[];
  rightItems: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "low" | "high";
};

const sectors: Sector[] = [
  {
    id: "mineria",
    indexLabel: "01. Sector Primario",
    title: "Mineria de Cobre y Litio",
    description:
      "Sistemas de control disenados para la abrasion extrema de pulpas de concentrado y la corrosion en plantas de litio. Enfoque en durabilidad bajo condiciones de alta presion y ciclos operativos continuos.",
    leftItems: ["Valvulas de Cuchillo", "Mangueras de Alta Presion"],
    rightItems: ["Actuadores Neumaticos", "Bombas para Slurry"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgg2EURqQe44Tp-H-Uc53oVYN1TJkA8O-QEgMm7L3Ew_yW6xBn9xhCONjec0CLrO2TH-jhhNp3gGkrzb-csGtLitq5bWePk62pCSZp7cTwept0W5834pxp-9ARff3U6gph3oyqCuLY0hXtCyuC081OGPhYCNY_Koz-LrXt_3Kg-6wO7GjkLGea7HCCb-h8v5R0Ae4Jk3aU0h1zL9Kt98eCf1ZypFVhJ7MB8hZDEl1SpJOBYeqRgnctMnxyng-AuxGpWCfqHoUF7tU",
    imageAlt: "Mining Operations",
  },
  {
    id: "sanitaria",
    indexLabel: "02. Infraestructura Vital",
    title: "Industria Sanitaria y Tratamiento de Aguas",
    description:
      "Soluciones de acero inoxidable con estandares de higiene superiores. Resistencia total a la corrosion para procesos de desalinizacion y potabilizacion, garantizando la pureza del recurso hidrico.",
    leftItems: ["Valvulas Mariposa", "Filtros de Malla"],
    rightItems: ["Conectores Sanitarios", "Medidores de Flujo"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnKlAmeTac0xFe41Jpx977HkJ6yGOuUghZtliGZ_BRftE8acErGzOKPlWS8-WNeVM9aBs-sdkIyd8egepvPeznZd_NNrx6ugfDN2QsLFelJhXjHhWzuquXeCem8jmWyACQ58tQAA3Q0baOzXhRCL9hXeOe7_Sj_BmqPIe2FEUx8bOOcjJB-sXAAdOnXjFOUtqHxYim4UAg6QvvA3DsJ8Q7Xra4Zp4I28AV71uDRRzzU9gaSqDoilJnQmP2BU_VuqpVpEN3q17vQA8",
    imageAlt: "Water Treatment Plant",
    reverse: true,
    tone: "high",
  },
  {
    id: "petroquimica",
    indexLabel: "03. Energia y Gas",
    title: "Petroquimica y Gas",
    description:
      "Ingenieria de seguridad critica para el manejo de hidrocarburos. Equipamiento certificado ATEX para atmosferas explosivas y aleaciones especiales para temperaturas de operacion extremas.",
    leftItems: ["Valvulas de Bola Fire-Safe", "Juntas de Expansion"],
    rightItems: ["Sensores de Presion ATEX", "Acoples de Seguridad"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHK-Tm3lzJqyI3ikhW9lLzCvqxR61RRORZ6MCzC7T0cazpgm12z2mI5ekJcDuK9aGkQkioi6g8kScSem09BaJGcB5HzzgobR0TVkXNJdIQ2Ed5wencJ0b37bRnN7VnFRlxgdbtwFukBob88wTkvFT-hCGesGgUvcsV2fKyTlArM74Gwvr1Cb-3msJiwon_Ncrfu0ORCdflq10iJCAI7veVhXcrAmQxHdb3agalUmkL0nLpvVTNFeM0pw7_GawG8VWB7JTGJp4oHLw",
    imageAlt: "Oil and Gas Facility",
  },
  {
    id: "quimica",
    indexLabel: "04. Procesos Especiales",
    title: "Quimica y Celulosa",
    description:
      "Control preciso de fluidos corrosivos y quimicos agresivos. Materiales termoplasticos y recubrimientos especiales que aseguran la integridad del proceso y la vida util de los activos.",
    leftItems: ["Valvulas Revestidas en PFA", "Tubos de Fluoropolimero"],
    rightItems: ["Bombas de Dosificacion", "Sellos Mecanicos"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhEXSVlh4NuXXnS6gLRGrwoKTJNgE_XPevRZDAOXRTtQlJJ7UbXT_X-biYKiBxSzeCaMXjshftIMtk38bfedfgR1hz1rgSBC-743IcWb2sLeJpS6nmwqqWKhJlDDch_Usl-LkaOXvqNnOsd1Ro7d2FRs_5oBFG362XmxYg2SoeDem78Rm-nnPyPlAsxHX1kLAuOx1gDKPUnPJeyvh0eE0kM8hOpJQPJe8kRo1bdyQbPa7AHr9GcK9-Ouo2z1OC1f1sA1467a-hIHU",
    imageAlt: "Pulp and Paper Mill",
    reverse: true,
    tone: "high",
  },
  {
    id: "general",
    indexLabel: "05. Manufactura Diversa",
    title: "Industria General y Alimentos",
    description:
      "Versatilidad y eficiencia para lineas de produccion masiva. Cumplimiento estricto con normativas FDA para contacto con alimentos y soluciones de automatizacion para optimizacion de planta.",
    leftItems: ["Valvulas de Solenoide", "Trampas de Vapor"],
    rightItems: ["Empaquetaduras Grado Food", "Mangueras de Vapor"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD45ApDlTzIprzFlsAQNvYmn8QEoht_nIzSXkZk6nJCSB1a-aZN6nvAu-yC4WocJejm2jXHsXQTqQVeIPSk-goe8UI9yD1WzlHmfC7a3okjfwxZueQ-WXLP6jYHLjSEWbXzeTDvZ2PU4sfXMzgCHfSbvn7ip_54-y_X5c86swTvJeCwuNS7A8OuBtkrf5FDgTLXRwPZa2j62LJAambiL0DfipHQ64eycsw-ogPPTIFQufvE2hjENxjbTHAVXYF8GZNCfx-8hf3KqD8",
    imageAlt: "Food Processing Plant",
  },
];

function SectorText({ sector }: { sector: Sector }) {
  return (
    <div
      className={`md:col-span-7 ${sector.tone === "high" ? "bg-surface-container-highest" : "bg-surface-container-low"} p-12 md:p-20 flex flex-col justify-center`}
    >
      <span className="text-outline text-xs tracking-widest uppercase mb-8 font-bold">
        {sector.indexLabel}
      </span>
      <h2 className="text-primary text-5xl font-black tracking-tight mb-6">
        {sector.title}
      </h2>
      <p className="text-on-surface-variant text-lg mb-10 max-w-xl">
        {sector.description}
      </p>
      <div className="grid grid-cols-2 gap-8 mb-12">
        <ul className="space-y-3 text-sm font-bold tracking-tight uppercase text-on-surface">
          {sector.leftItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <ul className="space-y-3 text-sm font-bold tracking-tight uppercase text-on-surface">
          {sector.rightItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="w-fit bg-primary-container text-on-primary px-8 py-4 font-black tracking-tight uppercase text-sm hover:bg-primary transition-colors">
        Request Technical Consultation
      </button>
    </div>
  );
}

function SectorImage({ sector }: { sector: Sector }) {
  return (
    <div className="md:col-span-5 h-full min-h-[400px]">
      <Image
        width={1200}
        height={900}
        alt={sector.imageAlt}
        className="w-full h-full object-cover"
        src={sector.imageSrc}
      />
    </div>
  );
}

export default function IndustrySectors() {
  return (
    <main className="max-w-[1440px] mx-auto px-8 py-24 space-y-32">
      {sectors.map((sector) => (
        <section key={sector.id} className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
          {sector.reverse ? (
            <>
              <div className="order-2 md:order-1">
                <SectorImage sector={sector} />
              </div>
              <div className="order-1 md:order-2 md:col-span-7">
                <SectorText sector={sector} />
              </div>
            </>
          ) : (
            <>
              <SectorText sector={sector} />
              <SectorImage sector={sector} />
            </>
          )}
        </section>
      ))}
    </main>
  );
}
