import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { FaqSection } from "../components/sections/faq-section";
import { FeaturesSection } from "../components/sections/features-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";
import { HeroSection } from "../components/sections/hero-section";
import { HowItWorksSection } from "../components/sections/how-it-works-section";
import { MetricsSection } from "../components/sections/metrics-section";
import { PricingSection } from "../components/sections/pricing-section";

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        メインコンテンツへ移動
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MetricsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
