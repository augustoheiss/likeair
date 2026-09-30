"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems, GalleryItem } from "@/data/galleryData";
import { companyData } from "@/data/companyData";
import { Maximize2, X, ArrowRight, ShieldCheck, Camera } from "lucide-react";

export function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "todos"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Registros Reais em Campo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Galeria de Trabalhos Entregues
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Veja a qualidade do acabamento, a precisão das conexões frigoríficas e o rigor estético em residências, condomínios e empresas.
            </p>
          </div>

          <a
            href={companyData.contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
          >
            <span>Ver mais no Instagram @likeairservice</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Abas de Filtros */}
        <div className="mt-10 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-102"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grade de Imagens */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Overlay com Informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="text-white text-base font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Clique para ampliar</span>
                </div>
              </div>

              {/* Selo Categoria visível no card */}
              <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] font-bold bg-white/90 backdrop-blur-sm text-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors shadow"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-white border-t lg:border-t-0 lg:border-l border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    {selectedImage.categoryLabel}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/5511968951207?text=${encodeURIComponent(
                      `Olá Alex! Vi o projeto "${selectedImage.title}" na galeria do site e gostaria de um serviço similar para o meu imóvel.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brilho w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 text-sm transition-all shadow"
                  >
                    <span>Solicitar Projeto Similar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
