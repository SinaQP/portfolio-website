import { caseStudies } from "./case-studies";
import { credentialStats, languages, selectedCredentials } from "./credentials";
import { githubSnapshot, presentationRepositories } from "./github";
import { journey, stack } from "./profile";
import { research, researchProject } from "./research";

export const presentationSlides = [
  { id: "intro", chapter: "Beginning", shortTitle: "Sina Qasempour" },
  { id: "origin", chapter: "Beginning", shortTitle: "Starting point" },
  { id: "zaravand", chapter: "Building", shortTitle: "Zaravand" },
  { id: "iranslice", chapter: "Building", shortTitle: "IranSlice" },
  { id: "zaraamad", chapter: "Building", shortTitle: "Zaraamad" },
  { id: "rahtal", chapter: "Building", shortTitle: "Rahtal" },
  { id: "danobin", chapter: "Ownership", shortTitle: "Danobin" },
  { id: "systems", chapter: "Systems", shortTitle: "The deeper questions" },
  { id: "toolbox", chapter: "Systems", shortTitle: "Toolbox" },
  { id: "open-source", chapter: "Learning", shortTitle: "Working record" },
  { id: "study", chapter: "Learning", shortTitle: "Continuous study" },
  { id: "quantum", chapter: "Computing", shortTitle: "Quantum" },
  { id: "svm-vs-qsvm", chapter: "Computing", shortTitle: "SVM vs. QSVM" },
  { id: "future", chapter: "Next", shortTitle: "Direction" },
  { id: "contact", chapter: "Next", shortTitle: "Continue" },
] as const;

export const presentationCareer = {
  zaravand: {
    name: "Zaravand",
    milestone: "First professional step",
    role: "Internship",
  },
  iranslice: {
    name: "IranSlice",
    milestone: "First project",
    role: "Full-Stack Development",
  },
  zaraamad: { name: "Zaraamad", milestone: "First major project" },
  rahtal: { name: "Rahtal", milestone: "Interconnected system complexity" },
  danobin: { name: "Danobin", milestone: "Technical ownership", role: "CTO" },
} as const;

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
  career: presentationCareer,
  journey,
  stack,
  rahtal: professionalProject("rahtal"),
  danobin: professionalProject("danobin"),
  zaraamad: professionalProject("zaraamad"),
  zarvand: professionalProject("zarvand"),
  tireban: professionalProject("tireban"),
  repositories: presentationRepositories,
  credentials: selectedCredentials,
  languages,
  stats: {
    publicRepositories: githubSnapshot.publicRepositoryCount,
    verifiedCredentials: credentialStats.verifiedCount,
    professionalSystems: caseStudies.filter((study) => study.slug !== "svm-vs-qsvm").length,
    githubVerifiedAt: githubSnapshot.verifiedAt,
    credentialsVerifiedAt: credentialStats.verifiedAt,
  },
  research,
  researchProject,
};

export type PresentationSlideId = (typeof presentationSlides)[number]["id"];
