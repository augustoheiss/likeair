"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import {
  Send,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageSquare
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: servicesData[0].title,
    bairro: "",
    detalhes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `*NOVO PEDIDO DE ORÇAMENTO (Site Like Air)*\n\n` +
      `• *Nome:* ${formData.nome}\n` +
      `• *Telefone/WhatsApp:* ${formData.telefone}\n` +
      `• *E-mail:* ${formData.email || "Não informado"}\n` +
      `• *Serviço:* ${formData.servico}\n` +
      `• *Bairro / Região:* ${formData.bairro || "São Paulo"}\n` +
      `• *Detalhes:* ${formData.detalhes || "Sem observações adicionais"}\n\n` +
      `_Enviado pelo formulário oficial likeair.com.br_`
    );

    // Redireciona diretamente para o WhatsApp do Alex
    const whatsappUrl = `https://wa.me/${companyData.contacts.whatsapp.number}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Lado Institucional & Informações de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
              Atendimento Especializado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Conte com a equipe técnica da Like Air.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Preencha o formulário para receber uma proposta técnica sob medida ou entre em contato diretamente pelo WhatsApp para agendamento rápido de vistorias em São Paulo.
            </p>

            {/* Cartões Rápidos de Contato */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">
                    WhatsApp & Central Telefônica
                  </span>
                  <p className="text-base font-bold text-slate-900">
                    {companyData.contacts.phones[0].display}
                  </p>
                  <p className="text-xs text-slate-500">
                    Atendimento imediato em horário comercial
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">
                    E-mail Corporativo
                  </span>
                  <p className="text-sm font-semibold text-slate-900 break-all">
                    {companyData.contacts.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">
                    Horário de Atendimento
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    {companyData.businessHours.days}, {companyData.businessHours.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Garantia de Privacidade:</strong> Seus dados são utilizados exclusivamente para o envio da proposta comercial da Like Air Service e nunca são compartilhados com terceiros.
              </span>
            </div>
          </div>

          {/* Formulário de Orçamento */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-900/5">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Solicite um Orçamento sem Compromisso
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Informe os detalhes do seu equipamento ou projeto. Respondemos com agilidade.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      E-mail (Opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Bairro ou Cidade em SP
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Moema, Alphaville, Jardins"
                      value={formData.bairro}
                      onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tipo de Serviço Desejado *
                  </label>
                  <select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Outro Serviço de Climatização">Outro Serviço de Climatização</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Detalhes do Equipamento ou Ambiente
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ex: Split Daikin 12.000 BTUs parou de gelar / Sala de 30m² em reforma / Solicitação de visita técnica para PMOC em clínica..."
                    value={formData.detalhes}
                    onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-brilho w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-4 text-sm shadow-xl shadow-sky-600/20 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Pedido & Iniciar Atendimento</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-500 leading-normal">
                    Ao enviar, você concorda com nossos{" "}
                    <Link href="/termos" className="text-sky-600 hover:underline font-medium">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacidade" className="text-sky-600 hover:underline font-medium">
                      Política de Privacidade (LGPD)
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
