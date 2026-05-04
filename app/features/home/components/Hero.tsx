import { AnimatedTitle } from "~/components/ui/AnimatedTitle";
import { Icon } from "~/components/icons/Icon";
import { useSmoothScroll } from "~/features/shared/hooks/useSmoothScroll";
import { useParallax } from "~/features/shared/hooks/useParallax";
import { Button } from "~/components/ui/Button";

export function Hero() {
  const nav = useSmoothScroll();
  const py = useParallax(0.15);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <>
        <img
          src="/products/plancha-bobina-galvanizada-1.webp"
          className="absolute w-full h-full object-cover block md:hidden"
          alt=""
        />

        <video
          aria-hidden="true"
          className="absolute w-full h-full object-cover hidden md:block scale-[1.30]"
          style={{ transform: `translateY(${py}px)` }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/video/catalogo-visual-de-aceros-especializados-720p_a4vpduMt.webm"
            type="video/webm"
          />
        </video>
      </>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[18%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[.04] to-transparent"
          style={{ transform: `translateY(${py * 0.3}px)` }}
        />
        <div
          className="absolute top-0 right-[22%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-orange-500/[.08] to-transparent"
          style={{ transform: `translateY(${py * 0.2}px)` }}
        />
        <div
          className="absolute top-0 left-[48%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[.03] to-transparent"
          style={{ transform: `translateY(${py * 0.25}px)` }}
        />
      </div>

      <div
        className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-orange-500 rounded-full blur-[150px] opacity-[.06] pointer-events-none"
        style={{ transform: `translateY(${py * 0.6}px)` }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[130px] opacity-[.04] pointer-events-none"
        style={{ transform: `translateY(${py * 0.5}px)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div data-hover>
          <span className="text-[10px] font-bold text-[#0199FC] uppercase tracking-[.25em]">
            Calidad, respaldo y cumplimiento
          </span>
        </div>

        <AnimatedTitle
          text="Impulsamos tus"
          className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[.92] text-white mb-2"
          charClassName="text-white"
          delayMs={400}
          as="h1"
        />
        <AnimatedTitle
          text="proyectos"
          className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[.92] mb-8 "
          charClassName="bg-gradient-to-br from-primary via-[#33adff] to-[#99d6ff] bg-clip-text text-transparent"
          delayMs={900}
          as="h1"
        />

        <p className="text-neutral-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-[charReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.6s_forwards] [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
          Suministramos acero de la más alta calidad para proyectos
          industriales, comerciales y de infraestructura en todo el país.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[charReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.9s_forwards]">
          <Button
            onClick={() => nav("products")}
            icon="arrow-right"
            iconPosition="right"
            size="lg"
            className="w-full sm:w-auto"
          >
            Ver Productos
          </Button>
          <Button
            onClick={() => nav("about")}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto backdrop-blur-sm"
          >
            Conócenos
          </Button>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 opacity-0 animate-[charReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_2.3s_forwards]">
          <span className="text-[10px] uppercase tracking-[.3em] text-neutral-400">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
