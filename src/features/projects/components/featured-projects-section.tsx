import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { ProjectCaseStudyDialog } from "@/features/projects/components/project-case-study-dialog";
import { SectionHeading } from "@/shared/ui/section-heading";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="content-wrap space-y-12">
        <SectionHeading
          eyebrow="Proyectos"
          title="Repositorios destacados de mi trabajo"
          description="Selección de proyectos públicos con contexto, finalidad y resumen técnico orientado a negocio."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="premium-card flex h-full flex-col p-6">
              <div className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                {project.verification === "verified" ? "Verificado" : "En revisión"}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <p className="mt-3 text-xs text-foreground/80">
                <span className="font-semibold text-foreground">Contexto:</span> {project.clientContext}
              </p>
              <p className="mt-2 text-xs text-foreground/80">
                <span className="font-semibold text-foreground">Objetivo:</span> {project.businessGoal}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {project.results.map((result) => (
                  <div key={result.label} className="rounded-md border border-border/70 bg-background/60 px-2 py-2 text-center">
                    <p className="text-sm font-semibold text-foreground">{result.value}</p>
                    <p className="text-[10px] text-muted-foreground">{result.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-foreground/90">{project.impact}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Rol:</span> {project.role} ·{" "}
                <span className="font-medium text-foreground">Duración:</span> {project.duration}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border border-border/70 bg-secondary/70 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="mt-4 text-xs text-accent">{project.fitFor}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <ProjectCaseStudyDialog project={project} />
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                </Button>
                {project.liveUrl ? (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                ) : null}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="hero" asChild>
            <Link to="/projects">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
