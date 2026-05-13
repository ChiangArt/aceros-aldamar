import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("productos", "routes/productos.tsx"),
  route("productos/:categoria", "routes/productos.tsx", { id: "productos-categoria" }),
  route("producto/:productId", "routes/producto.tsx"),
  route("nosotros", "routes/nosotros.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
