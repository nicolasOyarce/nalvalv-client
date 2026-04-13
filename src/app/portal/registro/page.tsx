"use client";

import Link from "next/link";
import { useState } from "react";

const RUBROS = [
  "Minería",
  "Oil & Gas",
  "Petroquímica",
  "Agua y Saneamiento",
  "Alimentos y Bebidas",
  "Construcción",
  "Manufactura",
  "Otro",
];

const STEPS = [
  { n: 1, label: "Complete el formulario de solicitud", active: true },
  { n: 2, label: "Nuestro equipo valida su empresa", active: false },
  { n: 3, label: "Recibe credenciales de acceso por correo", active: false },
];

export default function RegistroPage() {
  const [form, setForm] = useState({
    razonSocial: "",
    nombreContacto: "",
    email: "",
    telefono: "",
    rut: "",
    rubro: "",
    motivo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen">
      {/* ── Left panel ── */}
      <aside className="hidden lg:flex flex-col justify-between w-[560px] shrink-0 bg-[#122736] px-12 py-14">
        <div className="flex flex-col gap-7">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D8FBF] rounded-[4px]" />
            <span className="text-white text-[22px] font-bold tracking-[3px]">
              NALVALV
            </span>
          </div>

          <div className="w-10 h-0.5 bg-[#2D8FBF]" />

          <h1 className="text-white text-[38px] font-bold leading-[1.2]">
            Acceso
            <br />
            por solicitud
          </h1>

          <p className="text-[#8BAFC4] text-[14px] leading-[1.65]">
            NALVALV opera con clientes industriales calificados. El acceso al
            portal es validado por nuestro equipo comercial antes de ser
            activado.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {STEPS.map(({ n, label, active }) => (
              <div key={n} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    active
                      ? "bg-[#2D8FBF]"
                      : "border border-[#2D8FBF] bg-transparent"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold ${
                      active ? "text-white" : "text-[#8BAFC4]"
                    }`}
                  >
                    {n}
                  </span>
                </div>
                <span
                  className={`text-[13px] ${
                    active ? "text-[#BFCFDA]" : "text-[#8BAFC4]"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to login */}
        <div className="flex flex-col gap-1">
          <span className="text-[#5A8099] text-[12px] font-semibold">
            ¿Ya tiene acceso?
          </span>
          <Link
            href="/portal/acceso-cliente"
            className="text-[#2D8FBF] text-[13px] font-medium hover:underline"
          >
            Iniciar sesión →
          </Link>
        </div>
      </aside>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center bg-[#F4F5F7] px-8 sm:px-14 py-12">
        <div className="w-full max-w-[640px] flex flex-col gap-6">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-8 h-8 bg-[#2D8FBF] rounded-[4px]" />
            <span className="text-[#122736] text-lg font-bold tracking-[2px]">
              NALVALV
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[#122736] text-[26px] font-bold">
              Solicitar acceso al portal
            </h2>
            <p className="text-[#64748B] text-[13px] leading-relaxed">
              Complete los datos de su empresa. El acceso es verificado
              manualmente por el equipo comercial de NALVALV.
            </p>
          </div>

          {/* Notice */}
          <div className="flex items-center gap-2.5 bg-[#EEF5F9] border border-[#BFCFDA] rounded-[4px] px-4 py-3">
            <span className="material-symbols-outlined text-[#1A4D6B] text-[16px] shrink-0">
              info
            </span>
            <span className="text-[#1A4D6B] text-[12px] font-medium">
              Solo para empresas industriales. El acceso no es inmediato.
            </span>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  Razón social
                </label>
                <input
                  name="razonSocial"
                  value={form.razonSocial}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa"
                  className="h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  Nombre del contacto
                </label>
                <input
                  name="nombreContacto"
                  value={form.nombreContacto}
                  onChange={handleChange}
                  placeholder="Nombre y apellido"
                  className="h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="contacto@empresa.cl"
                  className="h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+56 9 XXXX XXXX"
                  className="h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  RUT empresa
                </label>
                <input
                  name="rut"
                  value={form.rut}
                  onChange={handleChange}
                  placeholder="76.XXX.XXX-X"
                  className="h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#374151] text-[12px] font-semibold">
                  Rubro
                </label>
                <div className="relative">
                  <select
                    name="rubro"
                    value={form.rubro}
                    onChange={handleChange}
                    className="w-full h-[42px] bg-white border border-[#CBD5E1] rounded-[4px] px-3 pr-9 text-[13px] text-[#374151] appearance-none outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                  >
                    <option value="" disabled>
                      Seleccione su rubro
                    </option>
                    {RUBROS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[16px] pointer-events-none">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#374151] text-[12px] font-semibold">
                Motivo de la solicitud
              </label>
              <textarea
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                rows={4}
                placeholder="Describa brevemente su actividad y el uso esperado del portal..."
                className="bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-2.5 text-[13px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-[#1A4D6B] text-white text-[15px] font-semibold rounded-[4px] hover:bg-[#163f58] active:bg-[#0f2e40] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                send
              </span>
              Solicitar acceso
            </button>

            {/* Back link */}
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#64748B] text-[13px]">
                ¿Ya tiene cuenta?
              </span>
              <Link
                href="/portal/acceso-cliente"
                className="text-[#1A4D6B] text-[13px] font-semibold hover:underline"
              >
                Volver al inicio de sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
