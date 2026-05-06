import { useEffect, useState } from "react";
import { LottieLoader } from "../ui/LottieLoader";

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
      <LottieLoader size={250} />
      <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#0199FC,#33adff,#99d6ff)] animate-[preloaderBar_1.8s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
      </div>
      <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[.3em]">
        CARGANDO ...
      </span>
    </div>
  );
}
