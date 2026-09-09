import { PageIntro } from "@/components/engineering/section-heading";
import { Work } from "@/components/engineering/work";
import { OpenSource } from "@/components/engineering/open-source";
import { siteContent } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Engineering Work",
  siteContent.work.pageDescription,
  "/work",
);
export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow={siteContent.work.eyebrow}
        title={siteContent.work.pageTitle}
        description={siteContent.work.pageDescription}
      />
      <Work full />
      <OpenSource full />
    </>
  );
}
