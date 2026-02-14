import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProjectItem } from "@/content/types";

type ProjectCaseStudyDialogProps = {
  project: ProjectItem;
};

export function ProjectCaseStudyDialog({ project }: ProjectCaseStudyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Ver caso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-border/70 bg-background/95 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{project.title}</DialogTitle>
          <DialogDescription>
            {project.summary} {project.verification === "pending" ? "Esta ficha está en proceso de actualización." : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2 text-sm">
          <article className="rounded-md border border-border/70 bg-card/50 p-4">
            <h4 className="font-semibold text-foreground">Contexto y objetivo</h4>
            <p className="mt-2 text-muted-foreground">{project.clientContext}</p>
            <p className="mt-2 text-muted-foreground">
              <span className="font-medium text-foreground">Objetivo de negocio:</span> {project.businessGoal}
            </p>
          </article>

          <article className="rounded-md border border-border/70 bg-card/50 p-4">
            <h4 className="font-semibold text-foreground">Desafío</h4>
            <p className="mt-2 text-muted-foreground">{project.caseStudy.challenge}</p>
          </article>
          <article className="rounded-md border border-border/70 bg-card/50 p-4">
            <h4 className="font-semibold text-foreground">Solución</h4>
            <p className="mt-2 text-muted-foreground">{project.caseStudy.solution}</p>
          </article>
          <article className="rounded-md border border-border/70 bg-card/50 p-4">
            <h4 className="font-semibold text-foreground">Resultado</h4>
            <p className="mt-2 text-muted-foreground">{project.caseStudy.outcome}</p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {project.results.map((result) => (
                <div key={result.label} className="rounded-md border border-border/70 bg-background/50 px-2 py-2 text-center">
                  <p className="text-sm font-semibold text-foreground">{result.value}</p>
                  <p className="text-[10px] text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-accent">{project.fitFor}</p>
          </article>
        </div>

        <DialogFooter className="gap-2 sm:justify-start sm:space-x-0">
          <Button size="sm" asChild>
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
          <Button size="sm" variant="hero" asChild>
            <Link to="/contact">Quiero algo similar</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
