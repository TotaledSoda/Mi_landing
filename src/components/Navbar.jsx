import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-semibold transition-colors hover:text-slate-900 dark:hover:text-white";
const linkInactive = "text-slate-700 dark:text-slate-300";
const linkActive = "text-primary";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio", end: true },
    { to: "/toolkit", label: "Toolkit" },
    { to: "/servicios", label: "Servicios" },
    { to: "/proceso", label: "Proceso" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-slate-400/35 bg-white/75 dark:bg-[#101c22]/70 backdrop-blur-[12px]">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo -> Home */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-xl bg-[#13a4ec] text-white font-black flex items-center justify-center shadow-[0_10px_30px_rgba(19,164,236,0.35)]">
            B
          </div>
          <strong className="text-lg tracking-tight text-slate-900 dark:text-white">
            BITIFY
          </strong>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <NavLink
          to="/contacto"
          className="hidden md:inline-flex h-10 px-5 items-center justify-center rounded-full bg-[#13a4ec] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(19,164,236,0.45)] hover:translate-y-[-1px] transition"
        >
          Cotizar
        </NavLink>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-[#101c22] border-b border-slate-400/35 flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
                end={link.end}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 px-5 items-center justify-center rounded-full bg-[#13a4ec] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(19,164,236,0.45)]"
            >
              Cotizar
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
