import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { ProjectCaseStudyDialog } from "@/features/projects/components/project-case-study-dialog";

type ProjectsGridProps = {
  featuredOnly?: boolean;
};

export function ProjectsGrid({ featuredOnly = false }: ProjectsGridProps) {
  const items = featuredOnly ? projects.filter((project) => project.featured) : projects;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((project) => (
        <Card key={project.id} className="premium-card flex h-full flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            {project.verification === "verified" ? (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary">
                Verificado
              </span>
            ) : (
              <span className="rounded-full border border-destructive/40 bg-destructive/10 px-2 py-1 text-[11px] font-semibold text-destructive">
                En revisión
              </span>
            )}
          </div>

          <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
          <p className="mt-3 text-xs text-foreground/85">
            <span className="font-semibold text-foreground">Meta:</span> {project.businessGoal}
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
            {project.role} · {project.duration}
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
  );
}
