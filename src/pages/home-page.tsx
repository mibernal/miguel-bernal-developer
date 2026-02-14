import { ContactSection } from "@/features/contact/components/contact-section";
import { AboutSection } from "@/features/profile/components/about-section";
import { ExperienceSection } from "@/features/profile/components/experience-section";
import { HeroSection } from "@/features/profile/components/hero-section";
import { ServicesSection } from "@/features/profile/components/services-section";
import { SkillsSection } from "@/features/profile/components/skills-section";
import { TestimonialsSection } from "@/features/profile/components/testimonials-section";
import { FeaturedProjectsSection } from "@/features/projects/components/featured-projects-section";
import { RouteSeo } from "@/shared/seo/route-seo";

export default function HomePage() {
  return (
    <>
      <RouteSeo
        title="Portafolio Profesional"
        description="Portafolio de Miguel Angel Bernal: ingeniería freelance, desarrollo web, Python, fintech y proyectos orientados a negocio."
        path="/"
        keywords="Miguel Bernal, Ingeniero Freelance, React, Python, Fintech, MQL4, MQL5"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
