import { useLoaderData } from "react-router";
import type { Route } from "./+types/productos.$productId";
import { catalogProducts, getProductById } from "~/lib/catalog";
import { ProductDetails } from "~/features/products/components/ProductDetails";

export async function prerender() {
  return catalogProducts.map((p) => `/productos/${p.id}`);
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const product = getProductById(params.productId);
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return { productId: product.id };
}

export function meta({ data }: Route.MetaArgs) {
  const p = data ? getProductById(data.productId) : null;
  const title = p ? `${p.name} — ACEROS ALDAMAR` : "Producto — ACEROS ALDAMAR";
  const desc = p ? p.shortDescription : "Detalle de producto de Aceros Aldamar.";
  return [{ title }, { name: "description", content: desc }];
}

export function BreadcrumbSchema({ productId }: { productId: string }) {
  const p = getProductById(productId);
  if (!p) return null;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://acerosaldamar.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos",
        "item": "https://acerosaldamar.com/productos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": p.name,
        "item": `https://acerosaldamar.com/productos/${p.id}`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ProductoDetalle() {
  const { productId } = useLoaderData<typeof clientLoader>();
  const product = getProductById(productId);
  if (!product) return null;

  const related = catalogProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-28 md:pt-32 pb-24">
      <BreadcrumbSchema productId={productId} />
      <ProductDetails product={product} related={related} />
    </main>
  );
}
