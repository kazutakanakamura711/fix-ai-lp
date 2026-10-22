# FIX AI Landing Page

FIX AIのランディングページです。Vite、React、TypeScript、Tailwind CSSで構築しています。

## セットアップ

Node.jsは `.nvmrc` に指定したバージョンを使用します。
`nvm` を導入済みの場合は、次の手順で指定バージョンをインストール・使用します。

```bash
nvm install
nvm use
npm ci
```

## 開発

```bash
npm run dev
```

Tailwind CSS 4は `@tailwindcss/vite` 経由でビルドします。
テーマとアニメーションは `src/styles/globals.css` で管理します。

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

Node.jsを更新する場合は `.nvmrc` を変更し、`npm ci`、
`npm run validate`、`npm run test:e2e` を確認してください。

## 本番ビルドの確認

```bash
npm run build
npm run preview
```

VercelではInstall Commandに`npm ci`、Build Commandに`npm run validate`、
Output Directoryに`dist`を使用します。環境変数は不要です。

VercelのNode.js設定は `24.x` を使用します。マイナー・パッチ更新はVercelが管理し、
ローカル用の `.nvmrc` とは別に扱います。
詳細は [VercelのNode.jsバージョン管理](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) を参照してください。

## Gitフック

`pre-commit`では、lint-stagedによるステージ済みTypeScriptのlintと、
全Vitestテストを実行します。Playwrightとproduction buildは含みません。
