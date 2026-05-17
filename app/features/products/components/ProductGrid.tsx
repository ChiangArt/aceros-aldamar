import { ProductCard } from "./ProductCard";
import type { CatalogProduct } from "~/lib/catalog";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  products: CatalogProduct[];
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="rounded-md border border-white/5 bg-neutral-900/35 p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-white/[.02] border border-white/5 flex items-center justify-center mx-auto mb-6">
          <IoSearchOutline size={32} className="text-primary" />
        </div>
        <p className="text-white text-lg font-semibold">No encontramos resultados</p>
        <p className="text-sm text-neutral-500 mt-2">
          Prueba con otro término o limpia los filtros para ver más productos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
