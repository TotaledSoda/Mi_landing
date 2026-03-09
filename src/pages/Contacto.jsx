import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundBlobs from "../components/BackgroundBlobs";

const services = [
  { value: "", label: "Selecciona un servicio..." },
  { value: "web", label: "Sitio web / Landing" },
  { value: "dashboard", label: "Dashboard / Panel administrativo" },
  { value: "mobile", label: "App móvil (iOS / Android)" },
  { value: "sistemas", label: "Sistema a medida / Intranet" },
  { value: "uiux", label: "UI/UX (diseño)" },
  { value: "integraciones", label: "Integraciones / APIs / Automatización" },
  { value: "soporte", label: "Soporte / Mantenimiento" },
];

function FieldLabel({ children }) {
  return (
    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold ml-1">
      {children}
    </span>
  );
}

function InputIcon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 ${className}`}
    >
      {name}
    </span>
  );
}

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const canSubmit = useMemo(() => {
    const okName = form.nombre.trim().length >= 2;
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const okService = form.servicio.trim().length > 0;
    const okMsg = form.mensaje.trim().length >= 10;
    return okName && okEmail && okService && okMsg;
  }, [form]);

  const onChange = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
    if (status.type !== "idle") setStatus({ type: "idle", msg: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit) {
      setStatus({
        type: "error",
        msg: "Revisa el formulario: nombre, correo, servicio y un mensaje (mínimo 10 caracteres).",
      });
      return;
    }

    // Aquí conectas tu backend / WhatsApp / Email / Formspree, etc.
    // Por ahora simulamos éxito.
    setStatus({
      type: "success",
      msg: "¡Listo! Recibimos tu mensaje. Te respondemos en menos de 24 horas.",
    });

    setForm({ nombre: "", email: "", servicio: "", mensaje: "" });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d171b] dark:text-slate-100 min-h-screen flex flex-col font-display transition-colors duration-200 overflow-x-hidden">
      <Navbar />
      <BackgroundBlobs />

      <main className="flex-grow w-full max-w-[960px] mx-auto px-4 sm:px-6 py-12 sm:py-20 pt-[140px]">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-[-0.033em] text-slate-900 dark:text-white mb-4">
            Hagamos tu proyecto realidad
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas. En{" "}
            <strong>Bitify</strong> convertimos ideas en productos listos para crecer.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <FieldLabel>¿Cómo te llamas?</FieldLabel>
                <div className="relative group">
                  <InputIcon name="person" />
                  <input
                    value={form.nombre}
                    onChange={onChange("nombre")}
                    className="w-full h-14 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all duration-200 font-medium"
                    placeholder="Diego Aviña"
                    required
                    type="text"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <FieldLabel>Tu correo</FieldLabel>
                <div className="relative group">
                  <InputIcon name="mail" />
                  <input
                    value={form.email}
                    onChange={onChange("email")}
                    className="w-full h-14 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all duration-200 font-medium"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    type="email"
                  />
                </div>
              </label>
            </div>

            {/* Row 2 */}
            <label className="flex flex-col gap-2">
              <FieldLabel>¿Qué quieres construir?</FieldLabel>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  layers
                </span>

                <select
                  value={form.servicio}
                  onChange={onChange("servicio")}
                  className="w-full h-14 pl-12 pr-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all duration-200 font-medium appearance-none cursor-pointer"
                  required
                >
                  {services.map((s) => (
                    <option key={s.value} value={s.value} disabled={s.value === ""}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                  expand_more
                </span>
              </div>
            </label>

            {/* Row 3 */}
            <label className="flex flex-col gap-2">
              <FieldLabel>Cuéntanos un poco del proyecto</FieldLabel>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 dark:text-slate-500">
                  edit_note
                </span>

                <textarea
                  value={form.mensaje}
                  onChange={onChange("mensaje")}
                  className="w-full min-h-[160px] pl-12 pr-4 py-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all duration-200 resize-y font-medium leading-relaxed"
                  placeholder="Objetivo, fecha aproximada, y si tienes un presupuesto estimado…"
                  required
                />
              </div>
            </label>

            {/* Status */}
            {status.type !== "idle" && (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-semibold border ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-900/40"
                    : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-900/40"
                }`}
              >
                {status.msg}
              </div>
            )}

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm max-w-xs">
                <span className="material-symbols-outlined text-lg mt-0.5 shrink-0">
                  info
                </span>
                <p>
                  Respondemos en menos de 24 horas. Cero spam, solo propuestas claras.
                </p>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full sm:w-auto min-w-[220px] h-14 bg-primary hover:bg-sky-500 disabled:bg-slate-300 disabled:hover:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg font-black text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <span>Enviar</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Extra info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="flex flex-col items-center md:items-start gap-2 group">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mt-1">Ubicación</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Remoto (MX) <br />
              Atención nacional
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 group">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mt-1">Correo</h3>
            <a
              className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="mailto:contacto@bitify.com"
            >
              contacto@bitify.com
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="mailto:soporte@bitify.com"
            >
              soporte@bitify.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 group">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">call</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mt-1">WhatsApp</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Lun–Vie • 9am a 6pm</p>
            <a
              className="text-slate-900 dark:text-slate-200 font-semibold hover:text-primary transition-colors"
              href="tel:+525500000000"
            >
              +52 55 0000 0000
            </a>
          </div>
        </div>

        {/* Footer mini */}
        <footer className="w-full py-10 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Bitify. Hecho con enfoque en performance.</p>
        </footer>
      </main>
    </div>
  );
}
