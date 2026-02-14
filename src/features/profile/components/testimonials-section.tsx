import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/shared/ui/section-heading";

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoPlay = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => window.clearInterval(autoPlay);
  }, [api]);

  return (
    <section id="testimonials" className="section-shell section-shell-tight">
      <div className="content-wrap space-y-12">
        <SectionHeading
          eyebrow="Colaboraciones"
          title="Tipo de proyectos en los que aporto valor"
          description="Resumen de líneas de trabajo y enfoque técnico aplicado en colaboraciones recientes."
          align="center"
        />

        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-10">
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full" aria-label="Testimonios">
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={`${item.name}-${item.company}`}>
                  <Card className="premium-card min-h-[240px] p-6 sm:p-8">
                    <Quote className="h-7 w-7 text-primary/70" />
                    <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground sm:text-lg">
                      “{item.quote}”
                    </blockquote>
                    <footer className="mt-6">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.role} · {item.company}
                      </p>
                    </footer>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 border-border/80 bg-background/80 sm:-left-6" />
            <CarouselNext className="-right-2 border-border/80 bg-background/80 sm:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
