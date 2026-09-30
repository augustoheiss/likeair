import React from "react";
import { companyData } from "@/data/companyData";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={companyData.contacts.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com especialista no WhatsApp"
        className="anel-pulso group relative flex items-center gap-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 shadow-xl shadow-emerald-950/30 transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-semibold text-sm tracking-wide hidden sm:inline">
          Falar no WhatsApp
        </span>
        <span className="absolute -top-2 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
      </a>
    </aside>
  );
}
