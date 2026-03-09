import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const projects = [
  {
    id: "sgi",
    title: "SGI / Control documental",
    type: "Sistema",
    tag: "Operación",
    desc:
      "Control de documentos, versiones, aprobaciones y trazabilidad. Dashboard y roles.",
    stack: ["React", "Tailwind", "Laravel", "MySQL", "SharePoint"],
    results: ["Trazabilidad", "Menos retrabajo", "Flujos auditables"],
    accent: "from-primary/25 to-blue-600/10",
    icon: "description",
  },
  {
    id: "inventario",
    title: "Inventario de Activos TI",
    type: "Dashboard",
    tag: "TI",
    desc:
      "Equipos, responsables, ubicaciones, mantenimiento y reportes exportables.",
    stack: ["React", "API", "MySQL"],
    results: ["Visibilidad total", "Control de mantenimiento", "Reportes rápidos"],
    accent: "from-emerald-400/20 to-primary/10",
    icon: "inventory_2",
  },
  {
    id: "requisiciones",
    title: "Requisiciones & Aprobaciones",
    type: "Sistema",
    tag: "Proceso",
    desc:
      "Flujos por roles, historial, estados y notificaciones para compras/finanzas.",
    stack: ["React", "Laravel", "Roles", "Notificaciones"],
    results: ["Proceso ordenado", "Menos correos", "Auditable"],
    accent: "from-violet-400/20 to-primary/10",
    icon: "task_alt",
  },
  {
    id: "landing",
    title: "Landing Bitify",
    type: "Web",
    tag: "Marketing",
    desc:
      "Landing moderna con performance, glass UI y páginas completas (servicios/proceso/contacto).",
    stack: ["React", "Vite", "Tailwind"],
    results: ["UI premium", "Carga rápida", "Mejor conversión"],
    accent: "from-sky-400/20 to-primary/10",
    icon: "language",
  },
  {
    id: "nutri",
    title: "NutriApp (concepto)",
    type: "App",
    tag: "Producto",
    desc:
      "Citas, recordatorios, seguimiento. Panel admin y autenticación.",
    stack: ["React Native", "API", "Auth"],
    results: ["Flujo claro", "Escalable", "Listo para iterar"],
    accent: "from-amber-400/20 to-primary/10",
    icon: "nutrition",
  },
  {
    id: "toolkit",
    title: "Toolkit / Demo UI",
    type: "Web",
    tag: "UI/UX",
    desc:
      "Vista interactiva tipo producto con mockup animado, ring progress y micro-interacciones.",
    stack: ["React", "Tailwind", "Animaciones"],
    results: ["Percepción premium", "Interacción", "Detalle visual"],
    accent: "from-fuchsia-400/20 to-primary/10",
    icon: "auto_awesome",
  },
];

const filters = ["Todos", "Web", "App", "Sistema", "Dashboard"];

export default function Proyectos() {
  const [active, setActive] = useState("Todos");
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.type.toLowerCase() === active.toLowerCase());
  }, [active]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden">
      <Navbar />
      <BackgroundBlobs />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <main className="pt-[140px] pb-24">
        {/* Hero */}
        <section className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">work</span>
            Proyectos
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.05] tracking-[-0.04em]">
            Casos que se sienten{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              producto
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Dashboards, sistemas internos, web y apps con enfoque en UX, performance y procesos reales.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-10 px-4 rounded-full border text-sm font-extrabold transition ${
                  active === f
                    ? "bg-primary text-white border-primary shadow-[0_0_0_4px_rgba(19,164,236,0.15)]"
                    : "bg-white/70 dark:bg-white/10 border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-[1200px] mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} onOpen={() => setOpen(p)} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1100px] mx-auto px-6 mt-16 text-center">
          <div className="rounded-3xl bg-white/80 dark:bg-[#15232b]/70 backdrop-blur border border-slate-100 dark:border-slate-800 p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              ¿Armamos tu sistema / app?
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Te proponemos alcance, tiempos y una ruta de entrega clara.
            </p>
            <a
              href="/contacto"
              className="mt-6 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-extrabold shadow-[0_0_30px_rgba(19,164,236,0.35)] hover:translate-y-[-1px] transition"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              Contactar
            </a>
          </div>
        </section>
      </main>

      {open && (
        <Modal onClose={() => setOpen(null)}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
                {open.type} • {open.tag}
              </div>
              <h3 className="mt-3 text-2xl font-black tracking-tight">{open.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {open.desc}
              </p>
            </div>

            <button
              onClick={() => setOpen(null)}
              className="size-10 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 transition flex items-center justify-center"
              aria-label="Cerrar"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/70 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/60 p-5">
              <div className="font-black">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {open.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/60 p-5">
              <div className="font-black">Resultados</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {open.results.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-primary text-white font-extrabold"
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              Quiero uno así
            </a>
            <button
              onClick={() => setOpen(null)}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-white/70 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/60 font-bold"
            >
              Cerrar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function ProjectCard({ p, idx, onOpen }) {
  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -6;
    const ry = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `translateY(-2px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px) perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <button
      onClick={onOpen}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className="text-left rounded-3xl bg-white/80 dark:bg-[#15232b]/70 backdrop-blur border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition p-0 group will-change-transform"
      style={{
        animation: "fadeUp .65s ease both",
        animationDelay: `${idx * 70}ms`,
        transition: "transform 120ms ease, box-shadow 200ms ease, border-color 200ms ease",
      }}
    >
      {/* Imagen/hero */}
      <div className={`relative h-32 rounded-t-3xl overflow-hidden bg-gradient-to-br ${p.accent}`}>
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_45%)]" />
        <div className="absolute right-4 top-4 size-10 rounded-2xl bg-white/60 dark:bg-black/20 backdrop-blur border border-white/40 dark:border-white/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">{p.icon}</span>
        </div>
        <div className="absolute left-5 bottom-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/20 backdrop-blur border border-white/40 dark:border-white/10 text-xs font-extrabold text-slate-800 dark:text-white">
          {p.type}
          <span className="opacity-60">•</span>
          {p.tag}
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
            {p.title}
          </h3>
          <span className="material-symbols-outlined text-primary">open_in_new</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {p.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
          {p.stack.length > 3 && (
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-primary/10 text-primary">
              +{p.stack.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-primary font-extrabold text-sm">
          Ver detalles
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </button>
  );
}

function Modal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[920px] rounded-3xl bg-white/90 dark:bg-[#0f1b22]/90 backdrop-blur border border-slate-200/70 dark:border-slate-700/60 shadow-2xl p-7 sm:p-8">
        {children}
      </div>
    </div>
  );
}
