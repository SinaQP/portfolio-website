type ProjectRecord = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  architecture: string;
  technology: string[];
  contribution: string;
  challenges: string;
  lessons: string;
  image?: string;
  links: { label: string; url: string }[];
  architectureNodes: string[];
  evidenceNote?: string;
};

const records: ProjectRecord[] = [
  {
    slug: "rahtal",
    number: "01",
    name: "Rahtal",
    category: "Enterprise systems · Full-stack and project management",
    summary:
      "Connecting organizational work, priorities, and performance through software that fits the way teams operate.",
    overview:
      "Rahtal is an enterprise management platform concerned with organizational alignment, priorities, and day-to-day work. I worked on it for a long time as a full-stack developer, and since October 2026 I also manage the project: I work with the product owner, hold the overall design, and run the meetings where we decide which features to add and how.",
    problem:
      "Enterprise workflows rarely stop at one interface: people need to find their tasks, understand context, and record work through connected tools. That integration must respect the existing API contract, authentication lifecycle, and the difference between a safe read and a consequential write.",
    architecture:
      "The public companion separates an HTTP client, authentication, task and performance services, and a small MCP interface. It connects to the existing Rahtal API as an independent application, with tokens kept in process memory and response errors translated at the boundary.",
    technology: ["Python", "HTTPX", "REST APIs", "MCP", "Django", "React"],
    contribution:
      "Besides managing the project, I keep working on it as a full-stack developer. I also design the AI features planned for Rahtal: SageQL, my open-source reporting SDK, is one of the products we plan to build into it, and my public integration companion is version 0.1 of an in-product agent. The companion shows the engineering concerns in code: explicit service boundaries, authenticated API access, and focused tests around task retrieval and performance submission.",
    challenges:
      "An expired session, malformed response, and an unavailable server need different handling. Performance submission also introduces ambiguity when a network failure follows a write, so the integration deliberately avoids automatically retrying an uncertain submission.",
    lessons:
      "A failed read and an uncertain write are different responsibilities, and an integration should treat them differently: a read can simply be retried, while a write that may already have happened needs a deliberate decision.",
    image: "/Rahtal-project.png",
    links: [
      {
        label: "Integration source",
        url: "https://github.com/SinaQP/rahtal-assistant",
      },
    ],
    architectureNodes: [
      "Connected tools",
      "Integration services",
      "Rahtal API",
      "Enterprise workflows",
    ],
    evidenceNote:
      "The Rahtal platform itself is a private company system. The public source is the integration companion, the first version of a planned in-product agent; the diagram shows that integration boundary.",
  },
  {
    slug: "danobin",
    number: "02",
    name: "Danobin",
    category: "Startup · Technical leadership",
    summary:
      "CTO experience, connecting startup responsibility with hands-on work on the product's core services.",
    overview:
      "Danobin was a startup where I served as CTO, combining technical direction with hands-on work on the core product. The work spanned product exploration, shared domain documentation, a core service, and a collaborative infographic interface.",
    problem:
      "A developing product needs its account, subscription, and credit behavior to stay coherent as features change: plan changes, recurring credit updates, and communication with users all have to agree.",
    architecture:
      "The core service uses Django modules for users, subscriptions, and credits, with background tasks and a shared email service, alongside a separate Next.js interface.",
    technology: ["Python", "Django", "Background tasks", "Next.js", "React"],
    contribution:
      "Alongside the CTO role, I implemented subscription-plan changes and credit management, documented the product's domain events, and built an email service with templates, asynchronous tasks, and tests.",
    challenges:
      "Subscription changes affect credit allocation and scheduled work. Email delivery introduces a separate failure boundary. These concerns require coordination across the product's core behavior, beyond a single screen or endpoint.",
    lessons:
      "The CTO role joined two kinds of work: deciding how the product's core should behave, and building those parts myself.",
    links: [],
    architectureNodes: [
      "Product workflows",
      "Accounts & plans",
      "Credits",
      "Background services",
    ],
    evidenceNote:
      "Danobin's repositories are private; the diagram shows component responsibilities.",
  },
  {
    slug: "zaraamad",
    number: "02",
    name: "Zaraamad",
    category: "Municipal revenue platform · Full-stack",
    summary:
      "The revenue office of a municipality, as software: used by 50+ municipalities, with more than 84,000 bills issued in a year.",
    overview:
      "Zaraamad is the revenue office of an Iranian municipality, as software. Staff open case files for shops, properties, building permits, vehicles and burials, calculate each year's duty with that city's own rules, issue barcoded bills, and collect payment at the counter, online or through the bank. Zaravand runs one install per city; more than 50 municipalities use it, and in Iranian year 1404 the cities reporting to the central portal issued more than 84,000 bills.",
    problem:
      "Every municipality calculates its duties with its own formula, and the formulas change from year to year. Bills are legal and financial records, so a change for one city must never move another city's amounts, and staff need to see exactly why a bill came out at a given value.",
    architecture:
      "A Django and Django REST Framework backend. Duty calculation sits behind an abstract billing formula with one plugin per city and a dynamic data schema for city-specific inputs, so a new city does not change shared code. Bank statements enter through a reconciliation module; Django support tooling routes connections to each city's database, and a Python query runner produces reports across SQL Server instances.",
    technology: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "SQL Server",
      "pytest",
      "Docker",
    ],
    contribution:
      "I worked on it full stack and am its top contributor across frontend and backend, with 36% of all commits (41% of the backend, 23% of the frontend), from 2023 to 2026. I built the business-duty subsystem, the platform's largest revenue module, and its tariff-driven billing engine, with a step-by-step debug view of each bill's calculation. I built bank reconciliation, which reads the bank's payment files, matches every payment to a bill and sorts mismatches into seven states that staff can fix in bulk. I wrote the burial subsystem on my own, built the general-income, non-union trade and transferred-income subsystems, and made bill search and reports faster by removing N+1 queries and adding batching and caching.",
    challenges:
      "Formulas depend on many inputs: tariff tables, location grades, job coefficients and debts from earlier years. I covered each city's rules with characterization tests before changing them, so a refactor could prove that existing bills kept their amounts.",
    lessons:
      "When every customer has its own rules, the rules should become plugins with their own tests, and the shared code should only know the contract between them.",
    image: "/Zaraamad-project.png",
    links: [
      {
        label: "Database tooling",
        url: "https://github.com/SinaQP/ZaraamadQueryRunner",
      },
      {
        label: "Support backend",
        url: "https://github.com/SinaQP/zaraamad-support-panel-be",
      },
    ],
    architectureNodes: [
      "Case files",
      "City formula plugins",
      "Bills & payments",
      "Bank reconciliation",
    ],
    evidenceNote:
      "The main Zaraamad backend is a private company system. Contribution figures come from its git history; the linked support and query-runner repositories are public parts of the platform.",
  },
  {
    slug: "zaravand-portal",
    number: "03",
    name: "Zaravand Portal",
    category: "Platform backend · Built from scratch",
    summary:
      "The central place where Zaravand manages its municipality customers: services, prices, subscriptions, tickets and income reports.",
    overview:
      "Zaravand sells Zaraamad to municipalities and runs one install per city. The portal is where the company manages those customers: who they are, which services they buy and at what price, their subscriptions, their support tickets and their income reports. It serves 56 active municipalities and several other organisations.",
    problem:
      "More than fifty separately deployed city installs, each with its own address and version, have to be managed from one place. Subscription data must stay correct when a city is offline, and each city's revenue figures have to be collected into one consistent picture.",
    architecture:
      "FastAPI modules with explicit controllers, services and schemas over SQLAlchemy 2, Alembic and PostgreSQL. Bridge clients run health and capability checks against each city's Zaraamad install and manage subscriptions remotely; read-only SQL Server connections collect each city's income summaries.",
    technology: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Pydantic",
      "SQL Server",
      "pytest",
    ],
    contribution:
      "I started the repository and built the backend from scratch: by release 1.5.0, about ten weeks later, I had written 89% of its code, with 177 tests. That covers customers and users, the service catalog and per-customer pricing, SMS one-time-password login with verification of Django-issued tokens, the ticket workflow, the bridge to city installs, and the import of every city's income reports through a tool that runs one query against all city databases. I also built several frontend screens.",
    challenges:
      "Each city install can be unreachable or on a different version, so the bridge checks capabilities first, caches subscription lookups and keeps a failure in one city from affecting the others.",
    lessons:
      "A central system over many independent installs has to treat every remote call as something that can fail, and make that failure visible instead of hiding it.",
    links: [
      {
        label: "Portal backend",
        url: "https://github.com/SinaQP/zaraamad-portal-be",
      },
    ],
    architectureNodes: [
      "Customers & pricing",
      "Tickets & sign-in",
      "City bridge",
      "Income reports",
    ],
    evidenceNote:
      "Code share is from the original git history up to release 1.5.0; a later re-import into a fresh history credits a teammate in current blame.",
  },
  {
    slug: "zarvand",
    number: "03",
    name: "Zarvand",
    category: "Citizen services · Product workflows",
    summary:
      "Making municipal services understandable through connected account, billing, and citizen-request workflows.",
    overview:
      "Zarvand is a citizen-services interface for municipal information and everyday administrative tasks. The public frontend demonstrates account access, bill and debt views, service requests, notifications, and profile management in a Persian-language product.",
    problem:
      "A citizen needs to move between personal information, outstanding bills, and support requests without losing the context of their account. Those screens depend on consistent session behavior, clear request states, and a coherent connection to backend APIs.",
    architecture:
      "The React and TypeScript frontend groups API functions by domain and keeps environment configuration separate from the interface. A deterministic demonstration service can supply those API boundaries from local storage, allowing the documented user flows to run without a connected backend.",
    technology: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "REST APIs",
      "Sass",
    ],
    contribution:
      "I worked on Zarvand as a frontend developer. The public demonstration contains the interface's domain API modules, session handling, and billing flows.",
    challenges:
      "A bill's status, the account dashboard, and the transaction view need to tell the same story after an interaction. The demonstration layer also needs to preserve believable state across refreshes while keeping its data source replaceable at the existing API boundary.",
    lessons:
      "Separating data access from presentation makes a product workflow easy to demonstrate and inspect; in the demo, simulated payments stand in for the real payment provider.",
    image: "/Zarvand-project.png",
    links: [
      {
        label: "Frontend source",
        url: "https://github.com/SinaQP/zarvand-fe-demo",
      },
      {
        label: "Demo architecture",
        url: "https://github.com/SinaQP/zarvand-fe-demo/blob/stage/docs/demo-mode.md",
      },
    ],
    architectureNodes: [
      "Citizen interface",
      "Domain API layer",
      "Service boundary",
      "Account workflows",
    ],
    evidenceNote:
      "The public repository runs in a demonstration mode with local data and simulated payments.",
  },
  {
    slug: "tireban",
    number: "04",
    name: "Tireban",
    category: "Product engineering · Operational software",
    summary:
      "A product for following tire condition and maintenance history across heavy-vehicle fleets.",
    overview:
      "Tireban is a fleet tire management product for large mining vehicles. It brings together tire conditions, inspections, maintenance, replacements, and incidents so that a tire's history can be understood in the context of the fleet.",
    problem:
      "The current condition of a tire is only one part of an operational decision; its inspection and maintenance history matters too. The product's purpose is to give those events a connected view instead of leaving each observation isolated from the asset's lifecycle.",
    architecture:
      "Tireban is organized around the relationship between vehicles, tires, lifecycle events, and fleet-level views; the diagram shows that domain model.",
    technology: [],
    contribution:
      "I worked on Tireban as a frontend developer on the product's web interface.",
    challenges:
      "This domain connects events recorded over time to assets that move through inspections, maintenance, and replacement. The important product question is how to preserve that history while making the present state of an individual tire and the wider fleet easy to understand.",
    lessons:
      "The central design question is how an asset's current state stays connected to its history.",
    image: "/Tierban-project.png",
    links: [],
    architectureNodes: [
      "Fleet & vehicles",
      "Tire records",
      "Lifecycle events",
      "Operational views",
    ],
    evidenceNote:
      "Tireban is a private company product, so this case study stays at the level of the product and its domain model.",
  },
  {
    slug: "svm-vs-qsvm",
    number: "05",
    name: "SVM vs. QSVM",
    category: "Independent research · Quantum computing",
    summary:
      "Comparing classical and quantum kernels through reproducible experiments, explicit baselines, and measured computational cost.",
    overview:
      "This experiment compares classical support vector machines with quantum-kernel classifiers on the Wisconsin Breast Cancer dataset. It explores what changes when the same reduced feature space is represented through two- and four-qubit quantum feature maps on an exact local simulator.",
    problem:
      "A quantum model's score is not meaningful without a carefully matched classical baseline and a transparent evaluation protocol. The experiment therefore examines preprocessing, kernel choice, tuning, runtime, and uncertainty together rather than treating one favorable result as evidence of an advantage.",
    architecture:
      "Training-fitted scaling and PCA feed classical SVMs and ZZ-feature-map quantum kernels, followed by matched outer-test evaluation. The final phase uses five fixed stratified outer splits with five inner folds, saving candidate scores, model selections, predictions, runtime measurements, and paired analyses.",
    technology: [
      "Python",
      "Qiskit",
      "scikit-learn",
      "NumPy",
      "SciPy",
      "Pandas",
      "Jupyter",
    ],
    contribution:
      "My exploration is recorded in an executable notebook, a supporting evaluation module, and validation tests. Saved candidate scores, model evaluations, and predictions make the experiment inspectable.",
    challenges:
      "Preprocessing leakage, prior feature-map selection, and overlapping test splits all affect what the results can support. Exact statevector simulation also has a different cost model from quantum hardware, so kernel construction, model fitting, prediction, and tuning costs are recorded separately.",
    lessons:
      "The reported classical baselines achieved higher mean F1 in this configuration, and the experiment does not demonstrate quantum advantage. The report recommends independent validation with a frozen protocol: the value is in understanding the evidence and its limits as carefully as the quantum model itself.",
    links: [
      {
        label: "Research repository",
        url: "https://github.com/SinaQP/SVM-Vs-QSVM",
      },
      {
        label: "Executed report",
        url: "https://github.com/SinaQP/SVM-Vs-QSVM/blob/main/results/phase11_report.md",
      },
    ],
    architectureNodes: [
      "Data & PCA",
      "Classical / quantum kernels",
      "Nested tuning",
      "Results & diagnostics",
    ],
    evidenceNote:
      "Submitted to Machine Learning: Science and Technology (IOP Publishing); not accepted. A simulator study, not a hardware benchmark or clinical application. Five overlapping splits and earlier feature-map selection limit inference; the report documents those limitations explicitly.",
  },
];

