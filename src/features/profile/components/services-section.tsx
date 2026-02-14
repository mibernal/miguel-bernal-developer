import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serviceOffers } from "@/content/site";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell section-shell-tight">
      <div className="content-wrap space-y-10">
        <SectionHeading
          eyebrow="Servicios"
          title="Qué puedo construir para tu negocio"
          description="Servicios orientados a impacto comercial, calidad técnica y escalabilidad real del producto."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {serviceOffers.map((offer) => (
            <Card key={offer.title} className="premium-card flex h-full flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.description}</p>
              <p className="mt-4 text-sm font-medium text-accent">{offer.outcome}</p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
