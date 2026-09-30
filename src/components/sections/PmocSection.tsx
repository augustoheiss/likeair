import React from "react";
import { companyData } from "@/data/companyData";
import {
  FileCheck,
  ShieldAlert,
  Scale,
  TrendingDown,
  Building2,
  CheckCircle2,
  FileSignature,
  QrCode,
  ArrowRight
} from "lucide-react";

export function PmocSection() {
  const pmocBenefits = [
    {
      icon: Scale,
      title: "Blindagem Contra Multas da ANVISA",
      desc: "Evite multas de R$ 2.000 a R$ 1.500.000 aplicadas pela Vigilância Sanitária (Lei Federal 6.437/1977) por falta de PMOC ou laudos microbiológicos vencidos."
    },
    {
      icon: FileSignature,
      title: "ART / TRT com Engenheiro Mecânico Habilitado",
      desc: "Responsabilidade técnica formal com registro perante o CREA/CFT, laudo semestral de qualidade do ar e plano customizado para seu edifício."
    },
    {
      icon: TrendingDown,
      title: "Redução de até 30% na Fatura de Energia (TCO)",
      desc: "A manutenção preventiva elimina a perda silenciosa de rendimento (degradação do COP), evitando que os compressores trabalhem sobrecarregados."
    },
    {
      icon: QrCode,
      title: "Gestão 100% Digital com QR Code",
      desc: "Cada equipamento recebe uma etiqueta técnica com QR Code. Fiscais sanitários e auditores leem o livro de registros em segundos pelo smartphone."
    }
  ];

  return (
    <section id="pmoc" className="py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto e Destaque da Lei */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Climatização Corporativa & Gestão de Ativos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contratos de PMOC:{" "}
              <span className="text-emerald-400">
                Sua empresa 100% blindada e em dia com a Lei.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A <strong>Lei Federal nº 13.589/2018</strong> determina que todo edifício de uso público e coletivo com carga instalada superior a <strong>60.000 BTU/h (5 TR)</strong> deve manter um Plano de Manutenção, Operação e Controle. A Like Air Service assume o gerenciamento completo do seu parque térmico.
            </p>

            {/* Caixa de Alerta Regulatório */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Obrigatoriedade para:</span>
              </div>
              <p className="pl-6 text-slate-300 text-xs leading-relaxed">
                Clínicas, consultórios, escritórios empresariais, restaurantes, academias, escolas, condomínios e indústrias. A responsabilidade civil recai diretamente sobre os gestores e síndicos.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/5511968951207?text=${encodeURIComponent(
                  "Olá Alex! Gostaria de solicitar uma proposta técnica para Contrato de PMOC na minha empresa."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brilho inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Solicitar Proposta de PMOC</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 text-sm transition-colors"
              >
                <span>Agendar Vistoria Técnica</span>
              </a>
            </div>
          </div>

          {/* Coluna dos 4 Pilares de Engenharia do PMOC */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pmocBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-slate-800/50 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
