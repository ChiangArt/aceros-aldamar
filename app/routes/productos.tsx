import { ProductCatalog } from "~/features/products/components/ProductCatalog";
import type { Route } from "./+types/productos";
import { catalogCategories } from "~/lib/catalog";

export function meta({ params }: Route.MetaArgs) {
  const categoryId = params.categoria;
  const category = categoryId ? catalogCategories.find(c => c.id === categoryId) : null;
  
  const title = category 
    ? `${category.name} | Catálogo de Productos | Aceros Aldamar`
    : "Catálogo de Productos | Aceros Aldamar";
    
  const desc = category
    ? `Explora nuestra variedad de ${category.name.toLowerCase()}. Calidad certificada y entrega inmediata en Aceros Aldamar.`
    : "Explora nuestro catálogo completo de aceros: vigas, perfiles, tubos, planchas, ejes y más. Calidad certificada y trazabilidad garantizada.";
    
  const url = `https://acerosaldamar.com/productos${categoryId ? `/${categoryId}` : ""}`;
  const image = category ? `https://acerosaldamar.com${category.image}` : "https://acerosaldamar.com/og-image.png";

  return [
    { title },
    { name: "description", content: desc },
    { name: "keywords", content: "perfiles de acero, vigas h, angulos lac, canal u, barras de construccion, calaminas, aluzinc, ejes 1018, ejes 1045, planchas lac" },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: image },
  ];
}

export default function Productos() {
  return (
    <main className="pt-28 md:pt-32 pb-24">
      <ProductCatalog />
    </main>
  );
}
