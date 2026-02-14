import type { ProgrammingPoint, SkillCategory } from "@/content/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & Web",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Angular", "HTML5", "CSS3", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend, APIs & Data",
    skills: ["Node.js", "Express.js", "MongoDB", "Python", "Java", "REST APIs", "MySQL", "Firebase", "OpenAI API"],
  },
  {
    category: "Fintech & Trading Algorítmico",
    skills: ["MQL4", "MQL5", "Algorithmic trading", "Backtesting", "Trading Bots", "Data Analysis"],
  },
  {
    category: "DevOps, Calidad & Entrega",
    skills: ["Git / GitHub", "Docker", "Jenkins", "Performance Web", "A11y", "SEO Técnico", "Arquitectura Modular"],
  },
];

export const stackHighlights: string[] = [
  "React, Angular + TypeScript + JavaScript (ES6+) para productos web escalables",
  "Node.js/Express, Python, Java y MongoDB para servicios, automatización e integraciones",
  "Firebase (Auth, Firestore, Hosting), OpenAI API y MySQL en proyectos reales",
  "MQL4 / MQL5 para trading algorítmico y backtesting",
];

export const programmingPoints: ProgrammingPoint[] = [
  {
    title: "Arquitectura modular y escalable",
    description:
      "Organizo aplicaciones por dominios y rutas claras para acelerar mantenimiento, reducir deuda técnica y escalar funcionalidades sin fricción.",
  },
  {
    title: "Integración API robusta",
    description:
      "Diseño y consumo REST APIs con Node.js/Express, tipado estricto y manejo de errores orientado a estabilidad de producto.",
  },
  {
    title: "Automatización con Python",
    description:
      "Construyo scripts y flujos de automatización para tareas operativas, procesamiento de datos y soporte de decisiones técnicas.",
  },
  {
    title: "Fintech y trading algorítmico",
    description:
      "Desarrollo robots en MQL4/MQL5 con enfoque en lógica de ejecución, gestión de riesgo y ciclos de backtesting para validar estrategias.",
  },
  {
    title: "Entrega continua y despliegue",
    description:
      "Aplico Git/GitHub, Docker y Jenkins para estandarizar entornos, mejorar trazabilidad y acelerar entregas confiables.",
  },
  {
    title: "Calidad web integral",
    description:
      "Trabajo con foco en rendimiento (LCP/CLS), accesibilidad y SEO técnico para elevar la conversión y la experiencia real del usuario.",
  },
];
