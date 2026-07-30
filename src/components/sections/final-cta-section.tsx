import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "../ui/button";

export function FinalCtaSection() {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <div className="page-container">
        <div className="final-cta-card">
          <div className="final-cta-card__grid" aria-hidden="true" />
          <span className="final-cta-card__icon" aria-hidden="true">
            <Sparkles />
          </span>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2 id="final-cta-title">AIと一緒に、次の開発を始めよう。</h2>
          <p>
            セットアップは数分。あなたのリポジトリに、頼れる開発パートナーを。
          </p>
          <Button
            size="large"
            aria-label="無料でFIX AIを試す（現在は画面遷移しません）"
          >
            無料でFIX AIを試す
            <ArrowRight aria-hidden="true" />
          </Button>
          <small>クレジットカードは不要です</small>
        </div>
      </div>
    </section>
  );
}
