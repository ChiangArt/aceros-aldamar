import { useRef } from "react";
import { Badge } from "~/components/ui/Badge";
import { SectionTitle } from "~/components/ui/SectionTitle";
import { Icon, type IconName } from "~/components/icons/Icon";

type ValueItem = { icon: IconName; title: string; desc: string };

function ValCard({ item, delay }: { item: ValueItem; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  }

  function onLeave() {
    const card = ref.current;
    if (card) card.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-primary/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] p-7 group cursor-default transition-[transform,border-color,box-shadow] duration-300",
        "opacity-0 translate-y-14",
        "transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        delay === 0
          ? ""
          : delay === 1
            ? "delay-100"
            : delay === 2
              ? "delay-200"
              : delay === 3
                ? "delay-300"
                : delay === 4
                  ? "delay-500"
                  : "delay-700",
      ].join(" ")}
      data-hover
      data-reveal
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <Icon name={item.icon} size={35} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-neutral-500 font-light leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}

export function Values() {
  const values: ValueItem[] = [
    {
      icon: "shield",
      title: "Calidad",
      desc: "Trabajamos con productos y proveedores que nos permiten ofrecer soluciones confiables para cada proyecto.",
    },
    {
      icon: "clock",
      title: "Cumplimiento",
      desc: "Atendemos cada requerimiento con responsabilidad, respetando los tiempos y compromisos asumidos con nuestros clientes.",
    },
    {
      icon: "check-circle",
      title: "Confianza",
      desc: "Construimos relaciones comerciales transparentes y duraderas, basadas en la seriedad y el buen servicio.",
    },
    {
      icon: "transparency",
      title: "Transparencia",
      desc: "Brindamos información clara en cada cotización y comunicación, fortaleciendo relaciones comerciales basadas en la confianza.",
    },
    {
      icon: "efficiency",
      title: "Eficiencia",
      desc: "Buscamos responder de manera ágil y ordenada, optimizando el abastecimiento de aceros y derivados.",
    },
    {
      icon: "service",
      title: "Atención personalizada",
      desc: "Escuchamos las necesidades de cada cliente para brindar una orientación adecuada y oportuna.",
    },
  ];

  return (
    <section id="values" className="py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Badge>Principios</Badge>
            <SectionTitle>Nuestros Valores</SectionTitle>
          </div>
          <p
            className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-500 text-sm max-w-md font-light leading-relaxed"
            data-reveal
          >
            Una cultura de trabajo orientada a resultados, seguridad y
            relaciones a largo plazo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <ValCard key={v.title} item={v} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
