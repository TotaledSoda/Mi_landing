import React from "react";
import Navbar from "../components/Navbar"; // Ajustado a ruta relativa

// 1. Usamos la misma data (idealmente esto iría en un archivo constants.js)
const projects = [
  {
    id: "sgi",
    title: "SGI / Control documental",
    image: "/images/SIG/Panel de control.png",
    desc: "Control de documentos, versiones y trazabilidad.",
    accent: "from-blue-500/20 to-[#13a4ec]/5",
  },
  {
    id: "inventario",
    title: "Inventario de Activos TI",
    image: "/images/ActivosTI/stitch/dashboard_de_inventario_claro_espa_ol/screen.png",
    desc: "Equipos, responsables y mantenimiento en tiempo real.",
    accent: "from-emerald-400/20 to-[#13a4ec]/5",
  },
  {
    id: "App de ahorro",
    title: "App de ahorro",
    image: "/images/app_ahorro/app_dashboard.png",
    desc: "Aplicación para gestionar ahorros y presupuestos personales.",
    accent: "from-amber-400/20 to-[#13a4ec]/5",
  },
  
];

export default function Dashboard() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7f8] text-slate-900 font-[Manrope] relative">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      {/* Blobs de fondo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute rounded-full blur-[110px] opacity-60 animate-[blob_7s_infinite]"
          style={{ top: -80, right: -80, width: 500, height: 500, background: "rgba(19,164,236,0.25)" }} />
        <div className="absolute rounded-full blur-[110px] opacity-60 animate-[blob_7s_infinite] delay-2000"
          style={{ bottom: -140, left: -140, width: 600, height: 600, background: "rgba(96,165,250,0.22)" }} />
      </div>

      <Navbar />

      <main className="pt-[140px] pb-20 relative z-10">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-400/35 bg-white/60 backdrop-blur font-extrabold text-[12px] tracking-[0.08em] uppercase text-slate-600 mb-7">
            Disponible para nuevos proyectos
          </div>

          <h1 className="font-black tracking-[-0.04em] leading-[1.05] mb-6 text-[clamp(42px,6vw,84px)]">
            Desarrollo web y apps <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13a4ec] to-blue-600">
              claras, rápidas y escalables
            </span>
          </h1>

          <p className="text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[720px] mx-auto mb-9 text-slate-600 font-medium">
            En <strong>Bitify</strong> diseñamos y desarrollamos páginas web,
            aplicaciones móviles y sistemas a medida enfocados en rendimiento y crecimiento real.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center mb-14">
            <button className="h-14 px-8 rounded-full bg-[#13a4ec] text-white font-black text-base shadow-[0_0_30px_rgba(19,164,236,0.5)] hover:translate-y-[-1px] transition">
              Cotizar proyecto
            </button>
            <button className="h-14 px-8 rounded-full bg-white text-slate-900 font-extrabold text-base border border-slate-400/35 hover:bg-white/80 transition">
              Ver cómo trabajamos
            </button>
          </div>
        </div>
      </main>

      {/* SECCIÓN PROYECTOS ACTUALIZADA */}
      <section id="proyectos" className="max-w-[1100px] mx-auto px-6 pb-20 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Proyectos destacados</h2>
            <p className="text-slate-500 font-medium mt-2">Soluciones reales para problemas complejos.</p>
          </div>
          <a href="/proyectos" className="hidden sm:block text-[#13a4ec] font-bold hover:underline">Ver todos los proyectos →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group rounded-[28px] border border-slate-400/20 bg-white/70 backdrop-blur-md overflow-hidden hover:shadow-2xl hover:shadow-[#13a4ec]/10 transition-all duration-500 hover:-translate-y-2">
              {/* Contenedor Imagen */}
              <div className={`relative h-48 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x250?text=Bitify+Project"; }}
                />
              </div>
              
              <div className="p-7">
                <h3 className="font-black text-lg mb-2 group-hover:text-[#13a4ec] transition-colors">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed line-clamp-2">{p.desc}</p>
                <a href={`/proyectos`} className="inline-flex items-center gap-2 text-[#13a4ec] font-extrabold text-sm group/link">
                  Explorar caso 
                  <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ... (Servicios y Contacto se mantienen igual) ... */}
    </div>
  );
}