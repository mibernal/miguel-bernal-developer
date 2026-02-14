import { ContactSection } from "@/features/contact/components/contact-section";
import { RouteSeo } from "@/shared/seo/route-seo";

export default function ContactPage() {
  return (
    <>
      <RouteSeo
        title="Contacto"
        description="Contacto directo para rediseños web, arquitectura frontend y mejoras de rendimiento orientadas a conversión."
        path="/contact"
      />
      <ContactSection />
    </>
  );
}
