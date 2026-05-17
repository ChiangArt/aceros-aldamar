import type { Config } from "@react-router/dev/config";
import { catalogProducts, catalogCategories } from "./app/lib/catalog";

export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender() {
    const products = catalogProducts.map((p) => `/producto/${p.id}`);
    const categories = catalogCategories.map((c) => `/productos/${c.id}`);
    return ["/", "/nosotros", "/contacto", "/productos", ...products, ...categories];
  },
} satisfies Config;
