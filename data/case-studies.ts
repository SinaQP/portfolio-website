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
    category: "Enterprise systems · Integration engineering",
    summary:
      "Connecting organizational work, priorities, and performance through software that fits the way teams operate.",
    overview:
      "Rahtal is an enterprise management platform concerned with organizational alignment, priorities, and day-to-day work. My public integration companion provides a closer look at the engineering around its existing task and performance APIs.",
    problem:
      "Enterprise workflows rarely stop at one interface: people need to find their tasks, understand context, and record work through connected tools. That integration must respect the existing API contract, authentication lifecycle, and the difference between a safe read and a consequential write.",
    architecture:
      "The public companion separates an HTTP client, authentication, task and performance services, and a small MCP interface. It connects to the existing Rahtal API as an independent application, with tokens kept in process memory and response errors translated at the boundary.",
    technology: ["Python", "HTTPX", "REST APIs", "MCP", "Django", "React"],
    contribution:
      "My résumé records full-stack and data-related work on Rahtal. The public companion provides implementation evidence for explicit service boundaries, authenticated API access, and focused tests around task retrieval and performance submission.",
    challenges:
      "An expired session, malformed response, and an unavailable server need different handling. Performance submission also introduces ambiguity when a network failure follows a write, so the integration deliberately avoids automatically retrying an uncertain submission.",
    lessons:
      "The companion makes a useful integration principle visible: handling a failed read and an uncertain write are different responsibilities. This is an observation from the implementation, rather than a claimed business outcome.",
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
      "The public source covers the standalone integration companion. It is a focused view into the wider Rahtal platform; the diagram illustrates that integration boundary.",
  },
  {
    slug: "danobin",
    number: "02",
    name: "Danobin",
    category: "Startup · Technical leadership",
    summary:
      "CTO experience, connecting startup responsibility with hands-on work on the product's core services.",
    overview:
      "Danobin was a startup where I served as CTO. Its project history spans product exploration, shared domain documentation, a core service, and a collaborative infographic interface. It represents a broader responsibility in my journey than an isolated implementation role.",
    problem:
      "A developing product needs its account, subscription, and credit behavior to stay coherent as features change. The core code records that problem in concrete terms: plan changes, recurring credit updates, and communication with users.",
    architecture:
      "The inspected core implementation uses Django modules for users, subscriptions, and credits, with background tasks and a shared email service. A separate Next.js interface appears in the collaborative project files. These are observed components, not a verified production deployment topology.",
    technology: ["Python", "Django", "Background tasks", "Next.js", "React"],
    contribution:
      "Alongside my CTO role, commits under my name and email record work on subscription-plan changes and credit management, a domain-event list, and an email service with templates, asynchronous tasks, and tests. The available history supports those contributions; the wider team's work is not attributed to me alone.",
    challenges:
      "Subscription changes affect credit allocation and scheduled work. Email delivery introduces a separate failure boundary. These concerns require coordination across the product's core behavior, beyond a single screen or endpoint.",
    lessons:
      "This account connects a verified leadership role with identifiable implementation work. The specific strategic decisions I owned, how the team worked, and the outcomes of those decisions still need a fuller first-person account.",
    links: [],
    architectureNodes: [
      "Product workflows",
      "Accounts & plans",
      "Credits",
      "Background services",
    ],
    evidenceNote:
      "CTO is recorded in my résumé. Implementation evidence comes from local Danobin project history. The requested organization repositories were not accessible publicly during review; the diagram shows component responsibilities only.",
  },
  {
    slug: "zaraamad",
    number: "02",
    name: "Zaraamad",
    category: "Organizational systems · Integration",
    summary:
      "A connected backend for customer operations, municipal services, pricing, and support across existing systems.",
    overview:
      "Zaraamad brings together organizational and municipal service workflows, including service configuration, customer operations, and revenue-related information. Its public backend repositories show both the application domain and the operational tools needed to work with distributed customer databases.",
    problem:
      "Customer-specific services, pricing, subscriptions, and support cannot be treated as unrelated records. The backend also has to coexist with established authentication and database systems while keeping access rules and changing business requirements understandable.",
    architecture:
      "The portal uses FastAPI modules with explicit controllers, services, schemas, and data mappings over SQLAlchemy and PostgreSQL. Separate bridge clients connect existing services, while Django support tooling routes connections to city databases and a Python query runner produces reports across SQL Server instances.",
    technology: [
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "SQL Server",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    contribution:
      "My résumé records a Full-stack Developer role on Zaraamad. The related public repositories include customer and service modules, database migrations, ownership-aware ticket workflows, and operational scripts for inspecting and moving data between systems.",
    challenges:
      "The portal verifies Django-issued JWTs while serving its own FastAPI endpoints, making compatibility at the authentication boundary explicit. Customer-specific configuration, remote bridge availability, and partial failures across multiple databases add another layer of engineering beyond a single application database.",
    lessons:
      "These repositories illustrate why domain rules and integration boundaries need to remain inspectable. They establish implementation structure, not measured improvements in reliability or delivery speed.",
    image: "/Zaraamad-project.png",
    links: [
      {
        label: "Portal backend",
        url: "https://github.com/SinaQP/zaraamad-portal-be",
      },
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
      "Portal & support",
      "Domain services",
      "Integration bridges",
      "Customer databases",
    ],
    evidenceNote:
      "This overview draws on the public portal, support, and query-runner repositories. The diagram is a conceptual view of their responsibilities, not a production deployment map.",
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
      "My résumé records my role as Frontend Developer on Zarvand. The public demonstration contains domain API modules, session handling, and billing flows; those repository features should not be read as a claim that I alone designed or implemented every part.",
    challenges:
      "A bill's status, the account dashboard, and the transaction view need to tell the same story after an interaction. The demonstration layer also needs to preserve believable state across refreshes while keeping its data source replaceable at the existing API boundary.",
    lessons:
      "The demonstration shows how separating data access from presentation supports inspection of a product workflow. Its simulated payments do not establish production transaction behavior.",
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
      "The public repository includes a demonstration mode with local data and simulated payments. It illustrates the frontend workflows and does not establish production payment-processing behavior.",
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
      "At the product level, Tireban can be understood through the relationship between vehicles, tires, lifecycle events, and fleet-level views. The diagram describes that domain model; implementation and deployment details are not publicly documented here.",
    technology: [],
    contribution:
      "My résumé records my role as Frontend Developer on Tireban. The product scope is documented in my previous portfolio; the specific features I owned and their implementation details are not established by the available public evidence.",
    challenges:
      "This domain connects events recorded over time to assets that move through inspections, maintenance, and replacement. The important product question is how to preserve that history while making the present state of an individual tire and the wider fleet easy to understand.",
    lessons:
      "The product invites an engineering question: how should an asset's current state remain connected to its history? Specific implementation lessons need a fuller account of the work before they can be attributed to me.",
    image: "/Tierban-project.png",
    links: [],
    architectureNodes: [
      "Fleet & vehicles",
      "Tire records",
      "Lifecycle events",
      "Operational views",
    ],
    evidenceNote:
      "Product scope comes from my existing portfolio. The implementation is not publicly documented, so this case study keeps the architecture conceptual and makes no performance or business-impact claims.",
  },
  {
    slug: "svm-vs-qsvm",
    number: "05",
    name: "SVM vs. QSVM",
    category: "Research experiment · Quantum computing",
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
      "An exploratory simulator study, not a hardware benchmark or clinical application. Five overlapping splits and earlier feature-map selection limit inference; the report documents those limitations explicitly.",
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
  rahtal: "Full-stack and data-related work",
  danobin: "CTO",
  zaraamad: "Full-stack Developer",
  zarvand: "Frontend Developer",
  tireban: "Frontend Developer",
  "svm-vs-qsvm": "Independent computing exploration",
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
