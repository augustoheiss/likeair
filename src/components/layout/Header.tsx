"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import { Phone, MessageSquare, Menu, X, Shield, Clock } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Daikin & VRV", href: "#daikin-vrv" },
    { label: "PMOC", href: "#pmoc" },
    { label: "Antes & Depois", href: "#antes-depois" },
    { label: "Galeria", href: "#galeria" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Top Banner de Credenciamento */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-950 text-white text-xs py-2 px-4 border-b border-sky-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-200 border border-sky-400/40 rounded-full px-2.5 py-0.5 font-medium">
              <Shield className="w-3.5 h-3.5 text-sky-300" />
              Credenciado Oficial Daikin
            </span>
            <span className="hidden sm:inline text-sky-200/80">·</span>
            <span className="hidden sm:inline text-sky-100">São Paulo & Grande SP</span>
          </div>

          <div className="flex items-center gap-4 text-sky-200">
            <span className="inline-flex items-center gap-1.5 text-xs text-sky-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Atendimento Comercial Aberto
            </span>
            <span className="hidden md:inline text-sky-400">|</span>
            <a
              href={`tel:${companyData.contacts.phones[0].raw}`}
              className="hidden md:inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              {companyData.contacts.phones[0].display}
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-sky-900/5 border-b border-sky-100 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-36 sm:w-44 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Like Air Service"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500 after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={companyData.contacts.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brilho inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contato"
              className="btn-brilho rounded-full bg-sky-700 hover:bg-sky-800 text-white px-5 py-2 text-sm font-semibold shadow-sm shadow-sky-700/20 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Pedir Orçamento
            </a>
          </div>

          {/* Botão Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Dropdown Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 py-6 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={companyData.contacts.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-3 font-semibold text-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sky-700 text-white px-4 py-3 font-semibold text-sm shadow-sm"
                >
                  Solicitar Proposta Online
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
