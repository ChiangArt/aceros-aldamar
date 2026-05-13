import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { WhatsAppButton } from "~/components/WhatsAppButton";
import { ScrollProgress } from "~/components/ui/ScrollProgress";
import appStyles from "./app.css?url";
import type { Route } from "./+types/root";
import { catalogCategories, catalogProducts } from "~/lib/catalog";


export const meta: Route.MetaFunction = ({ location }) => {
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const canonical = `https://acerosaldamar.com${pathname === "/" ? "" : pathname}`;

  let title = "Aceros Aldamar";
  let description = "Venta de aceros y materiales de construcción en Perú.";

  if (pathname.startsWith("/productos/")) {
    const slug = pathname.split("/productos/")[1];
    const category = catalogCategories.find((c) => c.id === slug);
    const name = category ? category.name : slug.replace(/-/g, " ");
    title = `${name} — Catálogo de Productos | Aceros Aldamar`;
    description = `Explora nuestra variedad de ${name.toLowerCase()}. Calidad certificada y entrega inmediata en Aceros Aldamar.`;
  }

  if (pathname.startsWith("/producto/")) {
    const slug = pathname.split("/producto/")[1];
    const product = catalogProducts.find((p) => p.id === slug);
    const name = product ? product.name : slug.replace(/-/g, " ");
    title = `${name} | Aceros Aldamar`;
    description = product
      ? product.shortDescription
      : `Compra ${name} en Perú. Calidad garantizada en Aceros Aldamar.`;
  }

  if (pathname === "/productos") {
    title = "Productos de acero en Perú | Aceros Aldamar";
    description = "Catálogo de productos de acero para construcción e industria.";
  }

  return [
    { title },
    { name: "description", content: description },

    {
      tagName: "link",
      rel: "canonical",
      href: canonical,
    },
  ];
};

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },

  { rel: "icon", type: "image/svg+xml", href: "/logo.ico" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
@keyframes charReveal {
  from { opacity: 0; transform: translateY(12px); filter: blur(6px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes preloaderBar {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes floatAnim {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes sweep {
  0% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
  25% { opacity: .9; }
  100% { transform: translateX(160%) skewX(-20deg); opacity: 0; }
}
@keyframes bubbleIn {
  0% { opacity: 0; transform: translateY(10px) scale(0.9); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes bubbleOut {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(10px) scale(0.9); }
}
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aceros Aldamar",
              "url": "https://acerosaldamar.com",
              "logo": "https://acerosaldamar.com/logo.ico",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+51 991 047 687",
                "contactType": "ventas",
                "areaServed": "PE",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61589205562427",
                "https://www.instagram.com/acerosaldamar",
                "https://www.linkedin.com/company/acerosaldamar"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://acerosaldamar.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acerosaldamar.com/productos?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#050505] text-neutral-200 font-inter overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
