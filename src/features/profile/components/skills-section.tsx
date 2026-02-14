import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { programmingPoints, skillCategories } from "@/content/skills";
import { SectionHeading } from "@/shared/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-shell-tight">
      <div className="content-wrap space-y-12">
        <SectionHeading
          eyebrow="Habilidades"
          title="Stack técnico por dominios"
          description="Capacidades que aplico para ejecutar proyectos de forma sólida, rápida y orientada a negocio."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.category} className="premium-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="border border-border/70 bg-secondary/60 px-2.5 py-1 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-5">
          <h3 className="text-center text-xl font-semibold text-foreground">Puntos estratégicos de programación</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programmingPoints.map((point) => (
              <Card key={point.title} className="premium-card p-5">
                <p className="text-base font-semibold text-foreground">{point.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
