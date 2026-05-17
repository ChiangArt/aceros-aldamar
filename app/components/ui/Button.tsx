import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router";
import { Icon, type IconName } from "~/components/icons/Icon";
import { LottieLoader } from "./LottieLoader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading,
  href,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none rounded-sm overflow-hidden group cursor-hover";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-[#99d6ff] text-white hover:shadow-lg hover:shadow-primary/20",
    secondary:
      "bg-white/[.04] border border-white/10 text-white hover:bg-white/[.08] hover:border-white/20",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-neutral-400 hover:text-white hover:bg-white/[.05]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const content = (
    <>
      <div
        className={`flex items-center justify-center gap-2 transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {icon && iconPosition === "left" && (
          <Icon name={icon} size={size === "sm" ? 14 : 18} />
        )}
        {children}
        {icon && iconPosition === "right" && (
          <Icon name={icon} size={size === "sm" ? 14 : 18} />
        )}
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LottieLoader size={50} className="brightness-0 invert" />
        </div>
      )}

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={combinedClasses} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
