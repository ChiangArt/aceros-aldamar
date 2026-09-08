import { useState } from "react";

const dangerImage = "/danger/ChatGPT%20Image%208%20sept%202026,%2002_08_19%20p.m..png";

export function DangerNotice() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Aviso importante"
    >
      <div className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:right-3 sm:top-3"
          aria-label="Cerrar aviso"
        >
          <span aria-hidden="true">×</span>
        </button>
        <img
          src={dangerImage}
          alt="Aviso importante"
          className="block max-h-[calc(100dvh-1.5rem)] w-full object-contain sm:max-h-[calc(100dvh-3rem)]"
        />
      </div>
    </div>
  );
}
