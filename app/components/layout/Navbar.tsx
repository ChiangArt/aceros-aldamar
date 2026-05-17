import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { Icon } from "~/components/icons/Icon";
import { cn } from "~/lib/cn";
import { useScrollY } from "~/features/shared/hooks";
import Logo from "~/components/ui/Logo";

type NavLink = { label: string; to: string };

export function Navbar() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const scrolled = scrollY > 80 || !isHome;

  const links = useMemo<NavLink[]>(
    () => [
      { label: "Inicio", to: "/" },
      { label: "Productos", to: "/productos" },
      { label: "Nosotros", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
    [],
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050505]/50 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20 relative">
        <Link
          to="/"
          className="flex items-center justify-center cursor-pointer"
          data-hover
        >
          <div>
            <Logo size={40} color="text-primary" offsetY={20} />
          </div>
          <div className="flex flex-col ml-2 leading-none">
            <span className="text-base md:text-lg font-black text-white tracking-[0.15em]">
              ACEROS
            </span>
            <span className="text-[10px] md:text-[11px] font-bold text-primary tracking-[0.4em] -mt-0.5">
              ALDAMAR
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-hover
              className={cn(
                "relative text-[13px] font-medium transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from- after:to-primary after:transition-[width] after:duration-300 hover:after:w-full",
                location.pathname === l.to
                  ? "text-white after:w-full"
                  : "text-neutral-400 hover:text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contacto"
          data-hover
          className="hidden lg:block px-5 py-2 rounded-sm bg-gradient-to-r from-primary to-[#99d6ff] text-[13px] font-semibold text-white hover:shadow-lg hover:shadow-primary/20 active:scale-95"
        >
          Cotizar
        </Link>

        <button
          type="button"
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          data-hover
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon
            name={open ? "x" : "menu"}
            size={22}
            className="text-neutral-300"
          />
        </button>

        {open ? (
          <div className="absolute top-16 left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 lg:hidden">
            <div className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-hover
                  onClick={() => setOpen(false)}
                  className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                data-hover
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-3 px-2 rounded-sm bg-gradient-to-r from-primary to-[#99d6ff] text-sm font-semibold text-white"
              >
                Cotizar
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
