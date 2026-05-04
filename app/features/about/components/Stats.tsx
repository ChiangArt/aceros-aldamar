import { useEffect, useRef, useState } from "react";
import { Divider } from "~/components/ui/Divider";
import { useCountUp } from "~/features/shared/hooks";
import { useScrollY } from "~/features/shared/hooks";
import Logo from "~/components/ui/Logo";

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, value: current } = useCountUp(value, 2400);

  return (
    <div
      className={[
        "text-center opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        delay === 0
          ? ""
          : delay === 1
            ? "delay-100"
            : delay === 2
              ? "delay-200"
              : "delay-300",
      ].join(" ")}
      data-reveal
      ref={ref}
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums mb-2">
        {current}
        <span className="bg-gradient-to-br from-[#0199FC] via-[#33adff] to-[#99d6ff] bg-clip-text text-transparent">
          {suffix}
        </span>
      </p>
      <p className="text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollY = useScrollY();
  const [mounted, setMounted] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (sectionRef.current) {
      setOffsetTop(sectionRef.current.offsetTop);
    }
  }, []);

  // Calculate parallax relative to section top
  // When scrollY is at the section top, py is 0
  const py = mounted ? (scrollY - offsetTop) * -0.15 : 0;

  const stats = [
    { value: 5000, suffix: "+", label: "Proyectos completados" },
    { value: 120, suffix: "K", label: "Toneladas anuales" },
    { value: 98, suffix: "%", label: "Satisfacción del cliente" },
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <Divider />
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <div 
            className="transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateY(${py}px)`,
              opacity: mounted ? 1 : 0,
            }}
          >
            <Logo 
              size="min(60vw, 400px)" 
              color="text-primary/30" 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              delay={i}
            />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}

