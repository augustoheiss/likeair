import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { companyData } from "@/data/companyData";
import { Star, MessageSquare, ExternalLink, CheckCircle } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <span className="flex text-amber-500">★★★★★</span>
            <span>Nota 5.0 no Google Avaliações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight">
            Quem chamou a Like Air, recomenda.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Transparência, limpeza após o serviço e rigor técnico reconhecidos por clientes residenciais e corporativos.
          </p>

          <div className="mt-4">
            <a
              href={companyData.credentials.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 underline underline-offset-4"
            >
              <span>Ver todas as avaliações no Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Grade de Depoimentos Reais */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Estrelas */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comentário */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              {/* Autor */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      {item.name}
                      <CheckCircle className="w-3 h-3 text-sky-500 inline shrink-0" />
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    {item.serviceType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para Avaliar */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Já é cliente da Like Air?{" "}
          <a
            href={companyData.credentials.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-600 hover:text-sky-800 underline underline-offset-2"
          >
            Deixe sua avaliação no Google
          </a>
        </div>
      </div>
    </section>
  );
}
