import { projects } from "./case-studies";
export const researchProject = projects.find(
  (project) => project.slug === "svm-vs-qsvm",
)!;
export const research = {
  title: "Beyond applications.",
  subtitle: "Exploring future computing.",
  introduction:
    "How does a different representation change what we can compute? Quantum Computing is one of my strongest long-term interests. For now, the work is study, simulation, and carefully bounded experiments.",
  topics: [
    "Quantum Computing studies",
    "Quantum algorithms",
    "Quantum kernels",
    "Advanced architectures",
    "Computational systems",
  ],
  question: "What changes when the kernel is quantum?",
  finding:
    "In this experiment, the classical baselines achieved higher mean F1. No quantum advantage is demonstrated.",
  scope:
    "An exploratory study using exact local simulation. Not a quantum-hardware benchmark or a clinical application.",
  methods: [
    {
      title: "Start with a baseline.",
      text: "Compare against classical methods under explicit preprocessing and evaluation conditions.",
    },
    {
      title: "Leave an inspectable record.",
      text: "Save splits, tuning decisions, predictions, and computational costs alongside the notebook.",
    },
    {
      title: "Keep the limits visible.",
      text: "Five overlapping splits, earlier feature-map selection, and unequal tuning budgets constrain the conclusions.",
    },
  ],
  source:
    "https://github.com/SinaQP/SVM-Vs-QSVM/blob/main/results/phase11_report.md",
};
