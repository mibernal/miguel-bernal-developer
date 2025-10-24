import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, Code2, Loader2, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  image?: string;
  github_url: string;
  demo_url?: string;
  technologies: string[];
  featured: true;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  featured?: false;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Proyectos destacados (añade tus proyectos aquí)
  const featuredProjects: FeaturedProject[] = [
    {
      id: "featured-1",
      name: "Nombre del Proyecto",
      description: "Descripción completa de tu proyecto destacado. Explica las características principales y la tecnología utilizada.",
      image: "/placeholder.svg", // Reemplaza con la ruta de tu imagen
      github_url: "https://github.com/mibernal/proyecto",
      demo_url: "https://tu-demo.com",
      technologies: ["React", "TypeScript", "Tailwind"],
      featured: true,
    },
        {
      id: "featured-1",
      name: "Nombre del Proyecto",
      description: "Descripción completa de tu proyecto destacado. Explica las características principales y la tecnología utilizada.",
      image: "/placeholder.svg", // Reemplaza con la ruta de tu imagen
      github_url: "https://github.com/mibernal/proyecto",
      demo_url: "https://tu-demo.com",
      technologies: ["React", "TypeScript", "Tailwind"],
      featured: true,
    },
        {
      id: "featured-1",
      name: "Nombre del Proyecto",
      description: "Descripción completa de tu proyecto destacado. Explica las características principales y la tecnología utilizada.",
      image: "/placeholder.svg", // Reemplaza con la ruta de tu imagen
      github_url: "https://github.com/mibernal/proyecto",
      demo_url: "https://tu-demo.com",
      technologies: ["React", "TypeScript", "Tailwind"],
      featured: true,
    },
    // Añade más proyectos destacados aquí
  ];

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mibernal/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('No se pudieron cargar los proyectos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const allProjects: (FeaturedProject | GitHubRepo)[] = [...featuredProjects, ...repos];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-lg">
            Proyectos destacados y repositorios de GitHub
          </p>
        </div>
        
        {loading && featuredProjects.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error && featuredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => {
              const isFeatured = 'featured' in project && project.featured;
              
              if (isFeatured) {
                const featuredProj = project as FeaturedProject;
                return (
                  <Card 
                    key={featuredProj.id}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] flex flex-col group overflow-hidden"
                  >
                    {/* Project Preview Image */}
                    {featuredProj.image ? (
                      <div className="relative h-48 overflow-hidden bg-secondary/50">
                        <img 
                          src={featuredProj.image} 
                          alt={featuredProj.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Destacado
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-primary/30" />
                        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Destacado
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {featuredProj.name}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {featuredProj.description}
                        </p>
                        
                        {featuredProj.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {featuredProj.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 text-xs bg-secondary/80 text-foreground border border-primary/20 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                        {featuredProj.demo_url && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 border-primary/30 hover:border-primary group/btn"
                            asChild
                          >
                            <a href={featuredProj.demo_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                              Demo
                            </a>
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`${featuredProj.demo_url ? 'flex-1' : 'w-full'} border-primary/30 hover:border-primary`}
                          asChild
                        >
                          <a href={featuredProj.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              } else {
                const repo = project as GitHubRepo;
                return (
                  <Card 
                    key={repo.id}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] flex flex-col group"
                  >
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {repo.name}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">
                        {repo.description || "Sin descripción disponible"}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-primary/70" />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {repo.topics.slice(0, 3).map((topic, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs bg-secondary/80 text-foreground border border-primary/20 rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                      {repo.homepage && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 border-primary/30 hover:border-primary group/btn"
                          asChild
                        >
                          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                            Demo
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`${repo.homepage ? 'flex-1' : 'w-full'} border-primary/30 hover:border-primary`}
                        asChild
                      >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </Card>
                );
              }
            })}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary" asChild>
            <a href="https://github.com/miguelangelbernal" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver todos en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;