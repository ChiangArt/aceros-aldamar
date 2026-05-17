import type { PropsWithChildren } from "react";

export function SectionTitle({
  children,
  sub,
  center,
}: PropsWithChildren<{ sub?: string; center?: boolean }>) {
  return (
    <div className={center ? "text-center" : undefined}>
      <h2 className="font-inter text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.05] mb-4">
        {children}
      </h2>
      {sub ? (
        <p
          className={[
            "text-neutral-500 text-base md:text-lg font-light max-w-2xl leading-relaxed",
            center ? "mx-auto" : "",
          ].join(" ")}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
