import { useState, useEffect } from "react";
import { Icon } from "./icons/Icon";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = "+51991047687"; 
  const message = "Hola, me gustaría recibir más información sobre sus productos de acero.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Initial appearance after 5s
    const firstTimer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000); 
    }, 5000);

    // Repeat every 30s
    const repeatInterval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    }, 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(repeatInterval);
    };
  }, []);

  const showMessage = isVisible || isHovered;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Bubble */}
      <div
        className={`
          mb-4 px-5 py-3 rounded-2xl bg-white backdrop-blur-xl border border-white/10
          text-black text-sm font-medium shadow-2xl transition-all duration-500 origin-bottom-right
          pointer-events-none select-none relative
          ${showMessage ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"}
        `}
        style={{
          animation: showMessage ? "bubbleIn 0.5s ease-out forwards" : "none"
        }}
      >
        <div className="flex items-center gap-3">
          <p>¿Necesitas asesoría? Escríbenos 👋</p>
        </div>
        {/* Tail */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-white/10 rotate-45" />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-300 group relative"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-hover
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
        <Icon name="whatsapp" size={32} />
      </a>
    </div>
  );
}
