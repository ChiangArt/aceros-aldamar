import { useEffect, useState } from "react";
import Logo from "~/components/ui/Logo";

type Props = {
  durationMs?: number;
  onDone: () => void;
};

export function Preloader({ durationMs = 2200, onDone }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setHidden(true), durationMs);
    const t2 = window.setTimeout(onDone, durationMs + 650);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [durationMs, onDone]);

  return (
    <div
      id="preloader"
      className={[
        "fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center gap-8 transition-opacity duration-700",
        hidden ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[#99d6ff] flex items-center justify-center animate-[floatAnim_3s_ease-in-out_infinite]">
        <Logo size={50} color="#ffffff" offsetY={10} />
      </div>
      <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#0199FC,#33adff,#99d6ff)] animate-[preloaderBar_1.8s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
      </div>
      <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[.3em]">
        CARGANDO ...
      </span>
    </div>
  );
}
