import { useEffect, useState } from "react";
import { useScrollY } from "~/features/shared/hooks/useScrollY";

export function ScrollProgress() {
  const scrollY = useScrollY();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      setProgress((scrollY / height) * 100);
    }
  }, [scrollY]);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-primary via-[#33adff] to-primary-light transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
