import { useScrollReveal } from "~/features/shared/hooks/useScrollReveal";
import { ContactForm } from "~/features/contact/components/ContactForm";
import type { Route } from "./+types/contacto";

export function meta({}: Route.MetaArgs) {
  const title = "Contacto y Cotizaciones | Aceros Aldamar";
  const desc = "Contáctanos para cotizar aceros y derivados. Respuesta rápida y asesoría técnica personalizada para tus proyectos en todo el Perú.";
  const url = "https://acerosaldamar.com/contacto";
  const image = "https://acerosaldamar.com/og-image.png";

  return [
    { title },
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: image },
  ];
}

export default function Contacto() {
  useScrollReveal();
  return (
    <main className="pt-10">
      <ContactForm />
    </main>
  );
}
