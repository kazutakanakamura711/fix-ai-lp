import { features } from "../../data/landing-page";
import { FeatureCard } from "../ui/feature-card";
import { SectionHeading } from "../ui/section-heading";

export function FeaturesSection() {
  return (
    <section
      className="site-section features-section"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="page-container">
        <SectionHeading
          headingId="features-title"
          eyebrow="FEATURES"
          title="面倒な工程を、気持ちよく前へ。"
          description="FIX AIは、開発プロセスの中で時間を奪う作業を引き受け、あなたが本当に考えるべきことに集中できる状態をつくります。"
          align="left"
        />
        <div className="features-grid" aria-labelledby="features-title">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
