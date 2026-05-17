import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          el.classList.remove(
            "opacity-0",
            "translate-y-14",
            "translate-y-10",
            "-translate-x-20",
            "translate-x-20",
            "-translate-x-24",
            "translate-x-24",
            "translate-x-[150px]",
            "scale-90",
          );
          el.classList.add("opacity-100", "translate-y-0", "translate-x-0", "scale-100");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) =>
      observer.observe(el),
    );
    return () => observer.disconnect();
  }, [location.pathname]);
}
