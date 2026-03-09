import React from "react";
import Navbar from "/Users/Diego Aviña/Documents/mi_landing/src/components/Navbar.jsx";


export default function Dashboard() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7f8] text-slate-900 font-[Manrope] relative">
      {/* Keyframes para blobs */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      {/* Blobs */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute rounded-full blur-[110px] opacity-60"
          style={{
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            background: "rgba(19,164,236,0.25)",
            animation: "blob 7s infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-[110px] opacity-60"
          style={{
            bottom: -140,
            left: -140,
            width: 600,
            height: 600,
            background: "rgba(96,165,250,0.22)",
            animation: "blob 7s infinite",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <main className="pt-[140px] pb-20 relative z-10">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-400/35 bg-white/60 backdrop-blur font-extrabold text-[12px] tracking-[0.08em] uppercase text-slate-600 mb-7">
            Disponible para nuevos proyectos
          </div>

          {/* Title */}
          <h1 className="font-black tracking-[-0.04em] leading-[1.05] mb-6 text-[clamp(42px,6vw,84px)]">
            Desarrollo web y apps <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13a4ec] to-blue-600">
              claras, rápidas y escalables
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[720px] mx-auto mb-9 text-slate-600 font-medium">
            En <strong>Bitify</strong> diseñamos y desarrollamos páginas web,
            aplicaciones móviles y sistemas a medida enfocados en rendimiento,
            experiencia de usuario y crecimiento real para tu negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 justify-center mb-14">
            <button className="h-14 px-8 rounded-full bg-[#13a4ec] text-white font-black text-base shadow-[0_0_30px_rgba(19,164,236,0.5)] hover:translate-y-[-1px] transition">
              Cotizar proyecto
            </button>
            <button className="h-14 px-8 rounded-full bg-white text-slate-900 font-extrabold text-base border border-slate-400/35 hover:bg-white/80 transition">
              Ver cómo trabajamos
            </button>
          </div>

          {/* Trust */}
          <div className="border-t border-slate-400/35 pt-8">
            <div className="text-[12px] font-extrabold tracking-[0.22em] uppercase text-slate-400 mb-4">
              Tecnologías y prácticas que usamos
            </div>

            <div className="flex justify-center gap-10 flex-wrap opacity-70 text-slate-700 font-semibold">
              <span>React</span>
              <span>Vite</span>
              <span>Node.js</span>
              <span>APIs</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
      </main>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-[1100px] mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Desarrollo Web", desc: "Sitios modernos y responsivos" },
            { title: "Aplicaciones Móvil", desc: "Apps iOS y Android nativas" },
            { title: "Sistemas a Medida", desc: "Soluciones empresariales" },
            { title: "Automatización", desc: "Procesos optimizados" }
          ].map((service, i) => (
            <div key={i} className="rounded-2xl border border-slate-400/35 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-black mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="max-w-[1100px] mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Proceso</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {["Descubrimiento", "Diseño", "Desarrollo", "Entrega", "Soporte"].map((step, i) => (
            <div key={i} className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-[#13a4ec] text-white flex items-center justify-center font-black text-xl">{i + 1}</div>
              <p className="font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* arreglos */}
      

      
      

      {/* PROYECTOS */}
        <section id="proyectos" className="max-w-[1100px] mx-auto px-6 pb-20 relative z-10">
          <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-2xl border border-slate-400/35 bg-white/70 backdrop-blur overflow-hidden hover:shadow-lg transition">
            <img src="images/app_metas_de_ahorro.png" alt={`Proyecto ${i}`} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-black mb-2">Proyecto {i}</h3>
              <p className="text-slate-600 text-sm mb-4">Descripción del proyecto y tecnologías usadas</p>
              <a href="#" className="text-[#13a4ec] font-bold text-sm hover:underline">Ver más →</a>
            </div>
          </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}}
      <section id="contacto" className="max-w-[1100px] mx-auto px-6 pb-24 relative z-10">
        <div className="rounded-3xl border border-slate-400/35 bg-white/70 backdrop-blur p-12">
          <h2 className="text-4xl font-black tracking-tight mb-8 text-center">¿Listo para tu proyecto?</h2>
          <form className="max-w-2xl mx-auto space-y-5">
            <input type="text" placeholder="Tu nombre" className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]" />
            <input type="email" placeholder="Tu correo" className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]" />
            <input type="tel" placeholder="Tu WhatsApp" className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]" />
            <textarea placeholder="Cuéntanos tu proyecto" rows="5" className="w-full px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13a4ec]"></textarea>
            <button className="w-full h-14 rounded-full bg-[#13a4ec] text-white font-black shadow-[0_0_30px_rgba(19,164,236,0.5)] hover:translate-y-[-2px] transition">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
