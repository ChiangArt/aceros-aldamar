import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import emailjs from "@emailjs/browser";
import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { Icon, type IconName } from "~/components/icons/Icon";
import { catalogCategories, catalogProducts } from "~/lib/catalog";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { TextArea } from "~/components/ui/TextArea";
import { Select } from "~/components/ui/Select";
import { EMAILJS_CONFIG } from "~/lib/emailjs.config";

type InfoItem = { icon: IconName; title: string; text: string };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sp] = useSearchParams();
  const preselected = sp.get("producto") ?? "";
  const [productId, setProductId] = useState(preselected);

  useEffect(() => {
    setProductId(preselected);
  }, [preselected]);

  const info = useMemo<InfoItem[]>(
    () => [
      {
        icon: "map-pin",
        title: "Oficina",
        text: "Calle Inglaterra 224, Ate – Lima – Perú",
      },
      {
        icon: "phone",
        title: "Teléfono",
        text: "+51 991 047 687",
      },
      { icon: "mail", title: "Email", text: "ventas@acerosaldamar.com" },
      {
        icon: "calendar",
        title: "Horario",
        text: "Lun - Vie: 8:00 AM - 6:00 PM, Sáb: 8:00 AM - 1:00 PM",
      },
    ],
    [],
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setSent(true);
      formRef.current.reset();
      window.setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary rounded-full blur-[220px] opacity-[.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Badge>Contacto</Badge>
            <SectionTitle>Hablemos de tu Proyecto</SectionTitle>
            <p
              className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-500 text-base font-light leading-relaxed mt-6 mb-10"
              data-reveal
            >
              Estamos disponibles de lunes a viernes de 8:00 AM a 6:00 PM. Te
              responderemos en menos de 24 horas.
            </p>

            <div className="space-y-5">
              {info.map((c, i) => (
                <div
                  key={c.title}
                  className={[
                    "flex items-start gap-4 group cursor-default",
                    "opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    i === 0
                      ? ""
                      : i === 1
                        ? "delay-100"
                        : i === 2
                          ? "delay-200"
                          : "delay-300",
                  ].join(" ")}
                  data-hover
                  data-reveal
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon name={c.icon} size={25} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                      {c.title}
                    </p>
                    <p className="text-sm text-neutral-300 font-light">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 translate-x-20 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            data-reveal
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 hover:border-primary/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-300 p-8 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  name="user_name"
                  label="Nombre"
                  required
                  placeholder="Tu nombre"
                />
                <Input
                  name="user_company"
                  label="Empresa"
                  placeholder="Tu empresa"
                />
              </div>

              <Input
                name="user_email"
                label="Email"
                type="email"
                required
                placeholder="correo@empresa.com"
              />

              <Select
                name="product_name"
                label="Producto"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              >
                <option value="">Seleccionar producto</option>
                {catalogCategories.map((c) => (
                  <optgroup key={c.id} label={c.name}>
                    {catalogProducts
                      .filter((p) => p.categoryId === c.id)
                      .sort((a, b) => a.name.localeCompare(b.name, "es"))
                      .map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </Select>

              <TextArea
                name="message"
                label="Mensaje"
                required
                placeholder="Cuéntanos sobre tu proyecto..."
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4"
                isLoading={loading}
                icon={sent ? "check-circle" : "send"}
              >
                {sent
                  ? "Enviado correctamente"
                  : loading
                    ? "Enviando..."
                    : "Enviar Cotización"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
