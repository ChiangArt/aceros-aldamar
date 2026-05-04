import { useScrollReveal } from "~/features/shared/hooks/useScrollReveal";
import { ContactForm } from "~/features/contact/components/ContactForm";
import type { Route } from "./+types/contacto";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacto y Cotizaciones — ACEROS ALDAMAR" },
    {
      name: "description",
      content: "Contáctanos para cotizar aceros y derivados. Respuesta rápida y asesoría técnica personalizada para tus proyectos en todo el Perú.",
    },
    { property: "og:title", content: "Contacto y Cotizaciones — ACEROS ALDAMAR" },
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
