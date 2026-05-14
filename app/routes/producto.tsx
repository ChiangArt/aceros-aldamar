import { useLoaderData } from "react-router";
import type { Route } from "./+types/producto";
import { catalogProducts, getProductById } from "~/lib/catalog";
import { ProductDetails } from "~/features/products/components/ProductDetails";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const product = getProductById(params.productId);
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return { productId: product.id };
}

export function meta({ data }: Route.MetaArgs) {
  const p = data ? getProductById(data.productId) : null;
  const title = p ? `${p.name} | Aceros Aldamar` : "Producto | Aceros Aldamar";
  const desc = p ? p.shortDescription : "Detalle de producto de Aceros Aldamar.";
  const url = `https://acerosaldamar.com/producto/${p?.id}`;
  const image = `https://acerosaldamar.com${p?.image || "/og-image.png"}`;

  return [
    { title },
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "product" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

function ProductSchema({ product }: { product: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://acerosaldamar.com${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Aceros Aldamar"
    },
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://acerosaldamar.com/producto/${product.id}`,
      "priceCurrency": "PEN",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Aceros Aldamar"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ product }: { product: any }) {
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
        "name": product.name,
        "item": `https://acerosaldamar.com/producto/${product.id}`
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
      <ProductSchema product={product} />
      <BreadcrumbSchema product={product} />
      <ProductDetails product={product} related={related} />
    </main>
  );
}
