import { Badge } from "~/components/ui/Badge";
import { useParallax } from "~/features/shared/hooks/useParallax";

export function AboutHero() {
  const py = useParallax(-0.15);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/nosotros/nosotros-1.webp"
          alt="Aceros Aldamar Hero"
          className="w-full h-full object-cover opacity-60 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200"
          data-reveal
        >
          <Badge>Empresa</Badge>
          <h1 className="font-inter text-5xl md:text-8xl font-bold text-white mt-6 mb-8 leading-[1.05] tracking-tighter">
            Calidad, respaldo y cumplimiento <br />
            <span className="bg-gradient-to-br from-primary via-[#33adff] to-[#99d6ff] bg-clip-text text-transparent">
              ACEROS ALDAMAR
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Somos un equipo enfocado en abastecer aceros y derivados con
            asesoría técnica, trazabilidad y cumplimiento. Nuestro objetivo es
            que tu proyecto avance con seguridad, continuidad y soporte real en
            cada etapa.
          </p>
        </div>
      </div>

      
    </section>
  );
}
