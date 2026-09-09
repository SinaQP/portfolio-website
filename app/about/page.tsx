import { About, Credentials } from "@/components/engineering/about";
import { Stack } from "@/components/engineering/stack";
import { Journey } from "@/components/engineering/journey";
import { PageIntro } from "@/components/engineering/section-heading";
import { siteContent } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About — Engineering Practice",
  siteContent.about.description,
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={siteContent.about.eyebrow}
        title={siteContent.about.title}
        description={siteContent.about.description}
      />
      <About full />
      <Journey />
      <Stack />
      <Credentials />
    </>
  );
}
