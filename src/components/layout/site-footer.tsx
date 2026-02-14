import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { homeSectionNavItems, routeNavItems } from "@/content/navigation";
import { siteConfig, socialLinks } from "@/content/site";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  const sectionShortcuts = homeSectionNavItems.filter((item) =>
    ["services", "projects", "experience", "contact"].includes(item.id),
  );

  return (
    <footer className="border-t border-border/70 bg-card/30 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:px-10">
        <div className="space-y-3">
          <p className="font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-semibold text-transparent">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            Arquitectura frontend y experiencias web premium para empresas que quieren crecer con una presencia digital sólida.
          </p>
        </div>

        <nav className="space-y-3" aria-label="Enlaces de pie de página">
          <p className="text-sm font-semibold text-foreground">Páginas</p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {routeNavItems.map((item) => (
              <li key={item.to}>
                <Link className="transition-colors hover:text-foreground" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="space-y-3" aria-label="Atajos de navegación">
          <p className="text-sm font-semibold text-foreground">Atajos</p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {sectionShortcuts.map((item) => (
              <li key={item.id}>
                <Link className="transition-colors hover:text-foreground" to={`/#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Contacto</p>
          <div className="flex gap-2">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {year} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
