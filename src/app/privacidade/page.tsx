import React from "react";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Like Air Service",
  description: "Política de privacidade e conformidade com a LGPD da Like Air Service.",
};

export default function PrivacidadePage() {
  return (
    <main className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>LGPD Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-6">
            Política de Privacidade e Proteção de Dados
          </h1>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              A <strong>{companyData.name}</strong>, inscrita no CNPJ sob o nº <strong>{companyData.credentials.cnpj}</strong>, tem o compromisso de respeitar a sua privacidade e proteger os dados pessoais coletados neste website em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 — LGPD).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              1. Coleta de Dados e Finalidade
            </h2>
            <p>
              Os dados solicitados em nossos formulários (como nome, telefone/WhatsApp, e-mail, bairro e detalhes do equipamento) são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Elaborar propostas comerciais e orçamentos técnicos de climatização;</li>
              <li>Agendar visitas técnicas, instalações, manutenções e auditorias de PMOC;</li>
              <li>Responder a dúvidas de clientes via WhatsApp ou e-mail.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              2. Não Compartilhamento com Terceiros
            </h2>
            <p>
              A Like Air Service <strong>não comercializa, não aluga e não compartilha</strong> suas informações pessoais com terceiros para fins de marketing ou publicidade em massa.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              3. Segurança da Informação
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perdas, destruição ou alterações ilícitas. A comunicação deste site é protegida por criptografia SSL/TLS de ponta a ponta.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6">
              4. Contato do Encarregado de Dados
            </h2>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou para solicitar a exclusão de suas informações da nossa base, entre em contato através do e-mail:{" "}
              <a href={`mailto:${companyData.contacts.email}`} className="text-sky-600 font-semibold underline">
                {companyData.contacts.email}
              </a>
              .
            </p>

            <p className="text-xs text-slate-500 pt-6 border-t border-slate-200">
              Última atualização: Setembro de 2026. Like Air Service — São Paulo, SP.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
