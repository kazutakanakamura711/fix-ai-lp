import type { Feature } from "../../data/landing-page";
import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="feature-card" data-testid="feature-card">
      <div className={cn("feature-card__icon", `is-${feature.accent}`)}>
        <Icon aria-hidden="true" />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <p className="feature-card__action">
        詳しく見る <ArrowRight aria-hidden="true" />
      </p>
      <div className={cn("feature-card__glow", `is-${feature.accent}`)} />
    </article>
  );
}
