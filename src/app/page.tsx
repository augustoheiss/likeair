import React from "react";
import { Hero } from "@/components/sections/Hero";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyDaikin } from "@/components/sections/WhyDaikin";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { PmocSection } from "@/components/sections/PmocSection";
import { Calculator } from "@/components/sections/Calculator";
import { GalleryFilter } from "@/components/sections/GalleryFilter";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero com Destaque Daikin Oficial & Estatísticas */}
      <Hero />

      {/* 2. Marcas Parceiras em Carrossel Contínuo */}
      <BrandsMarquee />

      {/* 3. Catálogo de Serviços com Protocolos da Engenharia */}
      <ServicesGrid />

      {/* 4. Por que Daikin & Foto Oficial da Equipe */}
      <WhyDaikin />

      {/* 5. Comparador Interativo de Higienização (Turbina Antes vs Depois) */}
      <BeforeAfter />

      {/* 6. PMOC Corporativo & Gestão de Ativos (Lei 13.589/2018) */}
      <PmocSection />

      {/* 7. Calculadora Inteligente de Carga Térmica & BTUs */}
      <Calculator />

      {/* 8. Galeria de Projetos Reais Filtrável com Lightbox */}
      <GalleryFilter />

      {/* 9. Prova Social: Depoimentos 5 Estrelas no Google */}
      <Testimonials />

      {/* 10. Formulário Integrado de Orçamento & Atendimento */}
      <ContactForm />
    </main>
  );
}
