import {
  BarChart3,
  Blocks,
  Bot,
  Braces,
  CheckCircle2,
  GitPullRequest,
  ListChecks,
  MessageSquareCode,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "cyan" | "indigo";
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  suffix: string;
  cta: string;
  features: string[];
  recommended?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navigationItems = ["機能", "活用方法", "料金", "FAQ"];

export const features: Feature[] = [
  {
    title: "要件からタスクを自動生成",
    description:
      "曖昧なアイデアを、実装可能なチケットと優先順位に変換します。",
    icon: ListChecks,
    accent: "blue",
  },
  {
    title: "コードとテストを同時に作成",
    description:
      "コンテキストを理解し、実装とカバレッジを一度に進めます。",
    icon: Braces,
    accent: "purple",
  },
  {
    title: "プルリクエストを自動レビュー",
    description:
      "見落としやすい変更点を検出し、レビューの質と速度を底上げ。",
    icon: GitPullRequest,
    accent: "cyan",
  },
  {
    title: "プロジェクトの進捗を可視化",
    description:
      "AIの作業状況と開発のボトルネックを、いつでもひと目で。",
    icon: BarChart3,
    accent: "indigo",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "GitHubリポジトリを接続",
    description: "数クリックで、いつものプロジェクトと連携できます。",
    icon: Blocks,
  },
  {
    number: "02",
    title: "実装したい内容を入力",
    description: "要望を自然な言葉で伝えるだけ。細かい指示も不要です。",
    icon: MessageSquareCode,
  },
  {
    number: "03",
    title: "AIが実装とテストを実行",
    description: "作業内容を確認しながら、AIエージェントが前に進めます。",
    icon: Bot,
  },
];

export const metrics: Metric[] = [
  {
    value: "40%",
    label: "開発時間を削減",
    detail: "要件整理・実装の自動化",
  },
  {
    value: "50%",
    label: "レビュー時間を削減",
    detail: "PRの確認をAIが支援",
  },
  {
    value: "90%+",
    label: "テスト作成率",
    detail: "実装と同時にテストを生成",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "まずはAIエージェントを試したい個人へ",
    price: "¥0",
    suffix: "/ 月",
    cta: "無料で始める",
    features: ["月50タスクまで", "基本的なコード生成", "パブリックリポジトリ連携"],
  },
  {
    name: "Pro",
    description: "個人開発を、もっと速く進めたい人へ",
    price: "¥2,980",
    suffix: "/ 月",
    cta: "無料トライアルを始める",
    features: [
      "月500タスクまで",
      "テスト・レビュー支援",
      "プライベートリポジトリ連携",
      "優先サポート",
    ],
    recommended: true,
  },
  {
    name: "Team",
    description: "開発チームの生産性を高めたい組織へ",
    price: "¥12,980",
    suffix: "/ 月",
    cta: "無料トライアルを始める",
    features: [
      "メンバー5名まで",
      "タスク数無制限",
      "チーム進捗ダッシュボード",
      "管理者コントロール",
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: "どのような開発環境に対応していますか？",
    answer:
      "GitHubと連携し、主要なJavaScript／TypeScriptプロジェクトから利用できます。対応環境は順次拡大中です。",
  },
  {
    question: "自社のコードが学習に使われることはありますか？",
    answer:
      "いいえ。お客様のコードやプロジェクトデータを、公開モデルの学習に使用することはありません。",
  },
  {
    question: "既存のチームの開発フローに導入できますか？",
    answer:
      "できます。既存のGitHubリポジトリとプルリクエストの運用を保ったまま、必要な業務から使い始められます。",
  },
  {
    question: "AIが生成したコードはそのまま利用できますか？",
    answer:
      "生成内容は常に確認・編集できます。レビュー支援を併用することで、チームの品質基準に合わせて運用できます。",
  },
  {
    question: "無料プランに期間制限はありますか？",
    answer:
      "ありません。Freeプランは無料のまま、基本的なAIエージェント機能を試していただけます。",
  },
];

export const dashboardTasks = [
  {
    title: "要件を整理しています",
    meta: "完了",
    status: "完了",
    icon: CheckCircle2,
    tone: "success",
  },
  {
    title: "タスクを分解しました",
    meta: "完了",
    status: "完了",
    icon: CheckCircle2,
    tone: "success",
  },
  {
    title: "決済フォームを実装中",
    meta: "進行中",
    status: "実行中",
    icon: Bot,
    tone: "active",
  },
  {
    title: "テストケースを作成",
    meta: "待機中",
    status: "待機中",
    icon: Braces,
    tone: "waiting",
  },
] as const;
