import { caseStudies } from "./case-studies";
import { selectedCredentials } from "./credentials";
import { githubRepositories } from "./github";
import { journey, stack } from "./profile";
import { research, researchProject } from "./research";

export const presentationSlides = [
  { id: "intro", chapter: "Beginning", shortTitle: "Engineer" },
  { id: "origin", chapter: "Beginning", shortTitle: "Starting point" },
  { id: "journey", chapter: "Beginning", shortTitle: "Six years" },
  { id: "foundations", chapter: "Building", shortTitle: "Foundations" },
  { id: "rahtal", chapter: "Building", shortTitle: "Rahtal" },
  { id: "danobin", chapter: "Ownership", shortTitle: "Danobin" },
  { id: "zaraamad", chapter: "Systems", shortTitle: "Real conditions" },
  { id: "along-the-way", chapter: "Systems", shortTitle: "Along the way" },
  { id: "systems", chapter: "Systems", shortTitle: "The deeper questions" },
  { id: "toolbox", chapter: "Systems", shortTitle: "Toolbox" },
  { id: "open-source", chapter: "Learning", shortTitle: "Working record" },
  { id: "study", chapter: "Learning", shortTitle: "Continuous study" },
  { id: "quantum", chapter: "Computing", shortTitle: "Quantum" },
  { id: "svm-vs-qsvm", chapter: "Computing", shortTitle: "SVM vs. QSVM" },
  { id: "future", chapter: "Next", shortTitle: "Direction" },
  { id: "contact", chapter: "Next", shortTitle: "Continue" },
] as const;

export const presentationChapters = [
  "Beginning",
  "Building",
  "Ownership",
  "Systems",
  "Learning",
  "Computing",
  "Next",
] as const;

function professionalProject(slug: string) {
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing presentation project: ${slug}`);
  return project;
}

export const presentationData = {
  journey,
  stack,
  rahtal: professionalProject("rahtal"),
  danobin: professionalProject("danobin"),
  zaraamad: professionalProject("zaraamad"),
  zarvand: professionalProject("zarvand"),
  tireban: professionalProject("tireban"),
  repositories: githubRepositories.filter((repository) =>
    [
      "zaraamad-portal-be",
      "ZaraamadQueryRunner",
      "rahtal-assistant",
      "TypePlus",
      "SVM-Vs-QSVM",
    ].includes(repository.name),
  ),
  credentials: selectedCredentials.slice(0, 3),
  research,
  researchProject,
};

export type PresentationSlideId = (typeof presentationSlides)[number]["id"];
