import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { Icon } from "~/components/icons/Icon";
import { Link } from "react-router";
import { catalogCategories } from "~/lib/catalog";

type Product = {
  id: string;
  title: string;
  desc: string;
  img: string;
  imgHover: string;
};

function ProdCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/productos/${product.id}`}
      data-hover
      className="rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-primary/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 ease-out group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed">
          {product.desc}
        </p>
        <div className="mt-4 flex items-center gap-2 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          <span>Ver detalles</span>
          <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </Link>
  );
}

export function ProductsSection() {
  const products: Product[] = catalogCategories.map((c) => ({
    id: c.id,
    title: c.name,
    desc: c.description,
    img: c.image,
    imgHover: c.imageHover,
  }));

  return (
    <section id="products" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Badge>Catálogo</Badge>
            <SectionTitle>Nuestros Productos</SectionTitle>
          </div>
          <p
            className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-500 text-sm max-w-md font-light leading-relaxed"
            data-reveal
          >
            Aceros certificados bajo normas internacionales ASTM, AISI e ISO.
            Entrega en todo el territorio nacional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProdCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
