import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-shell-tight">
      <div className="content-wrap space-y-12">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Trayectoria enfocada en ejecución y mejora continua"
          description="Experiencia profesional en desarrollo, soporte técnico y operaciones digitales con impacto medible."
          align="center"
        />

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-border/80 md:before:block">
          {experience.map((item) => (
            <Card key={`${item.company}-${item.period}`} className="premium-card relative p-6 md:ml-10">
              <span className="absolute -left-[2.35rem] top-8 hidden h-3 w-3 rounded-full border border-primary/60 bg-background md:block" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm text-primary">{item.company}</p>
                </div>
                <div className="text-sm text-muted-foreground sm:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              {item.current ? (
                <Badge className="mt-3 w-fit border border-accent/40 bg-accent/15 text-accent hover:bg-accent/15">Actual</Badge>
              ) : null}

              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="inline-flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
