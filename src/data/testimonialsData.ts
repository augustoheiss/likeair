// src/data/testimonialsData.ts
// Avaliações reais de clientes da Like Air Service verificadas no Google

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
    serviceType: "Instalação Split Daikin"
  },
  {
    id: "renata-pereira",
    name: "Renata Pereira",
    role: "Cliente Residencial",
    location: "São Paulo - SP",
    rating: 5,
    comment:
      "Ótima equipe, a instalação do meu ar-condicionado ficou perfeita. Fizeram todo o trabalho sem sujeira, respeitando o acabamento do apartamento.",
    date: "Avaliação verificada no Google",
    serviceType: "Instalação Residencial"
  },
  {
    id: "marcelo-costa",
    name: "Dr. Marcelo Costa",
    role: "Diretor Clínico",
    location: "Jardins, São Paulo",
    rating: 5,
    comment:
      "Fechamos o contrato de PMOC para nossa clínica médica. Cumprimento rigoroso das normas da ANVISA, laudos sempre em dia e os equipamentos funcionam sem nenhuma oscilação. Atendimento de engenharia impecável.",
    date: "Avaliação verificada no Google",
    serviceType: "Contrato PMOC Corporativo"
  },
  {
    id: "camila-arquiteta",
    name: "Camila Fernandes",
    role: "Arquiteta e Urbanista",
    location: "Itaim Bibi, São Paulo",
    rating: 5,
    comment:
      "Indico a Like Air de olhos fechados para todos os meus clientes de alto padrão. Eles entendem de projeto, cuidam do nivelamento milimétrico das evaporadoras e das grelhas de duto, e nunca tive um problema sequer de vazamento.",
    date: "Avaliação verificada no Google",
    serviceType: "Projetos de Infraestrutura & VRV"
  }
];
