import { Hero } from "@/components/engineering/hero";
import { About } from "@/components/engineering/about";
import { Work } from "@/components/engineering/work";
import { Journey } from "@/components/engineering/journey";
import { Research } from "@/components/engineering/research";
import { OpenSource } from "@/components/engineering/open-source";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Journey />
      <Research />
      <OpenSource />
    </>
  );
}
