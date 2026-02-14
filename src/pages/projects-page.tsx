import { SectionHeading } from "@/shared/ui/section-heading";
import { RouteSeo } from "@/shared/seo/route-seo";
import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { Card } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <>
      <RouteSeo
        title="Proyectos"
        description="Repositorios seleccionados de Miguel Bernal con enfoque en negocio, solución técnica e impacto."
        path="/projects"
      />
      <section className="section-shell">
        <div className="content-wrap space-y-12">
          <SectionHeading
            eyebrow="Proyectos"
            title="Casos y repositorios de trabajo"
            description="Cada proyecto resume contexto, solución implementada y el valor que aporta al negocio."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="premium-card p-5">
              <p className="text-sm font-semibold text-foreground">1. Contexto del proyecto</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Qué necesidad resuelve y para qué tipo de empresa o producto fue pensado.
              </p>
            </Card>
            <Card className="premium-card p-5">
              <p className="text-sm font-semibold text-foreground">2. Solución implementada</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Stack, enfoque técnico y decisiones clave explicadas de forma breve y clara.
              </p>
            </Card>
            <Card className="premium-card p-5">
              <p className="text-sm font-semibold text-foreground">3. Resultado e impacto</p>
              <p className="mt-2 text-sm text-muted-foreground">
                En qué aporta cada proyecto y cómo puede servir como referencia para nuevos desarrollos.
              </p>
            </Card>
          </div>
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
