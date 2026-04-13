"use client";

import Link from "next/link";
import { useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const NAV_MAIN = [
  { icon: "dashboard", label: "Panel general", href: "#", active: true },
  { icon: "request_quote", label: "Cotizaciones", href: "#" },
  { icon: "assignment", label: "Solicitudes", href: "#" },
  { icon: "description", label: "Fichas técnicas / SDS", href: "#" },
  { icon: "inventory_2", label: "Productos frecuentes", href: "#" },
];

const NAV_SUPPORT = [
  { icon: "support_agent", label: "Contacto comercial", href: "#" },
  { icon: "build", label: "Soporte técnico", href: "#" },
];

const STATS = [
  {
    label: "Cotizaciones activas",
    value: "7",
    sub: "3 pendientes de respuesta",
    icon: "request_quote",
  },
  {
    label: "Solicitudes enviadas",
    value: "12",
    sub: "Último: hace 2 días",
    icon: "assignment",
  },
  {
    label: "Documentos disponibles",
    value: "34",
    sub: "8 nuevos este mes",
    icon: "description",
  },
  {
    label: "Productos consultados",
    value: "28",
    sub: "Esta semana: 5",
    icon: "inventory_2",
  },
];

type BadgeColor = "blue" | "green" | "yellow";

const BADGE: Record<BadgeColor, string> = {
  blue: "bg-[#DBEAFE] text-[#1D4ED8]",
  green: "bg-[#D1FAE5] text-[#065F46]",
  yellow: "bg-[#FEF3C7] text-[#92400E]",
};

const COTIZACIONES: {
  ref: string;
  desc: string;
  fecha: string;
  estado: string;
  color: BadgeColor;
}[] = [
  {
    ref: "COT-2024-0187",
    desc: "Válvulas de compuerta DN150 × 12 uds.",
    fecha: "08 abr 2025",
    estado: "En revisión",
    color: "blue",
  },
  {
    ref: "COT-2024-0181",
    desc: "Kit mangueras hidráulicas SAE 100R2",
    fecha: "02 abr 2025",
    estado: "Respondida",
    color: "green",
  },
  {
    ref: "COT-2024-0174",
    desc: 'Discos de corte abrasivo 14" acero inox',
    fecha: "21 mar 2025",
    estado: "Pendiente",
    color: "yellow",
  },
  {
    ref: "COT-2024-0168",
    desc: 'Filtros de cartucho 10" EPDM × 50 uds.',
    fecha: "14 mar 2025",
    estado: "Respondida",
    color: "green",
  },
];

const SOLICITUDES: {
  title: string;
  fecha: string;
  estado: string;
  color: BadgeColor;
}[] = [
  {
    title: "Solicitud de cotización especial",
    fecha: "05 abr 2025",
    estado: "En proceso",
    color: "blue",
  },
  {
    title: "Soporte técnico válvula compuerta",
    fecha: "28 mar 2025",
    estado: "Resuelta",
    color: "green",
  },
];

const DOCS = [
  { name: "FT-VCOMP-DN150.pdf", desc: "Válvula compuerta DN150" },
  { name: "SDS-MH-SAE100R2.pdf", desc: "Manguera hidráulica SAE 100R2" },
];

const PRODUCTOS = [
  { name: "Válvula mariposa DN200 wafer", ref: "VM-200W-CI" },
  { name: "Manguera SAE 100R2 DN25 × 10m", ref: "MH-R2-025-10" },
  { name: 'Disco abrasivo 14" acero inoxidable', ref: "DA-14-INOX" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 h-[60px] bg-[#122736] flex items-center px-4 lg:px-6 justify-between shrink-0">
        {/* Left */}
        <div className="flex items-center gap-4 lg:gap-7">
          <button
            className="lg:hidden text-[#8BAFC4] hover:text-white transition-colors"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2D8FBF] rounded-[3px]" />
            <span className="text-white text-[16px] font-bold tracking-[2.5px]">
              NALVALV
            </span>
          </div>
          <div className="hidden lg:block w-px h-6 bg-[#2A4A5E]" />
          <span className="hidden lg:block text-[#8BAFC4] text-[12px] tracking-[0.5px]">
            Portal Clientes
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-72 lg:w-80 h-9 bg-[#1A3A50] rounded-[4px] px-3 gap-2">
          <span className="material-symbols-outlined text-[#5A8099] text-[16px]">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar cotizaciones, documentos..."
            className="bg-transparent flex-1 text-[13px] text-[#8BAFC4] placeholder:text-[#5A8099] outline-none"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="relative">
            <button className="w-9 h-9 bg-[#1A3A50] rounded-[4px] flex items-center justify-center hover:bg-[#1F3F54] transition-colors">
              <span className="material-symbols-outlined text-[#8BAFC4] text-[18px]">
                notifications
              </span>
            </button>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E05D2C] rounded-full pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[34px] h-[34px] bg-[#2D8FBF] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-[12px] font-bold">MA</span>
            </div>
            <div className="hidden md:flex flex-col leading-none">
              <span className="text-white text-[13px] font-semibold">
                Miguel Araya
              </span>
              <span className="text-[#8BAFC4] text-[11px] mt-0.5">
                Minera Los Andes S.A.
              </span>
            </div>
            <span className="material-symbols-outlined text-[#8BAFC4] text-[16px]">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
            w-60 bg-[#1A2E3D] flex flex-col shrink-0
            transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            top-[60px] lg:top-auto h-[calc(100vh-60px)] lg:h-auto
          `}
        >
          {/* Main nav */}
          <nav className="flex flex-col pt-5 pb-2">
            <div className="px-4 pb-2">
              <span className="text-[#4A6A7A] text-[10px] font-semibold tracking-[1.2px] uppercase">
                Menú principal
              </span>
            </div>
            {NAV_MAIN.map(({ icon, label, href, active }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={`relative flex items-center gap-2.5 h-10 px-4 text-[13px] transition-colors ${
                  active
                    ? "bg-[#1F3F54] text-white font-semibold"
                    : "text-[#8BAFC4] hover:bg-[#1F3F54]/60 hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-0 w-[3px] h-full bg-[#2D8FBF]" />
                )}
                <span className="material-symbols-outlined text-[18px]">
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-[#1F3F54] mx-0" />

          {/* Support nav */}
          <nav className="flex flex-col py-2">
            <div className="px-4 py-2">
              <span className="text-[#4A6A7A] text-[10px] font-semibold tracking-[1.2px] uppercase">
                Soporte
              </span>
            </div>
            {NAV_SUPPORT.map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-2.5 h-10 px-4 text-[13px] text-[#8BAFC4] hover:bg-[#1F3F54]/60 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* User card */}
          <div className="flex items-center gap-2.5 px-4 py-4 bg-[#122736]">
            <div className="w-8 h-8 bg-[#2D8FBF] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-[11px] font-bold">MA</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-white text-[12px] font-semibold">
                Miguel Araya
              </span>
              <span className="text-[#6B8FA3] text-[11px] truncate">
                Minera Los Andes
              </span>
            </div>
            <button
              aria-label="Cerrar sesión"
              className="text-[#6B8FA3] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                logout
              </span>
            </button>
          </div>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-8 flex flex-col gap-6">
          {/* Welcome bar */}
          <div className="bg-white border border-[#E8ECF0] rounded-[6px] px-5 lg:px-6 py-4 lg:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-[#122736] text-[20px] font-bold">
                Bienvenido, Miguel
              </h1>
              <p className="text-[#64748B] text-[13px] mt-0.5">
                Minera Los Andes S.A. · RUT 76.543.210-K · Cliente desde 2019
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <button className="flex items-center gap-1.5 h-[38px] px-4 bg-[#1A4D6B] text-white text-[13px] font-semibold rounded-[4px] hover:bg-[#163f58] transition-colors">
                <span className="material-symbols-outlined text-[16px]">
                  add_circle
                </span>
                Solicitar cotización
              </button>
              <button className="flex items-center gap-1.5 h-[38px] px-4 border border-[#1A4D6B] text-[#1A4D6B] text-[13px] font-semibold rounded-[4px] hover:bg-[#EEF5F9] transition-colors">
                <span className="material-symbols-outlined text-[16px]">
                  person
                </span>
                Contactar ejecutivo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map(({ label, value, sub, icon }) => (
              <div
                key={label}
                className="bg-white border border-[#E8ECF0] rounded-[6px] p-4 lg:p-5 flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] text-[11px] lg:text-[12px] font-semibold leading-tight">
                    {label}
                  </span>
                  <span className="material-symbols-outlined text-[#2D8FBF] text-[20px] shrink-0">
                    {icon}
                  </span>
                </div>
                <span className="text-[#122736] text-[32px] font-bold font-mono leading-none">
                  {value}
                </span>
                <span className="text-[#94A3B8] text-[11px]">{sub}</span>
              </div>
            ))}
          </div>

          {/* Content columns */}
          <div className="flex flex-col xl:flex-row gap-5 items-start">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">
              {/* Cotizaciones table */}
              <div className="bg-white border border-[#E8ECF0] rounded-[6px] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8ECF0]">
                  <h2 className="text-[#122736] text-[14px] font-bold">
                    Historial de cotizaciones
                  </h2>
                  <Link
                    href="#"
                    className="text-[#2D7EAA] text-[12px] font-medium hover:underline"
                  >
                    Ver todo →
                  </Link>
                </div>

                {/* Table header — hidden on mobile */}
                <div className="hidden md:flex bg-[#F8FAFC] border-b border-[#E8ECF0] px-5 h-9 items-center">
                  <span className="w-36 text-[#94A3B8] text-[10px] font-bold tracking-[0.8px] font-mono">
                    N° COTIZACIÓN
                  </span>
                  <span className="flex-1 text-[#94A3B8] text-[10px] font-bold tracking-[0.8px] font-mono">
                    DESCRIPCIÓN
                  </span>
                  <span className="w-28 text-[#94A3B8] text-[10px] font-bold tracking-[0.8px] font-mono">
                    FECHA
                  </span>
                  <span className="w-28 text-center text-[#94A3B8] text-[10px] font-bold tracking-[0.8px] font-mono">
                    ESTADO
                  </span>
                </div>

                {/* Rows */}
                {COTIZACIONES.map((row, i) => (
                  <div
                    key={row.ref}
                    className={`flex flex-col md:flex-row md:items-center px-5 py-3 md:h-12 gap-1 md:gap-0 border-b border-[#F1F5F9] last:border-b-0 ${
                      i % 2 !== 0 ? "bg-[#FAFBFC]" : "bg-white"
                    }`}
                  >
                    <span className="md:w-36 text-[#1A4D6B] text-[12px] font-medium font-mono">
                      {row.ref}
                    </span>
                    <span className="md:flex-1 text-[#374151] text-[13px]">
                      {row.desc}
                    </span>
                    <span className="md:w-28 text-[#64748B] text-[12px]">
                      {row.fecha}
                    </span>
                    <div className="md:w-28 flex md:justify-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-[3px] text-[11px] font-semibold ${BADGE[row.color]}`}
                      >
                        {row.estado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solicitudes */}
              <div className="bg-white border border-[#E8ECF0] rounded-[6px] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8ECF0]">
                  <h2 className="text-[#122736] text-[14px] font-bold">
                    Estado de solicitudes
                  </h2>
                  <Link
                    href="#"
                    className="text-[#2D7EAA] text-[12px] font-medium hover:underline"
                  >
                    Ver todo →
                  </Link>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  {SOLICITUDES.map((s) => (
                    <div
                      key={s.title}
                      className="flex items-center justify-between gap-3 bg-[#F8FAFC] border border-[#E8ECF0] rounded-[4px] px-3.5 py-3"
                    >
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[#374151] text-[13px] font-semibold truncate">
                          {s.title}
                        </span>
                        <span className="text-[#94A3B8] text-[11px]">
                          Enviada: {s.fecha}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-[3px] text-[11px] font-semibold ${BADGE[s.color]}`}
                      >
                        {s.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-full xl:w-80 shrink-0 flex flex-col gap-5">
              {/* Fichas técnicas */}
              <div className="bg-white border border-[#E8ECF0] rounded-[6px] p-5 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#2D8FBF] text-[20px]">
                    description
                  </span>
                  <h3 className="text-[#122736] text-[13px] font-bold">
                    Fichas técnicas / SDS
                  </h3>
                </div>
                {DOCS.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-2.5 bg-[#F8FAFC] border border-[#E8ECF0] rounded-[4px] px-3 py-2.5"
                  >
                    <span className="material-symbols-outlined text-[#DC2626] text-[16px] shrink-0">
                      picture_as_pdf
                    </span>
                    <div className="flex flex-col flex-1 min-w-0 gap-0.5">
                      <span className="text-[#374151] text-[12px] font-medium font-mono truncate">
                        {doc.name}
                      </span>
                      <span className="text-[#94A3B8] text-[11px]">
                        {doc.desc}
                      </span>
                    </div>
                    <button
                      aria-label={`Descargar ${doc.name}`}
                      className="text-[#2D8FBF] hover:text-[#1A4D6B] transition-colors shrink-0"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                    </button>
                  </div>
                ))}
                <Link
                  href="#"
                  className="text-[#2D7EAA] text-[12px] font-medium hover:underline"
                >
                  Ver todos los documentos →
                </Link>
              </div>

              {/* Contacto comercial */}
              <div className="bg-[#122736] rounded-[6px] p-5 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#2D8FBF] text-[20px]">
                    support_agent
                  </span>
                  <h3 className="text-white text-[13px] font-bold">
                    Contacto comercial
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-white text-[15px] font-semibold">
                    Rodrigo Fuentes
                  </span>
                  <span className="text-[#8BAFC4] text-[12px]">
                    Ejecutivo de cuentas — Zona Norte
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[#2D8FBF] text-[14px]">
                      mail
                    </span>
                    <span className="text-[#8BAFC4] text-[12px]">
                      r.fuentes@nalvalv.cl
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2D8FBF] text-[14px]">
                      call
                    </span>
                    <span className="text-[#8BAFC4] text-[12px]">
                      +56 9 8765 4321
                    </span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 h-[38px] bg-[#2D8FBF] text-white text-[13px] font-semibold rounded-[4px] hover:bg-[#267aaf] transition-colors">
                  <span className="material-symbols-outlined text-[15px]">
                    chat
                  </span>
                  Contactar ejecutivo
                </button>
              </div>

              {/* Productos frecuentes */}
              <div className="bg-white border border-[#E8ECF0] rounded-[6px] p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#122736] text-[13px] font-bold">
                    Productos frecuentes
                  </h3>
                  <Link
                    href="#"
                    className="text-[#2D7EAA] text-[11px] font-medium hover:underline"
                  >
                    Ver catálogo →
                  </Link>
                </div>
                {PRODUCTOS.map((p, i) => (
                  <div
                    key={p.ref}
                    className={`flex items-center gap-2.5 py-2 ${
                      i < PRODUCTOS.length - 1
                        ? "border-b border-[#F1F5F9]"
                        : ""
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-[#2D8FBF] rounded-full shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#374151] text-[12px] font-medium">
                        {p.name}
                      </span>
                      <span className="text-[#94A3B8] text-[10px] font-mono">
                        REF: {p.ref}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
