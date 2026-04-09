import React from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const services = [
  {
    icon: "code",
    title: "Desarrollo Web",
    desc:
      "Landings, sitios corporativos, sistemas internos y plataformas a medida con React + Tailwind, enfocadas en velocidad, SEO y UX.",
    points: ["React / Vite", "Tailwind / UI moderna", "SEO & Performance"],
    cta: "Ver detalles",
  },
  {
    icon: "smartphone",
    title: "Apps Móviles",
    desc:
      "Apps iOS/Android con React Native. Flujos claros, notificaciones, autenticación y publicación lista para tiendas.",
    points: ["React Native", "Auth / Notifs", "Experiencia fluida"],
    cta: "Ver detalles",
  },
  {
    icon: "space_dashboard",
    title: "Dashboards & Admin",
    desc:
      "Paneles para operaciones: métricas, aprobaciones, roles, auditorías, reportes y trazabilidad (ideal para SGI/gestión interna).",
    points: ["KPIs & reportes", "Roles & permisos", "Flujos de aprobación"],
    cta: "Ver detalles",
  },
  {
    icon: "hub",
    title: "APIs & Backend",
    desc:
      "Backends robustos con Laravel/Node: APIs seguras, integraciones y bases de datos (MySQL) listas para escalar.",
    points: ["Laravel / Node", "MySQL", "JWT / Sanctum"],
    cta: "Ver detalles",
  },
  {
    icon: "auto_awesome",
    title: "Automatización",
    desc:
      "Automatizamos tareas repetitivas y procesos con integraciones y flujos (SharePoint/Teams/Power Platform cuando aplica).",
    points: ["Power Apps (si aplica)", "SharePoint", "Notificaciones"],
    cta: "Ver detalles",
  },
  {
    icon: "design_services",
    title: "UI/UX & Diseño",
    desc:
      "Diseño moderno tipo “producto” (glass, branding, componentes). Interfaces bonitas, claras y que convierten.",
    points: ["Wireframes", "Design systems", "Prototipos"],
    cta: "Ver detalles",
  },
];

const stats = [
  { value: "Entrega rápida", label: "Sprints claros y avances visibles" },
  { value: "Calidad", label: "Código mantenible y escalable" },
  { value: "UX primero", label: "Diseño que se siente premium" },
  { value: "Soporte", label: "Acompañamiento post-entrega" },
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden">
      <Navbar />
      <BackgroundBlobs />

      /* HERO */
        <section className="pt-[140px] pb-16">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">verified</span>
          Servicios Bitify
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.05] tracking-[-0.04em]">
          Creamos experiencias digitales{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            que sí generan valor
          </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Desde una landing que convierte, hasta un sistema completo con dashboard,
          roles, reportes e integraciones. Todo con enfoque en rendimiento,
          claridad y crecimiento real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="/contacto"
            className="h-12 px-7 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-extrabold shadow-[0_0_30px_rgba(19,164,236,0.4)] hover:shadow-[0_0_40px_rgba(19,164,236,0.6)] hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2 border border-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            Pedir cotización
          </a>

          <a
            href="/proyectos"
            className="h-12 px-7 rounded-full bg-white/70 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/60 font-bold text-slate-900 dark:text-slate-100 hover:bg-white/90 dark:hover:bg-white/20 hover:border-primary/60 hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
            Ver proyectos
          </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-extrabold tracking-[0.22em] uppercase text-slate-400">
              Nuestra experiencia
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              Servicios que ofrecemos
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Soluciones a medida para tu operación: web, apps, dashboards, automatización e integraciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl bg-white/80 dark:bg-[#15232b]/70 backdrop-blur border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition p-7"
              >
                <div className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>

                <h3 className="mt-5 text-lg font-black tracking-tight">{s.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.desc}
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        check_circle
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacto"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-extrabold text-sm hover:underline"
                >
                  {s.cta}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((st) => (
              <div key={st.value} className="py-6">
                <div className="text-2xl sm:text-3xl font-black tracking-tight">
                  {st.value}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a className="hover:text-primary transition-colors" href="/servicios">
              Servicios
            </a>
            <a className="hover:text-primary transition-colors" href="/proceso">
              Proceso
            </a>
            <a className="hover:text-primary transition-colors" href="/proyectos">
              Proyectos
            </a>
            <a className="hover:text-primary transition-colors" href="/contacto">
              Contacto
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">work</span>
            </a>
          </div>

          <p>© {new Date().getFullYear()} Bitify. Hecho con enfoque en performance.</p>
        </div>
      </footer>
    </div>
  );
}
