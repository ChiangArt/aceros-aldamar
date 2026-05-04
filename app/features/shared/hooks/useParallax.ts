import { useScrollY } from "./useScrollY";

export function useParallax(speed: number) {
  return useScrollY() * speed;
}

