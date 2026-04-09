import React, { useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const projects = [
  {
    id: "sgi",
    title: "SGI / Control documental",
    type: "Sistema",
    tag: "Operación",
    image: "/images/SIG/Panel de control.png", 
    desc: "Control de documentos, versiones, aprobaciones y trazabilidad. Dashboard y roles para gestión empresarial avanzada.",
    stack: ["React", "Tailwind", "Laravel", "MySQL", "SharePoint"],
    results: ["Trazabilidad total", "Menos retrabajo", "Flujos auditables"],
    accent: "from-blue-500/20 to-primary/10",
    icon: "description",
  },
  {
    id: "inventario",
    title: "Inventario de Activos TI",
    type: "Dashboard",
    tag: "TI",
    image: "/images/ActivosTI/stitch/dashboard_de_inventario_claro_espa_ol/screen.png",
    desc: "Gestión centralizada de equipos, responsables, ubicaciones, mantenimiento y reportes exportables en tiempo real.",
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
    image: "/images/requisiciones.png",
    desc: "Flujos por roles, historial, estados y notificaciones automáticas para optimizar compras y finanzas.",
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
    image: "/images/bitify_landing.png",
    desc: "Landing moderna con alto performance, Glass UI y secciones completas de servicios, proceso y contacto.",
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
    image: "/images/nutriapp.png",
    desc: "Plataforma de nutrición con gestión de citas, recordatorios y seguimiento de pacientes. Panel admin completo.",
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
    image: "/images/toolkit_ui.png",
    desc: "Vista interactiva tipo producto con mockups animados, ring progress y micro-interacciones de alta fidelidad.",
    stack: ["React", "Tailwind", "Animaciones"],
    results: ["Percepción premium", "Interacción suave", "Detalle visual"],
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
    <div className="min-h-screen bg-white dark:bg-[#0b1114] text-slate-900 dark:text-slate-100 font-[Manrope] overflow-x-hidden">
      <Navbar />
      <BackgroundBlobs />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <main className="pt-[140px] pb-24 relative z-10">
        {/* Header */}
        <section className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[#13a4ec] text-xs font-extrabold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">work</span>
            Proyectos
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-black leading-[1.05] tracking-[-0.04em]">
            Casos que se sienten{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13a4ec] to-blue-600">
              producto
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Dashboards, sistemas internos y apps con enfoque en UX, performance y procesos reales.
          </p>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2.5 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`h-11 px-6 rounded-full border text-sm font-extrabold transition-all ${
                  active === f
                    ? "bg-[#13a4ec] text-white border-[#13a4ec] shadow-[0_0_20px_rgba(19,164,236,0.3)]"
                    : "bg-white/70 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#13a4ec]/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Grid Proyectos */}
        <section className="max-w-[1200px] mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} onOpen={() => setOpen(p)} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="max-w-[1100px] mx-auto px-6 mt-20 text-center">
          <div className="rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-12">
            <h2 className="text-3xl font-black tracking-tight">¿Tienes una idea en mente?</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">Diseñemos una solución a tu medida.</p>
            <a href="/contacto" className="mt-8 inline-flex items-center gap-2 h-14 px-8 rounded-full bg-[#13a4ec] text-white font-black shadow-lg hover:scale-[1.02] transition-transform">
              Empieza ahora <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>

      {/* MODAL DETALLE */}
      {open && (
        <Modal onClose={() => setOpen(null)}>
          {/* Imagen Principal en el Modal */}
          <div className="mb-8 w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner">
            <img 
              src={open.image} 
              alt={open.title} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Bitify+Project"; }}
            />
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13a4ec]/10 text-[#13a4ec] text-[10px] font-black uppercase tracking-widest">
                {open.type} • {open.tag}
              </div>
              <h3 className="mt-4 text-3xl font-black tracking-tight">{open.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base font-medium">
                {open.desc}
              </p>
            </div>

            <button
              onClick={() => setOpen(null)}
              className="size-11 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center group"
            >
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">close</span>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-slate-800/50 p-6">
              <div className="font-black text-sm uppercase tracking-wider text-[#13a4ec]">Tecnologías</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {open.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-slate-800/50 p-6">
              <div className="font-black text-sm uppercase tracking-wider text-[#13a4ec]">Resultados Clave</div>
              <ul className="mt-4 space-y-2.5">
                {open.results.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[18px] text-[#13a4ec]">check_circle</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <a href="/contacto" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#13a4ec] text-white font-black shadow-md hover:opacity-90 transition">
              Quiero un proyecto similar
            </a>
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
    const rx = ((y / rect.height) - 0.5) * -8;
    const ry = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `translateY(-5px) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px) perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <button
      onClick={onOpen}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className="text-left rounded-[32px] bg-white dark:bg-[#15232b]/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-2xl transition-all p-0 group overflow-hidden will-change-transform"
      style={{
        animation: "fadeUp .7s ease both",
        animationDelay: `${idx * 100}ms`,
        transition: "transform 150ms ease-out, box-shadow 300ms ease, border-color 300ms ease",
      }}
    >
      {/* Contenedor de Imagen */}
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.accent}`}>
        <img 
            src={p.image} 
            alt={p.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Badge Flotante */}
        <div className="absolute right-5 top-5 size-11 rounded-2xl bg-white/90 dark:bg-black/30 backdrop-blur border border-white/50 dark:border-white/10 flex items-center justify-center text-[#13a4ec] shadow-xl">
          <span className="material-symbols-outlined">{p.icon}</span>
        </div>
        
        <div className="absolute left-6 bottom-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-wider">
          {p.type} <span className="text-[#13a4ec]">•</span> {p.tag}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-black tracking-tight group-hover:text-[#13a4ec] transition-colors leading-tight">
            {p.title}
          </h3>
          <span className="material-symbols-outlined text-[#13a4ec] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">arrow_outward</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium line-clamp-2">
          {p.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.slice(0, 3).map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 uppercase tracking-tighter">
              {t}
            </span>
          ))}
          {p.stack.length > 3 && (
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-[#13a4ec]/10 text-[#13a4ec]">
              +{p.stack.length - 3}
            </span>
          )}
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div 
        className="relative w-full max-w-[850px] max-h-[90vh] overflow-y-auto rounded-[32px] bg-white dark:bg-[#0f171a] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 custom-scrollbar"
        style={{ animation: 'fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {children}
      </div>
    </div>
  );
}