import Image from "next/image";
import Link from "next/link";

type Spec = { label: string; value: string };

type Badge = {
  text: string;
  variant: "primary" | "secondary";
};

export type ProductCardProps = {
  category: string;
  name: string;
  src: string;
  alt: string;
  specs: Spec[];
  badge?: Badge;
  detailHref?: string;
};

export default function ProductCard({
  category,
  name,
  src,
  alt,
  specs,
  badge,
  detailHref = "#",
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square bg-surface-container-low mb-4 overflow-hidden relative border border-transparent group-hover:border-primary/20 transition-all">
        <Image
          fill
          className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
          alt={alt}
          src={src}
        />
        {badge && (
          <div
            className={`absolute top-0 right-0 text-white text-[9px] font-bold px-3 py-1 uppercase tracking-tighter ${
              badge.variant === "primary" ? "bg-primary" : "bg-secondary"
            }`}
          >
            {badge.text}
          </div>
        )}
      </div>

      <div className="px-2">
        <p className="text-[10px] text-outline font-bold uppercase tracking-[0.2em] mb-1">
          {category}
        </p>
        <h3 className="text-lg font-bold leading-tight text-primary mb-3">
          {name}
        </h3>

        <div className="grid grid-cols-2 gap-y-3 mb-6">
          {specs.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[9px] text-outline uppercase tracking-widest">
                {label}
              </p>
              <p className="text-xs font-bold text-on-surface">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          <Link
            href={detailHref}
            className="flex-1 bg-surface-container-highest text-primary py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors text-center"
          >
            Ver Detalles
          </Link>
          <button className="bg-primary text-white p-3 hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-sm">
              request_quote
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
