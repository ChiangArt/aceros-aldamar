import { ProductCatalog } from "~/features/products/components/ProductCatalog";
import type { Route } from "./+types/productos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Catálogo de Productos — ACEROS ALDAMAR" },
    {
      name: "description",
      content: "Explora nuestro catálogo completo de aceros: vigas, perfiles, tubos, planchas, ejes y más. Calidad certificada para cada necesidad.",
    },
    { name: "keywords", content: "perfiles de acero, vigas h, angulos lac, canal u, barras de construccion, calaminas, aluzinc, ejes 1018, ejes 1045, planchas lac" },
    { property: "og:title", content: "Catálogo de Productos — ACEROS ALDAMAR" },
  ];
}

export default function Productos() {
  return (
    <main className="pt-28 md:pt-32 pb-24">
      <ProductCatalog />
    </main>
  );
}
