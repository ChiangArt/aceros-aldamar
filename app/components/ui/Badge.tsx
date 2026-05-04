import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5  text-primary text-[10px] font-bold uppercase tracking-[.25em] mb-5">
      {children}
    </span>
  );
}
