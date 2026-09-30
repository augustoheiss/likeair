"use client";

import React, { useState, useMemo } from "react";
import {
  calculateThermalLoad,
  CalculatorInput
} from "@/lib/calculatorLogic";
import { companyData } from "@/data/companyData";
import {
  Calculator as CalcIcon,
  Sun,
  Users,
  Tv,
  Home,
  CheckCircle,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

export function Calculator() {
  const [areaM2, setAreaM2] = useState<number>(18);
  const [sunExposure, setSunExposure] = useState<CalculatorInput["sunExposure"]>("tarde");
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [electronicsCount, setElectronicsCount] = useState<number>(2);
  const [roomType, setRoomType] = useState<CalculatorInput["roomType"]>("quarto");
  const [hasCurtains, setHasCurtains] = useState<boolean>(true);

  const result = useMemo(() => {
    return calculateThermalLoad({
      areaM2,
      sunExposure,
      peopleCount,
      electronicsCount,
      roomType,
      hasCurtains
    });
  }, [areaM2, sunExposure, peopleCount, electronicsCount, roomType, hasCurtains]);

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-b from-slate-50 to-sky-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-800">
            <CalcIcon className="w-4 h-4 text-sky-600" />
            <span>Dimensionamento de Engenharia</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Calculadora Inteligente de BTUs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Descubra em segundos a capacidade térmica exata para o seu ambiente e evite comprar ar-condicionado fraco ou sobredimensionado que desperdiça energia.
          </p>
        </div>

        {/* Caixa da Calculadora */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Lado dos Inputs */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              1. Dados do seu ambiente:
            </h3>

            {/* Área em m² */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Área do Cômodo:
                </label>
                <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  {areaM2} m²
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={areaM2}
                onChange={(e) => setAreaM2(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>5 m²</span>
                <span>50 m²</span>
                <span>100 m²</span>
              </div>
            </div>

            {/* Tipo de Ambiente */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                Tipo de Imóvel / Uso:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "quarto", label: "Quarto" },
                  { id: "sala", label: "Sala / Living" },
                  { id: "escritorio", label: "Escritório" },
                  { id: "comercio", label: "Comércio" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRoomType(item.id as CalculatorInput["roomType"])}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      roomType === item.id
                        ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Exposição Solar */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                Incidência de Sol:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: "manha", label: "Sol da Manhã (Ameno)" },
                  { id: "tarde", label: "Sol da Tarde (Intenso)" },
                  { id: "dia-todo", label: "Sol o Dia Todo" },
                  { id: "sem-sol", label: "Pouco / Sem Sol Direto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSunExposure(item.id as CalculatorInput["sunExposure"])}
                    className={`p-2.5 rounded-xl font-medium border text-left transition-all ${
                      sunExposure === item.id
                        ? "bg-sky-50 text-sky-800 border-sky-400 font-semibold"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pessoas & Eletrônicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                  Pessoas no local:
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold text-slate-900 w-8 text-center text-sm">
                    {peopleCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPeopleCount(peopleCount + 1)}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                  Computadores / TVs:
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setElectronicsCount(Math.max(0, electronicsCount - 1))}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold text-slate-900 w-8 text-center text-sm">
                    {electronicsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setElectronicsCount(electronicsCount + 1)}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Cortinas */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="cortinas"
                checked={hasCurtains}
                onChange={(e) => setHasCurtains(e.target.checked)}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
              />
              <label htmlFor="cortinas" className="text-xs text-slate-600 select-none">
                Ambiente possui cortinas ou persianas nas janelas
              </label>
            </div>
          </div>

          {/* Lado do Resultado / Conversão */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-4 border border-sky-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                Resultado do Dimensionamento
              </div>

              <p className="text-xs uppercase tracking-wider text-slate-400">
                Capacidade Nominal Recomendada:
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  {result.recommendedBtu.toLocaleString("pt-BR")}
                </span>
                <span className="text-xl font-bold text-sky-400">BTUs/h</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Carga líquida calculada: {result.exactBtu.toLocaleString("pt-BR")} BTUs/h
              </p>

              {/* Sugestão de Equipamento */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Tipo de Aparelho Indicado
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {result.recommendedCategory}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Sugestão Daikin
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    {result.daikinModelSuggestion}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-xs text-emerald-300">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{result.monthlySavingsEstimate}</span>
                </div>
              </div>
            </div>

            {/* Ação: Levar este cálculo para o WhatsApp */}
            <div className="mt-8 pt-4">
              <a
                href={`https://wa.me/${companyData.contacts.whatsapp.number}?text=${result.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brilho w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-4 text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Orçar este {result.recommendedBtu.toLocaleString("pt-BR")} BTUs no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-400">
                Orçamento gratuito com visita técnica e cálculo preciso no local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
