import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-semibold transition-colors hover:text-slate-900 dark:hover:text-white";
const linkInactive = "text-slate-700 dark:text-slate-300";
const linkActive = "text-primary";

export default function Navbar() {
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
            end
          >
            Inicio
          </NavLink>

          <NavLink
            to="/toolkit"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Toolkit
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/proceso"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Proceso
          </NavLink>

          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Contacto
          </NavLink>
        </nav>

        {/* CTA (desktop) */}
        <NavLink
          to="/contacto"
          className="hidden md:inline-flex h-10 px-5 items-center justify-center rounded-full bg-[#13a4ec] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(19,164,236,0.45)] hover:translate-y-[-1px] transition"
        >
          Cotizar
        </NavLink>

        {/* Mobile CTA */}
        <NavLink
          to="/contacto"
          className="md:hidden inline-flex items-center justify-center h-10 px-4 rounded-full bg-[#13a4ec] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(19,164,236,0.45)]"
        >
          Cotizar
        </NavLink>
      </div>
    </header>
  );
}
  