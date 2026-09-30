import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUp
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative bg-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Coluna 1: Marca & Credencial */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/logo.png"
                alt="Like Air Service"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {companyData.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/80 rounded-xl px-3.5 py-2 text-xs text-sky-200">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{companyData.credentials.daikin}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.contacts.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram da Like Air"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a
                href={companyData.contacts.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800 hover:border-emerald-500 hover:text-white flex items-center justify-center text-emerald-400 transition-colors"
                aria-label="WhatsApp da Like Air"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={companyData.credentials.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs text-slate-300 transition-colors"
              >
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-slate-500">Google</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Soluções Técnicas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Instalação Padrão Ouro (Vácuo 500μ)
                </a>
              </li>
              <li>
                <a href="#daikin-vrv" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Sistemas VRV / VRF Daikin
                </a>
              </li>
              <li>
                <a href="#pmoc" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  PMOC Corporativo (Lei 13.589/18)
                </a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Higienização com Bolsa Coletora
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Reparo Eletrônico & Recarga de Gás
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Calculadora Térmica de BTUs
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Diretos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Canais Oficiais
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {companyData.contacts.phones.map((phone) => (
                <li key={phone.raw}>
                  <a
                    href={`tel:${phone.raw}`}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{phone.display}</span>
                    {phone.isWhatsapp && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-1.5 py-0.2">
                        WhatsApp
                      </span>
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${companyData.contacts.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{companyData.contacts.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{companyData.businessHours.days}, {companyData.businessHours.hours}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Região de Atendimento */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Regiões em SP
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>São Paulo Capital</span>
              </p>
              <p className="pl-5 text-slate-500">Jardins, Moema, Itaim, Morumbi, Pinheiros</p>
              <p className="flex items-start gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>Alphaville & Tamboré</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>ABC Paulista</span>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Direitos, CNPJ e Link ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>© {currentYear} Like Air Service. Todos os direitos reservados.</span>
            <span>CNPJ: {companyData.credentials.cnpj}</span>
            <Link href="/privacidade" className="hover:text-slate-300 underline underline-offset-2">
              Política de Privacidade
            </Link>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors py-1 px-3 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
