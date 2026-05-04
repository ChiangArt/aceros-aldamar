import { useLoaderData } from "react-router";
import type { Route } from "./+types/productos.$productId";
import { catalogProducts, getProductById } from "~/lib/catalog";
import { ProductDetails } from "~/features/products/components/ProductDetails";

export async function loader({ params }: Route.LoaderArgs) {
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

export default function ProductoDetalle() {
  const { productId } = useLoaderData<typeof loader>();
  const product = getProductById(productId);
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
