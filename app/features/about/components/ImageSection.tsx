import { Badge } from "~/components/ui/Badge";
import { cn } from "~/lib/cn";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  image: string;
  side?: "left" | "right";
  badge?: string;
}

export function ImageSection({
  title,
  subtitle,
  children,
  image,
  side = "left",
  badge = "Nosotros",
}: Props) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-24 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(5,5,5,1)_0%,rgba(5,5,5,0.7)_20%,transparent_45%,transparent_55%,rgba(5,5,5,0.7)_80%,rgba(5,5,5,0.95)_100%)]" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div
          className={cn(
            "max-w-2xl p-10 md:p-16 rounded-[2.5rem] border border-white/10 bg-[#050505]/40 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0",
            side === "left"
              ? "-translate-x-24 mr-auto text-left"
              : "translate-x-24 ml-auto text-left",
          )}
          data-reveal
        >
          <Badge>{badge}</Badge>
          <h2 className="font-inter text-4xl md:text-6xl font-bold text-white mt-6 leading-[1.1] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-primary font-semibold mt-6 text-xl md:text-2xl tracking-tight">
              {subtitle}
            </p>
          )}
          <div className="mt-8 text-neutral-300/90 text-lg leading-relaxed space-y-6 font-light">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
