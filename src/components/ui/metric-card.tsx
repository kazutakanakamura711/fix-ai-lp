import type { Metric } from "../../data/landing-page";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="metric-card" data-testid="metric-card">
      <p className="metric-card__value">{metric.value}</p>
      <h3>{metric.label}</h3>
      <p>{metric.detail}</p>
    </article>
  );
}
