import { Badge } from "~/components/ui/Badge";
import { Icon } from "~/components/icons/Icon";
import { Link } from "react-router";
import { useParallax } from "~/features/shared/hooks/useParallax";
import { Button } from "~/components/ui/Button";

export function CTA() {
  const py = useParallax(-0.1);

  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden opacity-0 scale-90 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          data-reveal
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-blue-600/10" />
          <div
            className="absolute top-[-50%] right-[-20%] w-[500px] h-[500px] bg-primary rounded-full blur-[200px] opacity-[.06]"
            style={{ transform: `translateY(${py}px)` }}
          />
          <div
            className="absolute bottom-[-50%] left-[-20%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[180px] opacity-[.05]"
            style={{ transform: `translateY(${py * 1.5}px)` }}
          />

          <div className="relative z-10 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
            <Badge>¿Listo para empezar?</Badge>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 mt-3">
              Solicita tu{" "}
              <span className="bg-gradient-to-br from-primary via-[#33adff] to-[#99d6ff] bg-clip-text text-transparent">
                Cotización
              </span>
            </h2>
            <p className="text-neutral-400 text-base font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Nuestro equipo de asesores técnicos está listo para ayudarte a encontrar la solución
              en acero perfecta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contacto"
                icon="arrow-right"
                iconPosition="right"
                size="lg"
              >
                Contactar Ahora
              </Button>

              <Button
                href="tel:+51991047687"
                variant="secondary"
                size="lg"
                icon="phone"
              >
                +51 991 047 687
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
