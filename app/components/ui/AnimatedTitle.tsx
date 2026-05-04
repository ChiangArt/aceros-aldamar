import { useMemo } from "react";
import { cn } from "~/lib/cn";

type Props = {
  text: string;
  className?: string;
  charClassName?: string;
  delayMs?: number;
  as?: "div" | "h1" | "h2" | "span" | "p";
};

export function AnimatedTitle({
  text,
  className,
  charClassName,
  delayMs = 0,
  as: Tag = "div",
}: Props) {
  const words = useMemo(() => {
    let charIndex = 0;
    return text.split(" ").map((word) => {
      const chars = word.split("").map((ch) => ({
        ch,
        index: charIndex++,
      }));
      // Increment charIndex for the space after the word
      charIndex++;
      return chars;
    });
  }, [text]);

  return (
    <Tag className={cn(className)}>
      {words.map((wordChars, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {wordChars.map(({ ch, index }) => (
            <span
              key={index}
              className={cn(
                "inline-block pb-[0.20em] opacity-0 will-change-transform backface-visibility-hidden animate-[charReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]",
                charClassName
              )}
              style={{ animationDelay: `${delayMs + index * 40}ms` }}
            >
              {ch}
            </span>
          ))}
          {/* Add a non-breaking space after each word except the last one */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
