import { Divider } from "~/components/ui/Divider";

export function Partners() {
  const names = [
    "Constructora Alpha",
    "Grupo Infraestructura",
    "Megaproyectos S.A.",
    "Cementos Nacional",
    "Minería del Sur",
    "AutoParts Industrial",
    "PetroAndes Corp",
    "Edificaciones Modernas",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <Divider />
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p
          className="opacity-0 translate-y-14 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-[10px] font-bold text-neutral-600 uppercase tracking-[.3em] mb-12"
          data-reveal
        >
          Confían en nosotros
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right,transparent,black 12%,black 88%,transparent)",
          }}
        >
          <div
            className="flex gap-20 items-center whitespace-nowrap"
            style={{ animation: "marquee 28s linear infinite" }}
          >
            {names.concat(names).map((n, i) => (
              <span
                key={`${n}-${i}`}
                className="text-xl md:text-2xl font-bold text-neutral-800 hover:text-neutral-500 transition-colors select-none"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
