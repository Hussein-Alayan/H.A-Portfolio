import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectSection } from "@/components/project-section";
import { VolunteerSection } from "@/components/volunteer-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { DynamicBackground } from "@/components/dynamic-background";
import {
  AnimatedBackground,
  AnimatedShapes,
} from "@/components/animated-shapes";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <AnimatedShapes />
      <DynamicBackground />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <VolunteerSection />
      <ContactSection />
    </main>
  );
}
