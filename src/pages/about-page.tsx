import { RouteSeo } from "@/shared/seo/route-seo";
import { AboutSection } from "@/features/profile/components/about-section";
import { SkillsSection } from "@/features/profile/components/skills-section";
import { ExperienceSection } from "@/features/profile/components/experience-section";

export default function AboutPage() {
  return (
    <>
      <RouteSeo
        title="Sobre mí"
        description="Perfil profesional de Miguel Bernal: experiencia en arquitectura frontend, rendimiento web y ejecución orientada a negocio."
        path="/about"
      />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
}
