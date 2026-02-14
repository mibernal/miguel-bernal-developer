import { ArrowRight, CheckCircle2, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { deliveryPillars, heroBadges, heroMetrics, siteConfig, socialLinks } from "@/content/site";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function HeroSection() {
  const heroImageSrc = `${import.meta.env.BASE_URL}hero-enterprise.svg`;

  return (
    <section id="home" className="section-shell hero-shell relative overflow-hidden">
      <div className="content-wrap grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-10 reveal-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
            Disponible para proyectos estratégicos y consultoría técnica
          </div>

          <div className="space-y-6">
            <h1 className="font-display text-balance text-[2.15rem] font-bold leading-tight sm:text-5xl lg:text-6xl">
              Ingeniería digital premium para productos web, automatización y soluciones Fintech.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{siteConfig.longDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="border border-border/70 bg-secondary/60 px-3 py-1.5 text-[11px] font-medium tracking-[0.02em]"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3.5">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contactar</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-border/70 pt-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              {siteConfig.location}
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label as keyof typeof socialIconMap];
                if (!Icon) {
                  return null;
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-card/40 text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="premium-card reveal-fade-up reveal-delay-2 grid gap-5 p-5 sm:p-6" aria-label="Métricas clave">
          <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/70">
            <img
              src={heroImageSrc}
              alt="Panel visual de soluciones digitales y arquitectura web."
              width={1120}
              height={860}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-lg border border-border/80 bg-background/85 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur">
              Soluciones digitales con enfoque en resultados, escalabilidad y calidad.
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Snapshot profesional</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-border/70 bg-background/75 p-4">
                <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <ul className="grid gap-2 text-sm text-muted-foreground">
            {deliveryPillars.map((point) => (
              <li key={point} className="inline-flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
