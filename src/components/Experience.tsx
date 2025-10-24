import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "O&P Ingeniería SAS",
      position: "Analista de Licitaciones – Desarrollador Web",
      period: "Junio 2016 - Actualidad",
      location: "Bogotá, Colombia",
      description: [
        "Análisis de procesos licitatorios (jurídico, técnico y económico)",
        "Desarrollo e implementación de página web corporativa y tienda virtual",
        "Elaboración de bases de datos y estructuración de proyectos",
        "Soporte técnico corporativo y atención a incidentes",
        "Actualización de hardware y software interno"
      ],
      current: true
    },
    {
      company: "JazzPlat Colombia SAS",
      position: "Agente de Soporte Técnico",
      period: "Febrero 2015 - Diciembre 2015",
      location: "Bogotá, Colombia",
      description: [
        "Soporte técnico telefónico para servicios de telefonía móvil",
        "Atención de líneas fijas con ADSL y Fibra Óptica",
        "Resolución de incidencias técnicas"
      ],
      current: false
    },
    {
      company: "Virgin Mobile Colombia",
      position: "Rock Agent - Asesor Servicio al Cliente",
      period: "Junio 2014 - Noviembre 2014",
      location: "Bogotá, Colombia",
      description: [
        "Servicio al cliente telefónico",
        "Cumplimiento de metas y objetivos comerciales",
        "Bonificaciones por desempeño excepcional"
      ],
      current: false
    },
    {
      company: "Serviola - Contact Center Americas",
      position: "Team Leader - Asesor Servicio al Cliente",
      period: "Marzo 2013 - Abril 2014",
      location: "Bogotá, Colombia",
      description: [
        "Atención telefónica en área de reclamos, PQR y soporte técnico de ETB",
        "Manejo de grupos de 15 a 20 asesores",
        "Control de indicadores y niveles de servicio",
        "Venta de productos de telefonía e internet"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground text-lg">
            Mi trayectoria laboral y logros
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                <Card className="md:ml-20 p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-1 text-xs bg-primary/20 text-primary border border-primary/30 rounded-full">
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-primary/90">{exp.company}</p>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center gap-2 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        <p>{exp.period}</p>
                      </div>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-accent mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;