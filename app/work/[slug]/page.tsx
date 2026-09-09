import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyArticle } from "@/components/engineering/case-study";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = caseStudies.find((x) => x.slug === slug);
  return p
    ? pageMetadata(`${p.name} — Engineering Work`, p.summary, `/work/${slug}`)
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find((x) => x.slug === slug);
  if (!project) notFound();
  return (
    <CaseStudyArticle
      project={project}
      next={
        caseStudies[(caseStudies.indexOf(project) + 1) % caseStudies.length]
      }
    />
  );
}
