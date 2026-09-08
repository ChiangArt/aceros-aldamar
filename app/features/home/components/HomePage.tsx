import { useScrollReveal } from "~/features/shared/hooks";
import { Hero } from "./Hero";
import { About } from "./About";
import { VisionMission } from "~/features/about/components/VisionMission";
import { Stats } from "~/features/about/components/Stats";
import { ProductsSection } from "~/features/products/components/ProductsSection";
import { Values } from "~/features/about/components/Values";
import { Partners } from "~/features/about/components/Partners";
import { CTA } from "./CTA";

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Stats />
        <ProductsSection />
        <Values />
        <Partners />
        <CTA />
      </main>
    </>
  );
}
