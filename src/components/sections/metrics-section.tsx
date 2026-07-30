import { metrics } from "../../data/landing-page";
import { MetricCard } from "../ui/metric-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function MetricsSection() {
  return (
    <section
      className="metrics-section"
      id="metrics"
      aria-labelledby="metrics-title"
    >
      <div className="page-container metrics-section__inner">
        <div className="metrics-section__copy">
          <p className="eyebrow">IMPACT</p>
          <h2
            id="metrics-title"
            aria-label="速さだけじゃない。開発の余白が生まれる。"
          >
            速さだけじゃない。
            <br />
            <span>開発の余白</span>が生まれる。
          </h2>
          <p>
            小さな待ち時間や手戻りを減らすことで、チームはより良い設計とプロダクト体験に時間を使えます。
          </p>
          <Button
            variant="secondary"
            aria-label="活用方法を見る（現在は画面遷移しません）"
          >
            活用方法を見る
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
