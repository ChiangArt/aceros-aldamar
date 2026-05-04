import { HomePage } from "~/features/home/components/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ACEROS ALDAMAR — Calidad, Respaldo y Cumplimiento" },
    { name: "description", content: "Distribución de aceros y derivados para construcción, industria y minería en Perú. Tu aliado estratégico en cada proyecto con asesoría técnica y trazabilidad." },
    { property: "og:title", content: "ACEROS ALDAMAR — Calidad y Compromiso" },
    { property: "og:description", content: "Distribuidor líder de aceros en Perú. Soluciones confiables para construcción, minería e industria." },
    { property: "og:image", content: "https://acerosaldamar.com/og-image.jpg" },
    { property: "og:url", content: "https://acerosaldamar.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "keywords", content: "aceros, peru, construccion, mineria, vigas, perfiles, tubos, planchas lac, aluzinc" },
  ];
}

export default function Home() {
  return <HomePage />;
}
