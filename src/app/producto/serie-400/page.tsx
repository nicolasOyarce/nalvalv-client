import type { Metadata } from "next";
import {
  CertificationsAndApplications,
  ConstructionSection,
  KeySpecsGrid,
  ProductHero,
  RelatedProducts,
  TechnicalDataTable,
} from "@/features/serie400/sections";
import { Footer, Navbar } from "@/shared/layout";

export const metadata: Metadata = {
  title: "NALVALV - Valvula de Mariposa Serie 400",
  description:
    "Ficha tecnica de la valvula de mariposa tipo wafer Serie 400 para aplicaciones industriales de alto rendimiento.",
};

export default function Serie400Page() {
  return (
    <>
      <Navbar />
      <main className="pb-20 max-w-[1440px] mx-auto px-8 bg-surface text-on-surface">
        <ProductHero />
        <KeySpecsGrid />
        <ConstructionSection />
        <TechnicalDataTable />
        <CertificationsAndApplications />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}
