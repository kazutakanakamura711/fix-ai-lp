import { ArrowRight, Play } from "lucide-react";

import { Button } from "../ui/button";
import { HeroDashboard } from "./hero-dashboard";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="page-container hero-section__inner">
        <div className="hero-copy">
          <p className="hero-badge">
            <span aria-hidden="true" />
            開発チームのためのAIエージェント
          </p>
          <h1
            id="hero-title"
            aria-label="開発の面倒を、AIエージェントに。"
          >
            開発の面倒を、
            <br />
            <span>AIエージェント</span>に。
          </h1>
          <p className="hero-copy__description">
            仕様整理から実装、テスト、レビューまで。
            <br className="desktop-break" />
            FIX AIが開発チームの作業を支援します。
          </p>
          <div className="hero-copy__actions">
            <Button
              size="large"
              aria-label="無料で始める（現在は画面遷移しません）"
            >
              無料で始める
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              size="large"
              variant="secondary"
              aria-label="デモを見る（現在は動画を再生しません）"
            >
              <Play aria-hidden="true" />
              デモを見る
            </Button>
          </div>
          <p className="hero-copy__note">
            <span className="hero-avatars" aria-hidden="true">
              <i>Y</i>
              <i>K</i>
              <i>M</i>
            </span>
            <strong>1,200+</strong> の開発者がFIX AIを活用中
          </p>
        </div>

        <HeroDashboard />
      </div>
      <div className="logo-strip" aria-label="利用チームの例">
        <span>BUILT FOR TEAMS THAT SHIP</span>
        <div aria-hidden="true">
          <b>◇Vercel</b>
          <b>linear</b>
          <b>△STUDIO</b>
          <b>WAVE</b>
          <b>GitHub</b>
        </div>
      </div>
    </section>
  );
}
