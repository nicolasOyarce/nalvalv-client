"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* ── Left brand panel ── */}
      <aside className="hidden lg:flex flex-col justify-between w-[560px] shrink-0 bg-[#122736] px-12 py-14">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D8FBF] rounded-[4px]" />
            <span className="text-white text-[22px] font-bold tracking-[3px]">
              NALVALV
            </span>
          </div>

          <div className="w-10 h-0.5 bg-[#2D8FBF]" />

          <h1 className="text-white text-[44px] font-bold leading-[1.15]">
            Portal de
            <br />
            Clientes
          </h1>

          <p className="text-[#8BAFC4] text-[15px] leading-relaxed">
            Acceda a sus cotizaciones, documentos técnicos y solicitudes en un
            solo lugar.
          </p>

          {/* Product categories */}
          <div className="flex flex-col gap-3">
            {[
              { icon: "settings", label: "Válvulas industriales" },
              { icon: "water_drop", label: "Mangueras y abrasivos" },
              { icon: "filter_alt", label: "Filtración y control de derrames" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-[#1A3A50] px-3.5 py-2.5 rounded-[6px]"
              >
                <span className="material-symbols-outlined text-[#2D8FBF] text-[16px]">
                  {icon}
                </span>
                <span className="text-[#BFCFDA] text-[13px]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support footer */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[#5A8099] text-[11px] font-semibold tracking-[1px] uppercase">
            ¿Necesita ayuda?
          </span>
          <span className="text-[#8BAFC4] text-[13px]">
            comercial@nalvalv.cl
          </span>
          <span className="text-[#8BAFC4] text-[13px]">+56 2 2XXX XXXX</span>
        </div>
      </aside>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 sm:px-16 py-12">
        <div className="w-full max-w-[440px] flex flex-col gap-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-8 h-8 bg-[#2D8FBF] rounded-[4px]" />
            <span className="text-[#122736] text-lg font-bold tracking-[2px]">
              NALVALV
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#122736] text-[30px] font-bold">
              Acceso clientes
            </h2>
            <p className="text-[#64748B] text-[14px] leading-relaxed">
              Revise sus cotizaciones, documentos técnicos y solicitudes
              comerciales.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#374151] text-[13px] font-semibold">
                Correo electrónico
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="empresa@correo.cl"
                className="w-full h-11 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 text-[14px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#374151] text-[13px] font-semibold">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  className="w-full h-11 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 pr-11 text-[14px] text-[#374151] placeholder:text-[#94A3B8] outline-none focus:border-[#2D8FBF] focus:ring-1 focus:ring-[#2D8FBF] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#64748B] transition-colors"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded-[3px] border border-[#CBD5E1] accent-[#1A4D6B]"
                />
                <span className="text-[#374151] text-[13px]">Recordarme</span>
              </label>
              <Link
                href="#"
                className="text-[#2D7EAA] text-[13px] font-medium hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full h-12 bg-[#1A4D6B] text-white text-[15px] font-semibold rounded-[4px] tracking-[0.3px] hover:bg-[#163f58] active:bg-[#0f2e40] transition-colors"
            >
              Iniciar sesión
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#E2E8F0]" />
              <span className="text-[#94A3B8] text-[12px]">o</span>
              <div className="flex-1 h-px bg-[#E2E8F0]" />
            </div>

            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#64748B] text-[13px]">¿Primera vez?</span>
              <Link
                href="/portal/registro"
                className="text-[#1A4D6B] text-[13px] font-semibold hover:underline"
              >
                Solicitar acceso
              </Link>
            </div>
          </div>

          {/* Support block */}
          <div className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] px-5 py-4">
            <span className="material-symbols-outlined text-[#5A8099] text-[20px] shrink-0 mt-px">
              headset_mic
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#374151] text-[12px] font-semibold">
                ¿Necesita asistencia comercial?
              </span>
              <span className="text-[#64748B] text-[12px]">
                Contáctenos en comercial@nalvalv.cl o +56 2 2XXX XXXX
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
