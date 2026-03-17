import HeroSection from "@/components/hero-section";
import ParallaxBackground from "@/components/ParallaxBackground";
import Features from "@/components/features-1";
import IntegrationsSection from "@/components/integrations-7";
import TeamSection from "@/components/team";
import TestimonialsSection from "@/components/testimonials";
import ContentSection from "@/components/content-3";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black transition-colors duration-500">
      <HeroSection />
      <TestimonialsSection />
      <ContentSection />
      <ParallaxBackground />
      <TeamSection />
    </main>
  );
}