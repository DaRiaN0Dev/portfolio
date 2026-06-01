import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";

const SkillsSection = dynamic(() =>
  import("@/components/sections/skills").then((m) => ({ default: m.SkillsSection })),
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/experience").then((m) => ({ default: m.ExperienceSection })),
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/projects").then((m) => ({ default: m.ProjectsSection })),
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((m) => ({ default: m.ServicesSection })),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.TestimonialsSection })),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((m) => ({ default: m.ContactSection })),
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
