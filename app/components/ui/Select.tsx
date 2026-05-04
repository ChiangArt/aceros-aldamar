import { type SelectHTMLAttributes, forwardRef, type ReactNode } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", error, label, children, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3 rounded-xl 
              bg-white/[.04] border border-white/10 
              text-sm text-neutral-400 
              focus:outline-none focus:border-primary/40 focus:bg-white/[.06] 
              transition-all duration-300 appearance-none cursor-pointer
              ${error ? "border-red-500/50" : ""}
              ${className}
            `}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
            {...props}
          >
            {children}
          </select>
        </div>
        {error && (
          <p className="text-[10px] text-red-400 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
