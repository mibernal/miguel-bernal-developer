import { CheckCircle2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { coreValues, siteConfig } from "@/content/site";
import { stackHighlights } from "@/content/skills";
import { SectionHeading } from "@/shared/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="content-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Perfil"
            title="Ingeniería aplicada a productos web y automatización"
            description="Frontend moderno, Python y exploración Fintech para construir soluciones útiles y mantenibles."
          />
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{siteConfig.description}</p>

          <div className="space-y-3">
            {stackHighlights.map((item) => (
              <p key={item} className="inline-flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {coreValues.map((value) => (
            <Card key={value.title} className="premium-card h-full p-5">
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
