import { CaseStudyArticle } from "@/components/engineering/case-study";
import { researchProject } from "@/data/research";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "SVM vs. QSVM — Computing Experiment",
  researchProject.summary,
  "/research/svm-vs-qsvm",
);
export default function Page() {
  return <CaseStudyArticle project={researchProject} isResearch />;
}
