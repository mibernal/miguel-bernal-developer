import type { CoreValue, Metric, ServiceOffer, SocialLink } from "@/content/types";

export const siteConfig = {
  name: "Miguel Angel Bernal",
  shortName: "MAB",
  role: "Ingeniero Freelance | Arquitectura Frontend, Python y Fintech",
  location: "Bogotá, Colombia",
  email: "miguelangelbernal1991@gmail.com",
  phone: "+57 312 419 3753",
  description:
    "Ingeniero freelance enfocado en construir productos web de alto impacto, automatizaciones con Python y soluciones orientadas a negocio y Fintech.",
  longDescription:
    "Diseño y ejecuto productos digitales con enfoque en arquitectura escalable, rendimiento web y objetivos de negocio. Trabajo con React, Angular, TypeScript, Node.js/Express, Python, Java y MongoDB; integro OpenAI API, Firebase y servicios REST; y desarrollo prototipos Fintech con MQL4/MQL5 y backtesting.",
  availability: "Disponible para proyectos freelance, consultoría técnica y ejecución por sprints con entregables claros.",
  siteUrl: "https://mibernal.github.io/miguel-bernal-developer/",
  defaultOgImage: "https://mibernal.github.io/miguel-bernal-developer/og-image.svg",
};

export const heroBadges: string[] = [
  "Arquitectura Frontend",
  "React + Angular + TypeScript",
  "Python + Node/Express + APIs",
  "Fintech · MQL4/MQL5 · Backtesting",
];

export const heroMetrics: Metric[] = [
  { label: "Modalidad actual", value: "Freelance" },
  { label: "Tipo de cliente", value: "Empresas y startups" },
  { label: "Enfoque vertical", value: "Fintech + Producto" },
  { label: "Stack clave", value: "React, Angular, Express, MongoDB, Python, MQL" },
];

export const deliveryPillars: string[] = [
  "Arquitectura escalable y mantenible",
  "Entrega orientada a métricas y negocio",
  "Integración de APIs e IA aplicada",
  "Performance, A11y y SEO técnico",
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mibernal",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/miguel-angel-bernal-rincon-796b41113/",
  },
  {
    label: "Email",
    href: "mailto:miguelangelbernal1991@gmail.com",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Soluciones orientadas a negocio",
    description: "Cada proyecto prioriza utilidad real, claridad comercial y evolución sostenible del producto.",
  },
  {
    title: "Arquitectura mantenible",
    description: "Diseño estructuras por dominios, componentes reutilizables y prácticas que reducen deuda técnica.",
  },
  {
    title: "Tecnología aplicada con criterio",
    description: "Combino frontend moderno, backend práctico, IA aplicada y exploración activa del sector Fintech.",
  },
];

export const serviceOffers: ServiceOffer[] = [
  {
    title: "Desarrollo Web Profesional",
    description: "Construcción o rediseño de sitios y aplicaciones web con React/TypeScript y enfoque en performance.",
    outcome: "Plataformas más claras, rápidas y listas para crecer.",
  },
  {
    title: "Automatización con Python",
    description: "Automatización de tareas, procesamiento de datos e integraciones técnicas para optimizar operación.",
    outcome: "Ahorro de tiempo operativo y mejor consistencia en procesos.",
  },
  {
    title: "Prototipos Fintech & Trading",
    description: "Desarrollo de pruebas técnicas en MQL4/MQL5, trading algorítmico y backtesting con soporte en Python.",
    outcome: "Base sólida para validar ideas en entornos financieros y algorítmicos.",
  },
];
