import { Link } from "react-router";
import { Icon } from "~/components/icons/Icon";
import { Divider } from "~/components/ui/Divider";
import Logo from "~/components/ui/Logo";
import { catalogCategories } from "~/lib/catalog";

export function Footer() {
  const links: Array<[string, string]> = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Nosotros", "/nosotros"],
    ["Contacto", "/contacto"],
  ];

  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-3 mb-5 cursor-pointer"
              data-hover
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-[#99d6ff] flex items-center justify-center">
        <Logo size={50} color="#ffffff" offsetY={10} />
              </div>
              <div>
                <span className="text-sm md:text-base font-bold text-white tracking-tight">
                  ACEROS
                </span>
                <span className="text-sm md:text-base font-light text-primary ml-1">
                  ALDAMAR
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
              Aceros de alta calidad para industria, comercio e infraestructura.
              Enfocados en servicio, asesoría y cumplimiento.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-5">
                Empresa
              </h4>
              <div className="space-y-3">
                {links.map(([label, to]) => (
                  <Link
                    key={to}
                    to={to}
                    data-hover
                    className="block text-sm text-neutral-500 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-5">
                Productos
              </h4>
              <div className="space-y-3">
                {catalogCategories.map((c) => (
                  <Link
                    key={c.id}
                    to={`/productos?cat=${c.id}`}
                    data-hover
                    className="block text-sm text-neutral-500 hover:text-primary transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-neutral-300 uppercase tracking-[.2em] mb-5">
                Contacto
              </h4>
              <div className="space-y-3 text-sm text-neutral-500 font-light">
                <p>Calle Inglaterra 224, Ate – Lima – Perú</p>
                <p>Lima, Perú</p>
                <p>+51 991 047 687</p>
                <p>ventas@acerosaldamar.com</p>
                <p>RUC: 20615840221</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Divider />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Aceros Aldamar. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              data-hover
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              data-hover
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
