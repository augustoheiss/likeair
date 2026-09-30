"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { companyData } from "@/data/companyData";
import {
  ShieldCheck,
  Cpu,
  FileCheck,
  Sparkles,
  Wrench,
  Layers,
  CheckCircle2,
  ArrowRight,
  X,
  FileText,
  BadgeAlert
} from "lucide-react";

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-sky-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-500" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-emerald-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-amber-500" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-indigo-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="servicos" className="fundo-pontos py-24 sm:py-32 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header da Seção */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sky-600">
            Engenharia Térmica Aplicada
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Soluções completas para residências, condomínios e indústrias.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminamos os problemas clássicos do mercado (falta de vácuo, vazamento oculto de gás e queima prematura de compressores Inverter) aplicando protocolos científicos em cada visita.
          </p>
        </div>

        {/* Grade de Cards de Serviço */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card-gradiente group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:shadow-sky-900/10 hover:border-sky-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Topo do Card */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200/80">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Título & Descrição */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Destaques Técnicos Rápidos */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  {service.technicalHighlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900">{item.title}:</strong>{" "}
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de Ação do Card */}
              <div className="mt-8 pt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 underline underline-offset-4 flex items-center gap-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Ver Protocolo Técnico
                </button>

                <a
                  href={`https://wa.me/5511968951207?text=${encodeURIComponent(
                    `Olá Alex! Gostaria de solicitar um orçamento para o serviço: ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brilho inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2.5 transition-colors shadow-sm"
                >
                  <span>Orçar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Técnico do Serviço Selecionado */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 text-sky-800">
                {selectedService.badge || "Protocolo Técnico"}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-950">
              {selectedService.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Equipamentos Atendidos */}
            <div className="mt-6 p-4 rounded-2xl bg-sky-50/70 border border-sky-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900 mb-2">
                Equipamentos & Tipologias Atendidas:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {selectedService.equipments.map((eq, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {eq}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lista Detalhada de Diferenciais da Engenharia */}
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">
                Diferenciais do Método Like Air:
              </h4>
              <div className="space-y-3">
                {selectedService.technicalHighlights.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-slate-900">
                        {tech.title}
                      </h5>
                      <span className="text-[10px] font-semibold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded">
                        {tech.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Normas em Conformidade */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-[11px] text-slate-500 font-medium">
                <strong>Normas e referências técnicas:</strong>{" "}
                {selectedService.standardsComplied.join(" • ")}
              </p>
            </div>

            {/* Botão de Fechamento / Conversão */}
            <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors"
              >
                Voltar
              </button>
              <a
                href={`https://wa.me/5511968951207?text=${encodeURIComponent(
                  `Olá Alex! Gostaria de falar sobre o serviço "${selectedService.title}". Vi o protocolo no site e gostaria de agendar uma visita.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-brilho inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 text-sm shadow-md transition-all"
              >
                <span>Falar no WhatsApp sobre este serviço</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
