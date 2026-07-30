import { pricingPlans } from "../../data/landing-page";
import { PricingCard } from "../ui/pricing-card";
import { SectionHeading } from "../ui/section-heading";

export function PricingSection() {
  return (
    <section
      className="site-section pricing-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="page-container">
        <SectionHeading
          headingId="pricing-title"
          eyebrow="PRICING"
          title="チームに合った、ちょうどいい始め方。"
        />
        <div className="pricing-grid" aria-labelledby="pricing-title">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
