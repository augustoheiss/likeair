import React from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { ShieldCheck } from "lucide-react";

export function BrandsMarquee() {
  const brands = companyData.brands;
  // Duplicar array para efeito de loop infinito suave
  const doubleBrands = [...brands, ...brands];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
          Especialização Multimarcas
        </p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
          Instalação e Manutenção das Melhores Marcas do Mundo
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Assistência técnica credenciada Daikin e expertise comprovada em toda a linha Inverter e VRV de todos os fabricantes.
        </p>
      </div>

      {/* Carrossel Marquee Infinito */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 items-center">
          {doubleBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className={`relative flex items-center justify-center px-6 py-4 rounded-xl border transition-all duration-300 min-w-[130px] sm:min-w-[150px] h-20 ${
                brand.isCredenciado
                  ? "bg-sky-950/80 border-sky-400/60 shadow-lg shadow-sky-500/10"
                  : "bg-slate-950/70 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {brand.isCredenciado && (
                <span className="absolute -top-2.5 right-2 inline-flex items-center gap-1 rounded-full bg-sky-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-950 shadow">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  Credenciado
                </span>
              )}
              <div className="relative h-8 w-24">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className={`object-contain transition-all duration-300 ${
                    brand.isCredenciado
                      ? "brightness-100"
                      : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
