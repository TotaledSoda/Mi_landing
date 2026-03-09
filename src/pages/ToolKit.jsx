import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const skills = [
  {
    name: "React / Next.js",
    subtitle: "Web apps rápidas",
    percent: 95,
  },
  {
    name: "React Native",
    subtitle: "Apps iOS / Android",
    percent: 90,
  },
  {
    name: "TypeScript",
    subtitle: "Código sólido",
    percent: 88,
  },
  {
    name: "UI/UX",
    subtitle: "Diseño premium",
    percent: 98,
  },
];

function Ring({ percent }) {
  // Ajustado para el path de 36x36 típico
  return (
    <div className="relative size-16">
      <svg className="size-full" viewBox="0 0 36 36">
        <path
          className="text-slate-100 dark:text-slate-700"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="text-primary"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${percent}, 100`}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold dark:text-white">
        {percent}%
      </div>
    </div>
  );
}

export default function Toolkit() {
  const containerRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const mockup = mockupRef.current;
    if (!container || !mockup) return;

    const onMove = (e) => {
      if (window.innerWidth < 1024) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const onLeave = () => {
      if (window.innerWidth < 1024) return;
      mockup.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d171b] dark:text-slate-50 font-display overflow-x-hidden">
      {/* Navbar (ya lo tienes) */}
      <Navbar />

      {/* Fondo blobs (ya lo tienes como componente) */}
      <BackgroundBlobs />

      {/* Animación float */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-[140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Skills */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="material-symbols-outlined text-sm">construction</span>
                  Nuestro toolkit
                </div>

                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight dark:text-white">
                  Mezclamos frameworks modernos con{" "}
                  <span className="text-primary">ejecución pixel-perfect</span>.
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  En <strong>Bitify</strong> construimos sitios, dashboards, apps móviles y sistemas
                  a medida. No solo “programamos”: diseñamos experiencias que se sienten rápidas,
                  claras y que escalan con tu negocio.
                </p>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className="bg-white dark:bg-[#15232b] p-6 rounded-xl shadow-sm border border-slate-100 dark:border-[#1e323b] flex items-center gap-4 group hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <Ring percent={s.percent} />
                    <div>
                      <h3 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors">
                        {s.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{s.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA mini */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-lg h-11 px-6 bg-primary hover:bg-sky-500 text-white text-sm font-extrabold transition-all shadow-md shadow-primary/20"
                >
                  Pedir cotización
                </a>
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center rounded-lg h-11 px-6 bg-white/70 dark:bg-white/10 border border-slate-200/60 dark:border-slate-700/60 text-sm font-bold hover:border-primary/40 transition"
                >
                  Ver casos
                </a>
              </div>
            </div>

            {/* Right: Mockup */}
            <div
              ref={containerRef}
              className="relative flex justify-center lg:justify-end group"
              id="demo-container"
            >
              {/* Decorative background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-sky-200/20 dark:from-primary/5 dark:to-blue-900/10 rounded-full blur-3xl -z-10" />

              {/* Floating Badge */}
              <div className="absolute -top-6 right-10 lg:right-4 z-20 animate-bounce">
                <div className="bg-white dark:bg-[#1e323b] text-[#0d171b] dark:text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Demo en vivo (preview)
                </div>
              </div>

              {/* Phone Frame */}
              <div
                ref={mockupRef}
                className="relative bg-white dark:bg-[#101c22] border-[8px] border-slate-800 dark:border-slate-700 rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10"
                style={{
                  transition: "transform 0.1s ease-out",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                {/* Top notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 dark:bg-slate-700 z-30 rounded-b-xl mx-16" />

                {/* Screen */}
                <div className="relative h-full w-full bg-slate-50 dark:bg-[#15232b] overflow-hidden flex flex-col">
                  {/* App Header */}
                  <div className="pt-10 pb-4 px-6 bg-white dark:bg-[#1a2c36] shadow-sm flex justify-between items-center z-10">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">
                        Buen día
                      </p>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                        Cliente Bitify
                      </h4>
                    </div>
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="flex-1 overflow-y-auto p-6 space-y-6"
                    style={{ transition: "transform 0.2s ease-out" }}
                  >
                    {/* Card */}
                    <div className="bg-gradient-to-br from-primary to-sky-600 rounded-2xl p-6 text-white shadow-lg shadow-primary/30 transform hover:scale-[1.02] transition-transform cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sky-100 text-sm font-medium">Proyectos activos</p>
                          <h3 className="text-3xl font-bold mt-1">12</h3>
                        </div>
                        <span className="material-symbols-outlined text-sky-100">dashboard</span>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg text-xs font-bold transition-colors">
                          Nuevo
                        </button>
                        <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg text-xs font-bold transition-colors">
                          Reporte
                        </button>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <h5 className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          Actividad reciente
                        </h5>
                        <a className="text-xs text-primary font-medium hover:underline" href="#">
                          Ver todo
                        </a>
                      </div>

                      <div className="bg-white dark:bg-[#1a2c36] rounded-xl p-4 shadow-sm space-y-4">
                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                              <span className="material-symbols-outlined text-xl">code</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800 dark:text-white">
                                Deploy a producción
                              </p>
                              <p className="text-xs text-slate-400">Hoy, 10:23 AM</p>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                            OK
                          </p>
                        </div>

                        <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50" />

                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                              <span className="material-symbols-outlined text-xl">payments</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800 dark:text-white">
                                Pago recibido
                              </p>
                              <p className="text-xs text-slate-400">Ayer, 4:00 PM</p>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-green-500 group-hover:text-green-400 transition-colors">
                            +$8,500
                          </p>
                        </div>

                        <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50" />

                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                              <span className="material-symbols-outlined text-xl">bug_report</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800 dark:text-white">
                                Bug resuelto
                              </p>
                              <p className="text-xs text-slate-400">Hace 2 días</p>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                            Done
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="bg-white dark:bg-[#1a2c36] border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex justify-between items-center text-slate-400 dark:text-slate-500">
                    <button className="flex flex-col items-center gap-1 text-primary">
                      <span className="material-symbols-outlined">home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">bar_chart</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">folder</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer simple */}
          <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Bitify. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
