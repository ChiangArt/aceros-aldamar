import { useLoaderData } from "react-router";
import type { Route } from "./+types/productos.$slug";
import { catalogCategories, catalogProducts, getProductById } from "~/lib/catalog";
import { ProductCatalog } from "~/features/products/components/ProductCatalog";
import { ProductDetails } from "~/features/products/components/ProductDetails";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const slug = params.slug;
  const isCategory = catalogCategories.some((c) => c.id === slug);
  
  if (isCategory) {
    return { type: "category" as const, id: slug };
  }

  const product = getProductById(slug);
  if (product) {
    return { type: "product" as const, id: slug };
  }

  throw new Response("Not Found", { status: 404 });
}

export function meta({ data, params }: Route.MetaArgs) {
  // We use the root.tsx meta for global consistency, 
  // but we can add specific overrides here if needed.
  return [];
}

export default function ProductosSlug() {
  const data = useLoaderData<typeof clientLoader>();

  if (data.type === "category") {
    return (
      <main className="pt-28 md:pt-32 pb-24">
        <ProductCatalog />
      </main>
    );
  }

  const product = getProductById(data.id);
  if (!product) return null;

  const related = catalogProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-28 md:pt-32 pb-24">
      <ProductDetails product={product} related={related} />
    </main>
  );
}
