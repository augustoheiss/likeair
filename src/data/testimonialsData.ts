// src/data/testimonialsData.ts
// Avaliações reais de clientes da Like Air Service verificadas no Google Maps

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "alex-cardoso",
    name: "Alex Cardoso",
    role: "Cliente Residencial",
    location: "São Paulo - SP",
    rating: 5,
    comment:
      "Ótimo atendimento e serviço! Foram rápidos para realizar o serviço e o resultado ficou muito bom. Tudo foi feito com bastante cuidado e profissionalismo. Fiquei satisfeito e recomendo a empresa para quem precisar de serviço de ar-condicionado!",
    date: "Avaliação verificada no Google",
    serviceType: "Instalação Split"
  },
  {
    id: "renata-pereira",
    name: "Renata Pereira",
    role: "Cliente Residencial",
    location: "São Paulo - SP",
    rating: 5,
    comment:
      "Ótima equipe, a instalação do meu ar-condicionado ficou perfeita.",
    date: "Avaliação verificada no Google",
    serviceType: "Instalação Residencial"
  }
];
