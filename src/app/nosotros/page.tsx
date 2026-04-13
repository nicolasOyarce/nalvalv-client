import type { Metadata } from "next";
import {
  AboutHero,
  CertificationsSection,
  FinalCtaSection,
  MissionVisionSection,
  TeamSection,
  ValuesGridSection,
  WhoWeAreSection,
} from "@/features/nosotros/sections";
import { Footer, Navbar } from "@/shared/layout";

export const metadata: Metadata = {
  title: "Nosotros | NALVALV Industrial Fluid Control",
  description:
    "Trayectoria, valores y autoridad tecnica de NALVALV en control de fluidos para industria.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WhoWeAreSection />
      <MissionVisionSection />
      <ValuesGridSection />
      <CertificationsSection />
      <TeamSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
