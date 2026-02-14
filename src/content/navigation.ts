export type RouteNavItem = {
  label: string;
  to: string;
};

export type SectionNavItem = {
  label: string;
  id: string;
};

export const routeNavItems: RouteNavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/projects" },
  { label: "Sobre mí", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

export const homeSectionNavItems: SectionNavItem[] = [
  { label: "Servicios", id: "services" },
  { label: "Sobre mí", id: "about" },
  { label: "Habilidades", id: "skills" },
  { label: "Proyectos", id: "projects" },
  { label: "Experiencia", id: "experience" },
  { label: "Contacto", id: "contact" },
];
