import {
  ContactHero,
  ContactInfoAndForm,
  FieldAssistanceBanner,
} from "@/features/contacto/sections";
import { Footer, Navbar } from "@/shared/layout";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <ContactHero />
        <ContactInfoAndForm />
        <FieldAssistanceBanner />
      </main>
      <Footer />
    </>
  );
}
