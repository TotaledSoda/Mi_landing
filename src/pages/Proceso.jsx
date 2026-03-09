import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const steps = [
  { step: "01", title: "Descubrimiento", icon: "travel_explore",
    desc: "Objetivo, usuarios, flujo y prioridades. Alcance realista y plan claro.",
    bullets: ["Objetivo y KPIs", "Roadmap", "Riesgos y prioridades"] },
  { step: "02", title: "UX & Diseño", icon: "draw",
    desc: "Wireframes + UI premium (glass) + sistema de componentes y prototipo navegable.",
    bullets: ["Wireframes", "UI kit", "Prototipo + feedback"] },
  { step: "03", title: "Desarrollo", icon: "code",
    desc: "React/Vite, React Native y backend (Laravel/Node) según el caso. Escalable y mantenible.",
    bullets: ["Front + API", "Roles/permisos", "Buenas prácticas"] },
  { step: "04", title: "QA & Ajustes", icon: "bug_report",
    desc: "Pruebas, rendimiento y detalles finos. Lo que entregamos debe sentirse “producto”.",
    bullets: ["Validación", "Performance", "Correcciones finas"] },
  { step: "05", title: "Entrega", icon: "rocket_launch",
    desc: "Deploy, documentación y capacitación. Todo listo para operar.",
    bullets: ["Deploy", "Docs", "Capacitación"] },
  { step: "06", title: "Soporte", icon: "support_agent",
    desc: "Acompañamiento post-entrega: mejoras, monitoreo y evolución.",
    bullets: ["Mejoras", "Mantenimiento", "Evolución"] },
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCountUp(to, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return value;
}

export default function Proceso() {
  const header = useReveal();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = useMemo(
    () => [
      { label: "Pasos claros", to: 6, icon: "timeline" },
      { label: "Iteraciones rápidas", to: 12, icon: "bolt" },
      { label: "Enfoque UX", to: 100, icon: "auto_awesome" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden">
      <Navbar />
      <BackgroundBlobs />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-transparent">
        <div
          className="h-full bg-primary"
          style={{ width: `${progress}%`, transition: "width 80ms linear" }}
        />
      </div>

      <main className="pt-[140px] pb-24">
        {/* Header */}
        <section
          ref={header.ref}
          className={`max-w-[1100px] mx-auto px-6 text-center ${header.visible ? "opacity-100" : "opacity-0"}`}
          style={header.visible ? { animation: "fadeUp .7s ease both" } : undefined}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">timeline</span>
            Proceso Bitify
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.05] tracking-[-0.04em]">
            Un proceso que convierte ideas en{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              sistemas listos para operar
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ideal para web, apps, dashboards e integraciones. Avances visibles, decisiones claras y entrega sin caos.
          </p>

          {/* Stats (count-up) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {stats.map((s, idx) => (
              <StatCard key={s.label} item={s} delay={idx * 80} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-[1100px] mx-auto px-6 mt-16">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-8">
              {steps.map((s, i) => (
                <TimelineItem key={s.step} item={s} index={i} />
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-extrabold shadow-[0_0_30px_rgba(19,164,236,0.35)] hover:translate-y-[-1px] transition"
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              Agendar llamada
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ item, delay = 0 }) {
  const { ref, visible } = useReveal(0.2);

  // ✅ El hook SIEMPRE se llama
  const value = useCountUp(item.to, 800);

  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-white/80 dark:bg-[#15232b]/70 backdrop-blur
        border border-slate-100 dark:border-slate-800 p-5 shadow-sm
        transition ${visible ? "opacity-100" : "opacity-0"}`}
      style={
        visible
          ? { animation: "fadeUp .65s ease both", animationDelay: `${delay}ms` }
          : undefined
      }
    >
      <div className="flex items-center justify-between">
        <div className="size-11 rounded-2xl bg-slate-50 dark:bg-slate-800
          border border-slate-100 dark:border-slate-700
          flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">{item.icon}</span>
        </div>

        <div className="text-3xl font-black tracking-tight">
          {visible ? value : 0}
          {item.to === 100 ? "%" : ""}
        </div>
      </div>

      <div className="mt-3 font-black">{item.label}</div>

      <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {item.to === 6 && "De inicio a soporte."}
        {item.to === 12 && "Sprints y mejoras continuas."}
        {item.to === 100 && "UX como prioridad."}
      </div>
    </div>
  );
}


function TimelineItem({ item, index }) {
  const { ref, visible } = useReveal(0.18);
  const right = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 ${visible ? "opacity-100" : "opacity-0"}`}
      style={visible ? { animation: "fadeUp .65s ease both", animationDelay: `${index * 70}ms` } : undefined}
    >
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-8 size-4 rounded-full bg-primary shadow-[0_0_0_6px_rgba(19,164,236,0.15)]" />

      <div className={`${right ? "sm:col-start-2 sm:pl-10" : "sm:pr-10"} `}>
        <div className="text-xs font-extrabold tracking-[0.22em] uppercase text-slate-400">
          Paso {item.step}
        </div>

        <div className="mt-2 rounded-3xl bg-white/80 dark:bg-[#15232b]/70 backdrop-blur border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="text-lg font-black">{item.title}</div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {item.desc}
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden sm:block" />
    </div>
  );
}
