import { Link } from "react-router";
import { Icon } from "~/components/icons/Icon";
import { getCategoryById, type CatalogProduct } from "~/lib/catalog";

interface Props {
  product: CatalogProduct;
}

export function ProductCard({ product }: Props) {
  const category = getCategoryById(product.categoryId);

  return (
    <Link
      to={`/producto/${product.id}`}
      data-hover
      className="rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 ease-out group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-100 group-hover:opacity-0 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <img
          src={product.imageHover}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {category ? (
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 whitespace-nowrap">
              {category.name}
            </span>
          ) : null}
        </div>
        <p className="text-xs text-neutral-500 leading-relaxed mt-2 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center gap-2 text-primary/80 text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          <span>Ver detalles</span>
          <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </Link>
  );
}
