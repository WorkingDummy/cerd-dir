import HeroSection from "@/components/hero-section";
import ParallaxBackground from "@/components/ParallaxBackground";
import Features from "@/components/features-1";
import IntegrationsSection from "@/components/integrations-7";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black transition-colors duration-500">
      {/* 1. Hero at the top */}
      <HeroSection />

      {/* 2. Your scrolling background in the middle */}
      <ParallaxBackground />

      {/* 3. Your other feature sections */}
      <Features />
      <IntegrationsSection />
      <TeamSection />
    </main>
  );
}