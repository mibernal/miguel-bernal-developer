import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-full">
          <p className="text-sm text-muted-foreground">👋 Disponible para nuevos proyectos</p>
        </div>
        
        {/* Name and title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in duration-700">
            Miguel Angel Bernal
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
            Ingeniero de Software
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desarrollador Full Stack especializado en React, Angular y tecnologías modernas. 
            Transformando ideas en soluciones digitales innovadoras.
          </p>
        </div>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <p>Bogotá, Colombia</p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button 
            variant="hero"
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contáctame
            <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/30 hover:border-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
            <Github className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center pt-8">
          <a 
            href="https://github.com/miguelangelbernal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/miguelangelbernal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:miguelangelbernal1991@gmail.com"
            className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;