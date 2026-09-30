import React from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Gauge,
  ThermometerSnowflake,
  Star
} from "lucide-react";

export function Hero() {
  const stats = [
    { value: companyData.credentials.experienceYears, label: "Anos de Experiência" },
    { value: companyData.credentials.servicedClients, label: "Clientes Atendidos" },
    { value: companyData.credentials.googleRating, label: "Nota Máxima no Google", icon: true },
    { value: "100%", label: "Marcas Atendidas" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Luzes difusas de fundo */}
      <div
        aria-hidden="true"
        className="animate-flutuar pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-sky-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-flutuar-lento pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-700/20 blur-3xl"
      />

      {/* Emblema Like Air ao fundo em telas grandes */}
      <div
        aria-hidden="true"
        className="animate-respirar pointer-events-none absolute -right-20 top-1/2 hidden w-[32rem] -translate-y-1/2 opacity-20 lg:block select-none"
      >
        <Image
          src="/emblema.png"
          alt=""
          width={873}
          height={792}
          className="h-auto w-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-3xl">
          {/* Badge Oficial Daikin */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-900/40 px-4 py-1.5 text-xs sm:text-sm text-sky-200 backdrop-blur-md mb-6 shadow-lg shadow-sky-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="font-semibold text-white">Assistência Credenciada Daikin</span>
            <span className="text-sky-400">·</span>
            <span>São Paulo & Região</span>
          </div>

          {/* Headline de Alta Conversão */}
          <h1 className="font-bold tracking-tight text-4xl sm:text-6xl lg:text-6.5xl leading-[1.08]">
            <span className="block text-white">O conforto do clima ideal,</span>
            <span className="texto-gradiente block mt-2">
              com a precisão da engenharia Daikin.
            </span>
          </h1>

          {/* Subtítulo com Proposta de Valor Racional */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Instalação com <strong className="text-white font-semibold">Protocolo Vazamento Zero</strong> (brasagem sob nitrogênio e vácuo profundo a 500 microns), especialistas em <strong className="text-white font-semibold">VRV / VRF</strong> e contratos de <strong className="text-white font-semibold">PMOC</strong> para empresas e residências em São Paulo.
          </p>

          {/* Diferenciais em Pílulas */}
          <div className="mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Garantia técnica estendida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Equipe treinada na fábrica Daikin
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Laudos técnicos com ART/CREA
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contato"
              className="btn-brilho inline-flex items-center justify-center gap-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-4 text-base shadow-xl shadow-sky-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Solicitar Orçamento Técnico</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={companyData.contacts.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brilho inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold px-7 py-4 text-base transition-all hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              <span>Falar com Técnico no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Grade de Estatísticas / Prova Social */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {stat.value}
                </span>
                {stat.icon && (
                  <div className="flex gap-0.5 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
