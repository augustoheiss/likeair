import React from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import {
  ShieldCheck,
  Zap,
  Award,
  Cpu,
  BadgeCheck,
  CheckCircle,
  FileCheck2,
  ArrowRight
} from "lucide-react";

export function WhyDaikin() {
  const pillars = [
    {
      icon: Cpu,
      title: "Tecnologia Inverter Japonesa Original",
      desc: "A Daikin inventou o sistema VRV e o compressor Neo Swing com fluido ecológico R-32, garantindo maior durabilidade e funcionamento ultrassilencioso."
    },
    {
      icon: Zap,
      title: "Até 70% de Redução Energética",
      desc: "Menor consumo de eletricidade da categoria com certificação Procel Ouro. O investimento se paga na própria redução da conta de luz."
    },
    {
      icon: Award,
      title: "Preservação da Garantia de Fábrica",
      desc: "Instalações feitas por técnicos não credenciados perdem a garantia da marca. Com a Like Air, você tem garantia total de fabricante assegurada."
    },
    {
      icon: FileCheck2,
      title: "Peças 100% Originais Daikin Brasil",
      desc: "Acesso direto à cadeia de suprimentos e suporte da engenharia da Daikin, com substituição de componentes genuínos sem adaptações."
    }
  ];

  return (
    <section id="daikin-vrv" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto & Pilares */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-950/80 px-4 py-1.5 text-xs sm:text-sm text-sky-200">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Por que escolher assistência credenciada Daikin?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A marca número 1 do mundo instalada por quem foi{" "}
              <span className="texto-gradiente">treinado na fábrica.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Equipamentos de alta tecnologia exigem ferramentas certificadas. Como credenciados oficiais Daikin, realizamos desde a montagem de Split Hi-Wall até o comissionamento de sistemas VRV de grande porte com telemetria direta via software D-Checker.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-sky-500/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={companyData.contacts.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brilho inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-3 text-sm shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Falar com Técnico Daikin</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                Certificado oficial verificado
              </span>
            </div>
          </div>

          {/* Coluna da Imagem: Equipe no Estande Daikin */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800/50 p-2 shadow-2xl shadow-sky-950/50 group">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/sobre/equipe-daikin.jpeg"
                  alt="Equipe da Like Air Service no estande da Daikin"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Legenda Informativa */}
              <div className="p-4 bg-slate-900/90 rounded-b-2xl border-t border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Presença ativa nos lançamentos Daikin
                </p>
                <p className="mt-1 text-slate-400 text-[11px] leading-relaxed">
                  Nossa equipe acompanha de perto todos os treinamentos e atualizações dos sistemas Inverter e VRV diretamente com os engenheiros da marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
