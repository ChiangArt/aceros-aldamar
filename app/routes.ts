import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("productos", "routes/productos.tsx"),
  route("productos/:productId", "routes/productos.$productId.tsx"),
  route("nosotros", "routes/nosotros.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
