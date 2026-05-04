import { useEffect, useMemo, useRef, useState } from "react";

export function useCountUp(end: number, durationMs = 2400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  const options = useMemo(
    () => ({ threshold: 0.5 } satisfies IntersectionObserverInit),
    [],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let start: number | null = null;
        function step(ts: number) {
          if (start == null) start = ts;
          const progress = Math.min((ts - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setValue(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      });
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [durationMs, end, options]);

  return { ref, value };
}

