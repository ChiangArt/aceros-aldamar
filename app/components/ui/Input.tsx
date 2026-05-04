import { type InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl 
            bg-white/[.04] border border-white/10 
            text-sm text-white placeholder-neutral-600 
            focus:outline-none focus:border-primary/40 focus:bg-white/[.06] 
            transition-all duration-300
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

Input.displayName = "Input";