export type CaseStudy = ProjectRecord & {
  period: string | null;
  role: string;
  context: string;
  engineeringFocus: string[];
  technologies: string[];
  status: "professional" | "exploration";
  source: string[];
  featured: boolean;
};
const roles: Record<string, string> = {
  rahtal: "Full-stack Developer · Project manager since 2026",
  "zaravand-portal": "Backend Developer · built from scratch",
  danobin: "CTO",
  zaraamad: "Full-stack Developer",
  zarvand: "Frontend Developer",
  tireban: "Frontend Developer",
  "svm-vs-qsvm": "Independent research",
};
export const projects: CaseStudy[] = records.map((record, index) => ({
  ...record,
  number: String(index + 1).padStart(2, "0"),
  period: null,
  role: roles[record.slug],
  context: record.overview,
  engineeringFocus: record.architectureNodes,
  technologies: record.technology,
  status: record.slug === "svm-vs-qsvm" ? "exploration" : "professional",
  source:
    record.slug === "danobin"
      ? [
          "Résumé: Danobin / CTO",
          "Local danobin-core commits a2cc69b, bb8a466, ea0e03a",
        ]
      : [
          "User brief and existing portfolio",
          ...record.links.map((link) => link.url),
        ],
  featured: true,
}));
export const caseStudies = projects.filter(
  (project) => project.status === "professional",
);
