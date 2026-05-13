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

export default function ProductoDetalle() {
  const { productId } = useLoaderData<typeof clientLoader>();
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
