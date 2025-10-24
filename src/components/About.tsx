import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas"
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas",
      description: "Enfoque innovador para resolver problemas complejos"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva y liderazgo de equipos técnicos"
    },
    {
      icon: Zap,
      title: "Aprendizaje Continuo",
      description: "Actualización constante con las últimas tecnologías"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ingeniero de Software apasionado por crear experiencias digitales excepcionales
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Soy un Ingeniero de Software con experiencia en el desarrollo de aplicaciones web 
              y soluciones digitales. Mi expertise abarca desde el frontend con <span className="text-primary font-semibold">React</span> y 
              <span className="text-primary font-semibold"> Angular</span>, hasta el backend con <span className="text-primary font-semibold">Node.js</span> y 
              <span className="text-primary font-semibold"> Java</span>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Actualmente trabajo en <span className="text-accent font-semibold">O&P Ingeniería SAS</span> como Analista de Licitaciones 
              y Desarrollador Web, donde he desarrollado e implementado páginas web corporativas, tiendas virtuales 
              y brindado soporte técnico integral.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Me caracterizo por ser una persona <span className="text-primary font-semibold">comprometida</span>, 
              <span className="text-primary font-semibold"> creativa</span> y con gran capacidad de 
              <span className="text-primary font-semibold"> trabajo en equipo</span>. Siempre busco aprender nuevas 
              tecnologías y aplicar las mejores prácticas en mis proyectos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
              >
                <quality.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-sm">{quality.title}</h3>
                <p className="text-xs text-muted-foreground">{quality.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;