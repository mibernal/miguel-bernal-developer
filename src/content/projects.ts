import type { ProjectItem } from "@/content/types";

export const projects: ProjectItem[] = [
  {
    id: "docu-mind-ai",
    title: "Docu Mind AI",
    clientContext:
      "Plataforma SaaS para automatización de documentos empresariales con módulos web, API y procesamiento con IA.",
    businessGoal:
      "Reducir carga operativa en extracción, clasificación y gestión de documentos como facturas, contratos y recibos.",
    role: "Ingeniero Full Stack",
    duration: "Proyecto en evolución",
    fitFor: "Equipos que procesan alto volumen documental y necesitan automatización con IA.",
    verification: "verified",
    summary:
      "Monorepo con frontend React, backend Node/Express, Prisma y pipeline de procesamiento de documentos asistido por IA.",
    impact:
      "Consolida autenticación, gestión documental y procesamiento inteligente en una arquitectura escalable para producto SaaS.",
    results: [
      { label: "Tipo", value: "SaaS" },
      { label: "Arquitectura", value: "Monorepo" },
      { label: "Stack", value: "React + Node" },
    ],
    tags: ["React", "TypeScript", "Node.js", "Prisma", "AI"],
    repoUrl: "https://github.com/mibernal/docu-mind-ai",
    featured: true,
    caseStudy: {
      challenge:
        "Procesar documentos manualmente consume tiempo y aumenta errores en equipos operativos.",
      solution:
        "Se estructuró una plataforma con API, módulos de documentos, autenticación y flujo de procesamiento asistido por IA.",
      outcome:
        "El proyecto quedó preparado para operar como producto SaaS con base técnica sólida y escalable.",
    },
  },
  {
    id: "op-ingenieria",
    title: "O&P Ingeniería",
    clientContext:
      "Sitio corporativo para O&P Ingeniería S.A.S. con foco en portafolio, servicios, productos, clientes y aliados.",
    businessGoal:
      "Fortalecer presencia digital y facilitar contacto comercial con una propuesta visual y técnica profesional.",
    role: "Frontend Engineer",
    duration: "Proyecto corporativo iterativo",
    fitFor: "Empresas B2B que requieren web corporativa con catálogo y narrativa comercial clara.",
    verification: "verified",
    summary:
      "SPA corporativa en React + Vite, modular y optimizada, con secciones de catálogo, proyectos y contacto.",
    impact:
      "Centraliza la oferta comercial en un canal digital moderno y mantenible, listo para evolución continua.",
    results: [
      { label: "Tipo", value: "Corporativo" },
      { label: "Deploy", value: "GitHub Pages" },
      { label: "Stack", value: "React + Vite" },
    ],
    tags: ["React", "TypeScript", "Tailwind", "SEO", "PWA"],
    repoUrl: "https://github.com/mibernal/op-ingenieria",
    liveUrl: "https://mibernal.github.io/op-ingenieria/",
    featured: true,
    caseStudy: {
      challenge:
        "Mostrar servicios técnicos y proyectos de ingeniería sin perder claridad para el área comercial.",
      solution:
        "Se implementó arquitectura modular con contenidos por dominio, optimización visual y enfoque en conversión de contacto.",
      outcome:
        "El sitio funciona como vitrina corporativa profesional y como soporte comercial digital.",
    },
  },
  {
    id: "miguel-bernal-developer",
    title: "Miguel Bernal Developer",
    clientContext:
      "Portafolio profesional para marca personal técnica, experiencia y casos de trabajo.",
    businessGoal:
      "Comunicar propuesta de valor como ingeniero freelance y facilitar oportunidades de colaboración.",
    role: "Frontend Architect",
    duration: "Evolutivo",
    fitFor: "Profesionales y consultores que necesitan posicionamiento técnico y comercial en web.",
    verification: "verified",
    summary:
      "Sitio portfolio en React + TypeScript con enfoque en UX premium, accesibilidad, performance y SEO técnico.",
    impact:
      "Mejora la presentación comercial del perfil profesional y organiza mejor la narrativa de servicios y proyectos.",
    results: [
      { label: "Tipo", value: "Portfolio" },
      { label: "Deploy", value: "GitHub Pages" },
      { label: "Stack", value: "React + Tailwind" },
    ],
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui", "SEO"],
    repoUrl: "https://github.com/mibernal/miguel-bernal-developer",
    liveUrl: "https://mibernal.github.io/miguel-bernal-developer/",
    featured: true,
    caseStudy: {
      challenge:
        "Presentar experiencia técnica de forma diferenciada, comercial y mantenible en el tiempo.",
      solution:
        "Se diseñó una arquitectura por dominios con rutas claras, contenido data-driven y componentes reutilizables.",
      outcome:
        "El sitio quedó preparado para escalar contenido y sostener una presencia profesional consistente.",
    },
  },
  {
    id: "powerfitness",
    title: "PowerFitness",
    clientContext:
      "Proyecto e-commerce del sector fitness con catálogo, carrito, checkout y paneles administrativos.",
    businessGoal:
      "Soportar flujo de compra y gestión operativa (productos, pedidos, envíos y facturación) desde una sola app.",
    role: "Frontend Developer (Angular)",
    duration: "Proyecto iterativo",
    fitFor: "Comercios digitales que combinan catálogo público con módulos operativos internos.",
    verification: "verified",
    summary:
      "Aplicación Angular con integración Firebase, autenticación y módulos de administración para operación comercial.",
    impact:
      "Integra experiencia de cliente y funciones administrativas en un mismo ecosistema web.",
    results: [
      { label: "Tipo", value: "E-commerce" },
      { label: "Stack", value: "Angular + Firebase" },
      { label: "Módulos", value: "Cart + Dashboard" },
    ],
    tags: ["Angular", "Firebase", "TypeScript", "E-commerce"],
    repoUrl: "https://github.com/mibernal/PowerFitness",
    caseStudy: {
      challenge:
        "Unificar venta online y operación interna de pedidos sin fragmentar herramientas.",
      solution:
        "Se implementaron rutas de compra, autenticación, carrito/checkout y módulos de gestión operativa.",
      outcome:
        "El proyecto cubre el ciclo principal de venta y administración dentro de una misma aplicación.",
    },
  },
  {
    id: "paola-neuro-hub",
    title: "Paola Neuro Hub",
    clientContext:
      "Repositorio público incluido en el portafolio mientras se completa la documentación funcional del caso.",
    businessGoal: "Mostrar la línea de trabajo del proyecto y mantener trazabilidad al código fuente.",
    role: "En revisión",
    duration: "Por documentar",
    fitFor: "Si quieres conocer el caso completo, puedo compartirte el detalle por contacto directo.",
    verification: "pending",
    summary:
      "Proyecto incorporado al portafolio con su repositorio público y ficha en actualización.",
    impact:
      "Aporta visibilidad de experiencia en proyectos reales sin atribuir resultados que aún no estén documentados.",
    results: [
      { label: "Estado", value: "En revisión" },
      { label: "Fuente", value: "GitHub" },
      { label: "Ficha", value: "En actualización" },
    ],
    tags: ["En revisión", "GitHub"],
    repoUrl: "https://github.com/mibernal/paola-neuro-hub",
    caseStudy: {
      challenge: "La documentación pública disponible aún es breve para detallar alcance, arquitectura y resultados.",
      solution:
        "Se publica la referencia al repositorio y se deja la ficha en actualización hasta completar una revisión más profunda.",
      outcome: "Proyecto visible en portafolio con información prudente y alineada a datos confirmables.",
    },
  },
  {
    id: "ic-mensajeria-1",
    title: "IC Mensajería 1",
    clientContext:
      "Repositorio público incorporado al portafolio mientras se completa la ficha funcional del proyecto.",
    businessGoal: "Mantener trazabilidad al código y mostrar esta línea de trabajo dentro del portafolio.",
    role: "En revisión",
    duration: "Por documentar",
    fitFor: "Si te interesa este caso, te comparto detalle funcional y técnico por contacto.",
    verification: "pending",
    summary:
      "Proyecto publicado con acceso al código fuente y con resumen en proceso de actualización.",
    impact:
      "Permite mostrar continuidad de experiencia y mantener un portafolio transparente sobre el estado de cada caso.",
    results: [
      { label: "Estado", value: "En revisión" },
      { label: "Fuente", value: "GitHub" },
      { label: "Ficha", value: "En actualización" },
    ],
    tags: ["En revisión", "GitHub"],
    repoUrl: "https://github.com/mibernal/ic-mensajeria-1",
    caseStudy: {
      challenge: "Aún falta consolidar documentación funcional para presentar el caso con mayor profundidad comercial.",
      solution:
        "Se incluye el repositorio público y se marca la ficha como en actualización hasta cerrar la revisión completa.",
      outcome: "Caso visible en el portafolio con comunicación clara sobre su estado actual.",
    },
  },
];
