import { PortfolioMotion } from "@/components/PortfolioMotion";
import { ApproachSection } from "@/components/portfolio/ApproachSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Loader } from "@/components/portfolio/Loader";
import { PartnershipSection } from "@/components/portfolio/PartnershipSection";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { WorkSection } from "@/components/portfolio/WorkSection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <a className="skip-link" href="#main-content">
        Skip To Content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Loader />
      <PortfolioMotion />
      <SiteHeader />
      <HeroSection />
      <ApproachSection />
      <PartnershipSection />
      <CapabilitiesSection />
      <WorkSection />
      <ProfileSection />
      <ContactSection />
    </main>
  );
}
