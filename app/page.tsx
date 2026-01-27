import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats-2";
import TeamSection from "@/components/team";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <Features />
    <IntegrationsSection />
    <StatsSection />
    <TeamSection />
    <FAQsThree />
    <FooterSection />
  </div>
  );
}
