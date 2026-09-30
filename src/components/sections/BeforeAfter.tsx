"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { beforeAfterData } from "@/data/galleryData";
import { companyData } from "@/data/companyData";
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldAlert } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="antes-depois" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Informações da Higienização */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs sm:text-sm font-semibold text-sky-700">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Saúde do Ar & Economia Elétrica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {beforeAfterData.title}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {beforeAfterData.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>O risco do ar contaminado:</strong> A sujeira impregnada na turbina reduz até 40% da vazão de ar e abriga colônias de fungos que causam crises alérgicas, rinite e bronquite.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>O padrão Like Air:</strong> Lavagem técnica com bolsa coletora impermeável, desincrustante bactericida ANVISA e pastilhas biocidas na bandeja do dreno.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/5511968951207?text=${encodeURIComponent(
                  "Olá Alex! Vi o comparativo de antes e depois da higienização no site e gostaria de agendar a limpeza do meu ar-condicionado."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brilho inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-7 py-3 text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>Agendar Higienização Completa</span>
              </a>
            </div>
          </div>

          {/* Slider Interativo Antes e Depois */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <p className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1.5">
              <ArrowLeftRight className="w-4 h-4 text-sky-500" />
              {beforeAfterData.subtitle}
            </p>

            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 select-none cursor-ew-resize touch-none"
            >
              {/* Imagem "Depois" (Fundo completo) */}
              <div className="absolute inset-0">
                <Image
                  src={beforeAfterData.afterImage}
                  alt={beforeAfterData.afterLabel}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 right-4 bg-sky-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  DEPOIS (Limpo)
                </span>
              </div>

              {/* Imagem "Antes" (Sobreposta com clip-path) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={beforeAfterData.beforeImage}
                  alt={beforeAfterData.beforeLabel}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  ANTES (Sujo)
                </span>
              </div>

              {/* Divisor & Botão de Controle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-sky-600 border-2 border-white shadow-xl flex items-center justify-center text-white">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400 text-center">
              Turbina do evaporador Like Air Service antes e depois da descontaminação química.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
