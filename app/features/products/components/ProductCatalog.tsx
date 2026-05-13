import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { Icon } from "~/components/icons/Icon";
import {
  catalogCategories,
  catalogProducts,
  type CatalogCategoryId,
} from "~/lib/catalog";
import { ProductGrid } from "./ProductGrid";
import { cn } from "~/lib/cn";

export function ProductCatalog() {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // ✅ categoría desde URL
  const activeCategory = (categoria ?? "all") as CatalogCategoryId | "all";

  // ✅ validación (evita URLs basura indexadas)
  const isValidCategory =
    activeCategory === "all" ||
    catalogCategories.some((c) => c.id === activeCategory);

  // 🔴 opcional pero recomendado (SEO limpio)
  if (!isValidCategory) {
    return <div className="text-white">404 - Categoría no encontrada</div>;
  }

  // ✅ filtro optimizado
  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((p) => {
      const matchesCat =
        activeCategory === "all" || p.categoryId === activeCategory;

      const searchLower = search.toLowerCase();

      const matchesSearch =
        p.name.toLowerCase().includes(searchLower) ||
        p.shortDescription.toLowerCase().includes(searchLower) ||
        p.tags?.some((t) => t.toLowerCase().includes(searchLower));

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  // ✅ navegación correcta
  const setCategory = (id: string) => {
    if (id === "all") {
      navigate("/productos");
    } else {
      navigate(`/productos/${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="max-w-xl">
          <Badge>Nuestro Stock</Badge>
          <SectionTitle>Catálogo de Productos</SectionTitle>
          <p className="text-neutral-500 text-sm font-light leading-relaxed mt-6">
            Explora nuestra amplia gama de aceros y derivados. Filtra por
            categoría o busca un producto específico por nombre o norma técnica.
          </p>
        </div>

        <div className="relative w-full md:w-80 group">
          <Icon
            name="arrow-right"
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-primary transition-colors rotate-90"
          />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[.03] border border-white/5 focus:border-primary/30 focus:bg-white/[.05] text-sm text-white placeholder-neutral-600 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setCategory("all")}
          className={cn(
            "px-5 py-2 rounded-xl text-xs font-semibold transition-all border",
            activeCategory === "all"
              ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
              : "bg-white/[.03] border-white/5 text-neutral-400 hover:border-white/10 hover:text-white",
          )}
        >
          Todos
        </button>

        {catalogCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={cn(
              "px-5 py-2 rounded-xl text-xs font-semibold transition-all border",
              activeCategory === c.id
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                : "bg-white/[.03] border-white/5 text-neutral-400 hover:border-white/10 hover:text-white",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
