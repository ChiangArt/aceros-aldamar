import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
export function About() {

  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge>Sobre Nosotros</Badge>
            <SectionTitle>Distribuidores por excelencia</SectionTitle>
            <div className="space-y-4 mt-8">
              <p
                className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-400 text-base font-light leading-relaxed"
                data-reveal
              >
                En{" "}
                <span className="text-white font-medium">Aceros Aldamar</span>{" "}
                iniciamos con el compromiso de ofrecer soluciones confiables en
                la distribución y comercialización de aceros para proyectos de
                construcción, industria y desarrollo estructural.
              </p>
              <p
                className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-500 text-base font-light leading-relaxed"
                data-reveal
              >
                Trabajamos con proveedores estratégicos, productos de calidad y
                una atención cercana, buscando convertirnos en un aliado
                comercial serio, responsable y orientado al crecimiento de
                nuestros clientes.
              </p>
              <p
                className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-500 text-base font-light leading-relaxed"
                data-reveal
              >
                Nuestra propuesta se basa en la confianza, el cumplimiento y la
                asesoría personalizada en cada requerimiento.
              </p>
            </div>

            <div
              className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] mt-8 flex items-center gap-6"
              data-reveal
            >
              <div className="flex -space-x-2">
                {[101, 102, 103, 104, 105].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/team${i}/40/40.jpg`}
                    className="w-9 h-9 rounded-full border-2 border-[#050505] object-cover"
                    alt=""
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-white">Profesionales</p>
                <p className="text-xs text-neutral-500">
                  comprometidos con tu proyecto
                </p>
              </div>
            </div>
          </div>

          <div
            className="opacity-0 translate-x-[150px] transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] relative"
            data-reveal
          >
            <div className="relative rounded-md overflow-hidden aspect-[4/5]">
              <img
                src="/home.webp"
                alt="Planta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute -top-[30%] -left-[40%] w-[60%] h-[160%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] skew-x-[-20deg] animate-[sweep_4.8s_ease-in-out_infinite] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
