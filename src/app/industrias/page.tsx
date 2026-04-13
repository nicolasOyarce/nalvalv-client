import type { Metadata } from "next";
import {
  ExpertiseBanner,
  IndustriesHero,
  IndustrySectors,
  TrustSignals,
} from "@/features/industrias/sections";
import { Footer, Navbar } from "@/shared/layout";

export const metadata: Metadata = {
  title: "Industrias | NALVALV Industrial Fluid Control",
  description:
    "Sectores industriales que NALVALV impulsa con soluciones de control de fluidos en Chile.",
};

export default function IndustriasPage() {
  return (
    <>
      <Navbar />
      <IndustriesHero />
      <IndustrySectors />
      <ExpertiseBanner />
      <TrustSignals />
      <Footer />
    </>
  );
}
