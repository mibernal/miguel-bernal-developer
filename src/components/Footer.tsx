import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Miguel Angel Bernal
            </h3>
            <p className="text-sm text-muted-foreground">
              Ingeniero de Software especializado en desarrollo web y soluciones digitales innovadoras.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Mí
              </a>
              <a 
                href="#skills" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Habilidades
              </a>
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Proyectos
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Conecta Conmigo</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/mibernal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/miguel-angel-bernal-rincon-796b41113/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:miguelangelbernal1991@gmail.com"
                className="p-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Miguel Angel Bernal. Hecho con 
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            en Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;