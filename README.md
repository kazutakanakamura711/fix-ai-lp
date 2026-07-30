# FIX AI Landing Page

FIX AIのランディングページです。Vite、React、TypeScript、Tailwind CSSで構築しています。

## セットアップ

Node.js 20以降を推奨します。

```bash
npm ci
```

## 開発

```bash
npm run dev
```

## 検証

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
npm run validate
```

PlaywrightのChromiumを初回のみ導入し、E2Eテストを実行します。

```bash
npx playwright install chromium
npm run test:e2e
```

Desktop（1440px）とMobile（390px）の確認画像は、E2E実行時に
`e2e/screenshots/`へ出力されます。

## 本番ビルドの確認

```bash
npm run build
npm run preview
```

VercelではInstall Commandに`npm ci`、Build Commandに`npm run validate`、
Output Directoryに`dist`を使用します。環境変数は不要です。

## Gitフック

`pre-commit`では、lint-stagedによるステージ済みTypeScriptのlintと、
全Vitestテストを実行します。Playwrightとproduction buildは含みません。
