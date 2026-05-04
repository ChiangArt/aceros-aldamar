import { type TextareaHTMLAttributes, forwardRef } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", error, label, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`
            w-full px-4 py-3 rounded-xl 
            bg-white/[.04] border border-white/10 
            text-sm text-white placeholder-neutral-600 
            focus:outline-none focus:border-primary/40 focus:bg-white/[.06] 
            transition-all duration-300 resize-none
            ${error ? "border-red-500/50" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-[10px] text-red-400 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
