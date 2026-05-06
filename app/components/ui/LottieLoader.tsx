import { useEffect, useState } from "react";
import loaderAnimation from "../../assets/animations/loader.json";

type Props = {
  size?: number;
  className?: string;
};

export function LottieLoader({ size = 150, className = "" }: Props) {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    // Importación dinámica para asegurar que solo se cargue en el cliente
    import("react-lottie-player").then((mod) => {
      setLottie(() => mod.default || mod);
    });
  }, []);

  if (!Lottie) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  return (
    <div 
      style={{ width: size, height: size }} 
      className={`flex items-center justify-center ${className}`}
    >
      <Lottie 
        play
        loop
        animationData={loaderAnimation} 
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
