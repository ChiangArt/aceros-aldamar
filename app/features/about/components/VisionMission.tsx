import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";

export function VisionMission() {
  return (
    <section id="vision" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500 rounded-full blur-[220px] opacity-[.03]" />
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-orange-500 rounded-full blur-[220px] opacity-[.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge>Nuestro Propósito</Badge>
          <SectionTitle
            center
            sub="Trabajamos junto a nuestros clientes, garantizando productos certificados, entrega oportuna y asesoría técnica especializada en cada etapa del proyecto."
          >
            Visión, Misión y Compromiso
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div
            className="rounded-3xl bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-primary/80 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-300 p-8 md:p-9 opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            data-reveal
          >
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-3">
              Visión
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              Liderar con innovación
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Ser la empresa referente en soluciones de acero, impulsando
              proyectos de infraestructura e industria con excelencia,
              tecnología y sostenibilidad.
            </p>
            <div className="flex items-center gap-3 pt-5 mt-6 border-t border-white/5">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                Excelencia + Innovación
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-primary/80 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-300 p-8 md:p-9 opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
            data-reveal
          >
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-3">
              Misión
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              Acompañar tu proyecto
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Suministrar aceros de alta calidad y asesoría técnica
              especializada, brindando un servicio confiable, ágil y seguro para
              cada etapa de ejecución.
            </p>
            <div className="flex items-center gap-3 pt-5 mt-6 border-t border-white/5">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                Calidad + Servicio
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-primary/80 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-300 p-8 md:p-9 opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
            data-reveal
          >
            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-3">
              Compromiso
            </p>
            <h3 className="text-xl font-bold text-white mb-3">
              Confiabilidad total
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Productos certificados bajo normas internacionales, trazabilidad,
              entregas a tiempo y una atención cercana orientada a resultados.
            </p>
            <div className="flex items-center gap-3 pt-5 mt-6 border-t border-white/5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                Seguridad + Confianza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
