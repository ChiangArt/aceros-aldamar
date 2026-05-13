import { Link } from "react-router";
import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { Icon } from "~/components/icons/Icon";
import { getCategoryById, type CatalogProduct } from "~/lib/catalog";
import { cn } from "~/lib/cn";

interface Props {
  product: CatalogProduct;
  related: CatalogProduct[];
}

function mailtoFor(productName: string) {
  const subject = encodeURIComponent(`Ficha técnica / Cotización — ${productName}`);
  const body = encodeURIComponent(
    `Hola, quisiera solicitar la ficha técnica y cotización del producto: ${productName}.\n\n` +
      `Cantidad / dimensiones:\n\n` +
      `Datos de contacto:\n`,
  );
  return `mailto:ventas@acerosaldamar.com?subject=${subject}&body=${body}`;
}

export function ProductDetails({ product, related }: Props) {
  const category = getCategoryById(product.categoryId);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
        <Link to="/" data-hover className="hover:text-neutral-300 transition-colors">Inicio</Link>
        <span>/</span>
        <Link to="/productos" data-hover className="hover:text-neutral-300 transition-colors">Productos</Link>
        <span>/</span>
        {category && (
          <>
            <Link to={`/productos/${category.id}`} data-hover className="hover:text-neutral-300 transition-colors">
              {category.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-neutral-300">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Col: Image and Main Info */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/35">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              <img src={product.imageHover} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <Badge>{category?.name ?? "Producto"}</Badge>
              <SectionTitle>{product.name}</SectionTitle>
              <p className="text-neutral-500 text-sm font-light leading-relaxed mt-5">{product.description}</p>
              
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href={mailtoFor(product.name)} data-hover className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[.06] border border-white/10 text-sm font-semibold text-white hover:border-primary/25 hover:bg-white/[.08] transition-all">
                  <Icon name="download" size={16} className="text-primary" />
                  Descargar ficha técnica
                </a>
                <Link to={`/contacto?producto=${encodeURIComponent(product.id)}`} data-hover className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-[#99d6ff] text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/20 active:scale-[.98] transition-all">
                  Cotizar
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Technical Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl bg-neutral-900/35 border border-white/5 p-6 md:p-8">
            <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-4">Características técnicas</p>
            <ul className="space-y-2 text-sm text-neutral-400 font-light">
              {(product.technical ?? []).map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary mt-[2px]">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            {product.standards?.length ? (
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-3">Normas / referencia</p>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/[.04] border border-white/10 text-xs text-neutral-300">{s}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-neutral-900/35 border border-white/5 p-6">
              <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-4">Presentación</p>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                {product.presentation.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-primary mt-[2px]">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-neutral-900/35 border border-white/5 p-6">
              <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-4">Usos</p>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                {product.uses.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-primary mt-[2px]">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rendering multiple tables */}
          {product.dimensions.map((table, idx) => (
            <div key={idx} className="rounded-3xl bg-neutral-900/35 border border-white/5 p-6 md:p-8">
              <div className="mb-5">
                <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-2">Dimensiones / Datos</p>
                <p className="text-sm text-neutral-300 font-semibold">{table.title}</p>
                {table.note && <p className="text-xs text-neutral-500 font-light mt-2">{table.note}</p>}
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/[.03]">
                    <tr>
                      {table.columns.map((c) => (
                        <th key={c} className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-t border-white/5">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-neutral-300 font-light">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <Badge>Más en {category?.name ?? "esta familia"}</Badge>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-white mt-3">Productos relacionados</h2>
            </div>
            {category && (
              <Link to={`/productos/${category.id}`} data-hover className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">Ver todos</Link>
            )}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rp) => (
              <Link key={rp.id} to={`/producto/${rp.id}`} data-hover className="rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-primary/25 transition-all duration-300 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={rp.image} alt={rp.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0" />
                  <img src={rp.imageHover} alt={rp.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-white font-semibold group-hover:text-primary transition-colors">{rp.name}</p>
                  <p className="text-xs text-neutral-500 mt-2">{rp.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
