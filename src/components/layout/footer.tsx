import { Button } from "../ui/button";

const footerItems = [
  "サービス情報",
  "利用規約",
  "プライバシーポリシー",
  "𝕏",
  "GitHub",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <div className="site-footer__brand">
          <div className="brand" aria-label="FIX AI">
            <span className="brand__mark" aria-hidden="true">
              F
            </span>
            <span className="brand__name">
              FIX <b>AI</b>
            </span>
          </div>
          <p>開発チームに、もうひとりの頼れる仲間を。</p>
        </div>

        <nav className="site-footer__links" aria-label="フッターナビゲーション">
          {footerItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              aria-label={`${item}（現在は画面遷移しません）`}
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
      <div className="page-container site-footer__bottom">
        <p>© 2025 FIX AI, Inc.</p>
        <p>Made for builders.</p>
      </div>
    </footer>
  );
}
