import { Hero, Industries, ProductCategories, QuoteForm, TechnicalDownloads, WhyChooseUs } from "@/features/landing/sections";
import { Footer, Navbar } from "@/shared/layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCategories />
      <Industries />
      <WhyChooseUs />
      <TechnicalDownloads />
      <QuoteForm />
      <Footer />
    </>
  );
}
