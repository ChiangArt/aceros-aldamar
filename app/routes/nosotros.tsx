import { useScrollReveal } from "~/features/shared/hooks";
import { AboutHero } from "~/features/about/components/AboutHero";
import { VisionMission } from "~/features/about/components/VisionMission";
import { Values } from "~/features/about/components/Values";
import { Partners } from "~/features/about/components/Partners";
import { ImageSection } from "~/features/about/components/ImageSection";
import type { Route } from "./+types/nosotros";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre Nosotros — ACEROS ALDAMAR" },
    {
      name: "description",
      content:
        "Conoce nuestra historia, misión y compromiso con la calidad en el sector siderúrgico. Aceros Aldamar, tu aliado estratégico.",
    },
    { property: "og:title", content: "Sobre Nosotros — ACEROS ALDAMAR" },
    { property: "og:description", content: "Conoce nuestra historia y compromiso con la calidad." },
  ];
}

export default function Nosotros() {
  useScrollReveal();

  return (
    <main>
      <AboutHero />

      <ImageSection
        title="Tu confianza es nuestro compromiso"
        subtitle="Abastecimiento confiable"
        image="/nosotros/nosotros-2.webp"
        side="left"
      >
        <p>
          En Aceros Aldamar nos dedicamos a la comercialización y distribución
          de productos siderúrgicos de alta calidad. Nuestro compromiso es
          brindar soluciones confiables y oportunas que acompañen el crecimiento
          de nuestros clientes en los sectores de construcción, minería e
          industria.
        </p>
        <p>
          Trabajamos con un equipo comprometido y proveedores estratégicos que
          nos permiten atender los requerimientos de nuestros clientes con
          eficiencia, responsabilidad y puntualidad.
        </p>
      </ImageSection>

      <ImageSection
        title="Compromiso con la Calidad"
        subtitle="Certificaciones y Normas"
        image="/nosotros/nosotros-3.webp"
        side="right"
        badge="Calidad"
      >
        <p>
          Trabajamos con proveedores certificados que cumplen con las normas
          internacionales más exigentes (ASTM, AISI, ISO). Esto garantiza que
          cada producto entregado posee la trazabilidad y propiedades mecánicas
          necesarias para su proyecto.
        </p>
      </ImageSection>
    </main>
  );
}
