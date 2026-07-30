import { navigationItems } from "../../data/landing-page";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <div className="brand" aria-label="FIX AI">
          <span className="brand__mark" aria-hidden="true">
            F
          </span>
          <span className="brand__name">
            FIX <b>AI</b>
          </span>
        </div>

        <nav className="site-nav" aria-label="メインナビゲーション">
          {navigationItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="compact"
              aria-label={`${item}（現在は画面遷移しません）`}
            >
              {item}
            </Button>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button
            className="site-header__login"
            variant="ghost"
            size="compact"
            aria-label="ログイン（現在は画面遷移しません）"
          >
            ログイン
          </Button>
          <Button
            size="compact"
            aria-label="無料で始める（現在は画面遷移しません）"
          >
            無料で始める
          </Button>
        </div>
      </div>
    </header>
  );
}
