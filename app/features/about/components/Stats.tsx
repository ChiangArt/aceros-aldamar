import { useEffect, useRef, useState } from "react";
import { useCountUp } from "~/features/shared/hooks";
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
        "text-left opacity-0 -translate-x-20 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
      <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tabular-nums mb-1">
        {current}
        <span className="bg-gradient-to-br from-primary via-[#33adff] to-[#99d6ff] bg-clip-text text-transparent">
          {suffix}
        </span>
      </p>
      <p className="text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const stats = [
    { value: 5000, suffix: "+", label: "Proyectos completados" },
    { value: 120, suffix: "K", label: "Toneladas anuales" },
    { value: 98, suffix: "%", label: "Satisfacción del cliente" },
  ];

  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Stats Column */}
          <div className="flex flex-col gap-10 md:gap-14 lg:pl-12">
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

          {/* Logo Column */}
          <div 
            className="hidden lg:flex justify-center lg:justify-start opacity-0 translate-x-20 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
            data-reveal
          >
            <div className="relative">
              <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full" />
              <Logo 
                size="clamp(300px, 25vw, 450px)" 
                color="text-primary/20" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



