import Link from "next/link";

const links = [
  "Technical Support",
  "MSDS Sheets",
  "Global Compliance",
  "Privacy Policy",
];

export default function TechnicalFooter() {
  return (
    <footer className="bg-[#161c27] text-white flex flex-col md:flex-row justify-between items-center px-12 py-10 mt-auto border-t border-[#71787c]">
      <div className="flex flex-col gap-2 mb-8 md:mb-0">
        <div className="text-lg font-bold text-white uppercase tracking-tighter">
          NALVALV
        </div>
        <p className="text-xs uppercase tracking-widest text-[#c1c7cc]">
          © 2024 NALVALV Industrial Fluid Control. All rights reserved.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {links.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-xs uppercase tracking-widest text-[#c1c7cc] hover:text-white transition-opacity duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
}
