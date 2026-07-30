import { Check } from "lucide-react";

import type { PricingPlan } from "../../data/landing-page";
import { cn } from "../../lib/utils";
import { Button } from "./button";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={cn("pricing-card", plan.recommended && "is-recommended")}
      data-testid="pricing-card"
    >
      {plan.recommended ? (
        <p className="pricing-card__badge">おすすめ</p>
      ) : null}
      <div>
        <h3>{plan.name}</h3>
        <p className="pricing-card__description">{plan.description}</p>
      </div>
      <div className="pricing-card__price">
        <strong>{plan.price}</strong>
        <span>{plan.suffix}</span>
      </div>
      <Button
        variant={plan.recommended ? "primary" : "secondary"}
        className="w-full"
        aria-label={`${plan.name}プランを選ぶ（現在は画面遷移しません）`}
      >
        {plan.cta}
      </Button>
      <ul aria-label={`${plan.name}プランの機能`}>
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
