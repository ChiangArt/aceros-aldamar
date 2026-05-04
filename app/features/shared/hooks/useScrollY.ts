import { useEffect, useRef, useState } from "react";

let globalScrollY = 0;
const listeners = new Set<(y: number) => void>();

if (typeof window !== "undefined") {
  window.addEventListener("scroll", () => {
    globalScrollY = window.scrollY;
    listeners.forEach(fn => fn(globalScrollY));
  }, { passive: true });
}

export function useScrollY() {
  const [value, setValue] = useState(globalScrollY);

  useEffect(() => {
    const handleUpdate = (y: number) => setValue(y);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return value;
}

