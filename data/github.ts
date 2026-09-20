export const githubSnapshot = {
  owner: "SinaQP",
  publicRepositoryCount: 48,
  forkCount: 2,
  verifiedAt: "2026-09-15",
  source: "https://api.github.com/users/SinaQP",
  methodology:
    "GitHub public profile total, cross-checked against the complete owner repository API response. The count includes public forks and excludes private, collaborative, and self-hosted repositories that are not publicly enumerable.",
  refreshStrategy:
    "Before publishing portfolio updates, compare publicRepositoryCount with GET /users/SinaQP and refresh verifiedAt. Re-curate presentation repositories only after reviewing their README and repository contents.",
} as const;

export type RepositoryTier = "major" | "research" | "library" | "product" | "utility";

export interface GithubRepository {
  name: string;
  category: string;
  categoryFa: string;
  tier: RepositoryTier;
  question: string;
  questionFa: string;
  detail: string;
  detailFa?: string;
  source: string;
}

export const githubRepositories: GithubRepository[] = [
  {
    name: "zaraamad-portal-be",
    category: "Systems",
    categoryFa: "سیستم‌ها",
    tier: "product",
    question: "Keeping domain rules and service boundaries explicit.",
    questionFa: "شفاف نگه‌داشتن قواعد دامنه و مرز سرویس‌ها.",
    detail: "A modular portal backend with customer workflows, migrations, and integration bridges.",
    source: "https://github.com/SinaQP/zaraamad-portal-be",
  },
  {
    name: "zaraamad-support-panel-be",
    category: "Systems",
    categoryFa: "سیستم‌ها",
    tier: "product",
    question: "Working across customer database boundaries.",
    questionFa: "کارکردن میان مرزهای پایگاه داده‌ی مشتریان.",
    detail: "Django support tooling with city-specific database routing and connection checks.",
    source: "https://github.com/SinaQP/zaraamad-support-panel-be",
  },
  {
    name: "ZaraamadQueryRunner",
    category: "Tools",
    categoryFa: "ابزارها",
    tier: "utility",
    question: "Making partial failure inspectable.",
    questionFa: "قابل‌بررسی کردن شکست جزئی.",
    detail: "SQL Server query automation with timeouts, categorized failures, and structured reports.",
    source: "https://github.com/SinaQP/ZaraamadQueryRunner",
  },
  {
    name: "rahtal-assistant",
    category: "Integration",
    categoryFa: "یکپارچه‌سازی",
    tier: "utility",
    question: "Connecting a tool to an existing system safely.",
    questionFa: "اتصال امن یک ابزار به سیستم موجود.",
    detail: "A focused API companion with authentication handling and explicit read/write behavior.",
    source: "https://github.com/SinaQP/rahtal-assistant",
  },
  {
    name: "QuerySmith",
    category: "Library · guarded AI",
    categoryFa: "کتابخانه · AI کنترل‌شده",
    tier: "major",
    question: "Can natural language reach SQL without giving up control?",
    questionFa: "می‌شه از زبان طبیعی به SQL رسید، بدون اینکه کنترل از دست بره؟",
    detail: "A Python package that turns Persian and English questions into guarded SQL Server SELECT queries, with schema scopes, access profiles, masking, and execution limits.",
    detailFa: "یک پکیج پایتون برای تبدیل سؤال‌های فارسی و انگلیسی به SELECT کنترل‌شده؛ با محدوده‌ی اسکیمای مشخص، سطح دسترسی، پوشاندن دیتا و محدودیت اجرا.",
    source: "https://github.com/SinaQP/QuerySmith",
  },
  {
    name: "Human-digital-twin-pipline",
    category: "ML systems · pipeline",
    categoryFa: "پایپ‌لاین ML",
    tier: "major",
    question: "What makes an ML prototype reproducible end to end?",
    questionFa: "یک پروتوتایپ ML چطور از اول تا آخر قابل‌تکرار می‌مونه؟",
    detail: "A physiological-data pipeline spanning ingestion, windowed feature extraction, baseline training, a model registry, tracked jobs, and prediction APIs.",
    detailFa: "دیتای فیزیولوژیک از ورود و استخراج ویژگی تا آموزش مدل، ثبت نسخه‌ها، پیگیری اجراها و API پیش‌بینی جلو می‌ره.",
    source: "https://github.com/SinaQP/Human-digital-twin-pipline",
  },
  {
    name: "modern-library",
    category: "Desktop system",
    categoryFa: "اپ دسکتاپ",
    tier: "product",
    question: "How should a local-first desktop app protect its data boundary?",
    questionFa: "دیتای یک اپ دسکتاپ چطور امن و محلی می‌مونه؟",
    detail: "A Persian RTL Electron library manager with SQLite and a restricted renderer-to-main-process interface.",
    source: "https://github.com/SinaQP/modern-library",
  },
  {
    name: "TypePlus",
    category: "Desktop · core library",
    categoryFa: "دسکتاپ · هسته‌ی مستقل",
    tier: "library",
    question: "What belongs in the typing engine, and what belongs at the system edge?",
    questionFa: "منطق تایپ کجا تموم می‌شه و مرز سیستم از کجا شروع می‌شه؟",
    detail: "An offline-first Tauri typing trainer with a framework-agnostic core, local analytics, and least-privilege native commands.",
    source: "https://github.com/SinaQP/TypePlus",
  },
  {
    name: "activity-insight-engine",
    category: "Data tool",
    categoryFa: "ابزار دیتا",
    tier: "utility",
    question: "How can raw activity logs become inspectable time-allocation evidence?",
    questionFa: "از لاگ خام چطور می‌شه فهمید زمان واقعاً کجا صرف شده؟",
    detail: "A layered Python pipeline for validation, chronology, Persian text normalization, classification, aggregation, and visualization.",
    source: "https://github.com/SinaQP/activity-insight-engine",
  },
  {
    name: "SpaceX-Falcon9-Prediction",
    category: "Data experiment",
    categoryFa: "آزمایش دیتا",
    tier: "research",
    question: "Which launch features help explain first-stage landing outcomes?",
    questionFa: "کدوم ویژگی‌های پرتاب برای پیش‌بینی فرود مرحله‌ی اول مهم‌ترن؟",
    detail: "A notebook collection covering data wrangling, SQL exploration, visualization, a dashboard, and Falcon 9 landing prediction.",
    source: "https://github.com/SinaQP/SpaceX-Falcon9-Prediction",
  },
  {
    name: "leximood",
    category: "Persian NLP library",
    categoryFa: "NLP فارسی",
    tier: "library",
    question: "How small and inspectable can Persian sentiment analysis be?",
    questionFa: "تحلیل احساسات فارسی چقدر می‌تونه سبک و قابل‌فهم بمونه؟",
    detail: "A lightweight Persian sentiment package with explicit normalization, lexicon scoring, keyword extraction, and deterministic output.",
    source: "https://github.com/SinaQP/leximood",
  },
  {
    name: "watermark-app",
    category: "Desktop utility",
    categoryFa: "ابزار دسکتاپ",
    tier: "utility",
    question: "Can repeat image work stay local, visual, and predictable?",
    questionFa: "می‌شه کار تکراری روی تصویر رو کاملاً محلی و قابل‌پیش‌بینی نگه داشت؟",
    detail: "A local-first Tauri image tool for interactive watermarking, reusable presets, and single or batch export.",
    source: "https://github.com/SinaQP/watermark-app",
  },
  {
    name: "SVM-Vs-QSVM",
    category: "Computing",
    categoryFa: "محاسبات",
    tier: "research",
    question: "Comparing approaches without assuming an advantage.",
    questionFa: "مقایسه‌ی روش‌ها بدون فرض‌کردن برتری.",
    detail: "Classical and quantum-kernel experiments with recorded evaluation and explicit limitations.",
    source: "https://github.com/SinaQP/SVM-Vs-QSVM",
  },
];

export const presentationRepositories = githubRepositories.filter((repository) =>
  [
    "QuerySmith",
    "Human-digital-twin-pipline",
    "modern-library",
    "TypePlus",
    "activity-insight-engine",
    "SpaceX-Falcon9-Prediction",
    "leximood",
    "watermark-app",
  ].includes(repository.name),
);
