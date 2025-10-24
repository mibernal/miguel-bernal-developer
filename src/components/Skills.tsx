import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 }
      ],
      color: "from-primary to-accent"
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "MySQL", level: 85 }
      ],
      color: "from-accent to-primary"
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Jenkins", level: 70 },
        { name: "Git/GitHub", level: 90 },
        { name: "Visual Studio", level: 85 }
      ],
      color: "from-primary/80 to-accent/80"
    },
    {
      category: "Otros",
      skills: [
        { name: "Office Avanzado", level: 95 },
        { name: "Photoshop", level: 75 },
        { name: "Adobe Suite", level: 70 }
      ],
      color: "from-accent/80 to-primary/80"
    }
  ];

  const languages = ["Español (Nativo)", "Inglés (Intermedio)"];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Idiomas
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, idx) => (
              <Badge 
                key={idx} 
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/80 hover:bg-primary/20 border border-primary/20 transition-all"
              >
                {lang}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;