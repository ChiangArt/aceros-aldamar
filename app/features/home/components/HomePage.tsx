import { useCallback, useState } from "react";
import { useScrollReveal } from "~/features/shared/hooks";
import { Preloader } from "~/components/layout/Preloader";
import { Hero } from "./Hero";
import { About } from "./About";
import { VisionMission } from "~/features/about/components/VisionMission";
import { Stats } from "~/features/about/components/Stats";
import { ProductsSection } from "~/features/products/components/ProductsSection";
import { Values } from "~/features/about/components/Values";
import { Partners } from "~/features/about/components/Partners";
import { CTA } from "./CTA";

export function HomePage() {
  const [ready, setReady] = useState(false);
  useScrollReveal();

  const onDone = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready ? <Preloader onDone={onDone} /> : null}
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
