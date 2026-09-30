// src/data/companyData.ts
// Dados institucionais oficiais da Like Air Service

export const companyData = {
  name: "Like Air Service",
  shortName: "Like Air",
  tagline: "O conforto do clima ideal, com a leveza do Ar.",
  headline: "Engenharia Térmica e Assistência Técnica Credenciada Daikin",
  description:
    "Especialistas em instalação, manutenção preventiva, contratos PMOC e diagnóstico avançado para sistemas Daikin, VRV/VRF e todas as principais marcas em São Paulo e região.",
  
  credentials: {
    daikin: "Assistência Técnica Credenciada Oficial Daikin Brasil",
    cnpj: "53.441.785/0001-02",
    googleRating: "5.0",
    googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJ0Zr3H8I0AKYRGDDpHtX51jc",
    googleWriteReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ0Zr3H8I0AKYRGDDpHtX51jc",
    experienceYears: "10+",
    servicedClients: "3.500+"
  },

  contacts: {
    whatsapp: {
      number: "5511968951207",
      display: "(11) 96895-1207",
      link: "https://wa.me/5511968951207?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Like%20Air%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico."
    },
    phones: [
      { display: "(11) 96895-1207", raw: "11968951207", isWhatsapp: true },
      { display: "(11) 94769-5079", raw: "11947695079", isWhatsapp: false },
      { display: "(11) 91537-7764", raw: "11915377764", isWhatsapp: false }
    ],
    email: "Likeairhvac@outlook.com",
    instagram: {
      handle: "@likeairservice",
      url: "https://instagram.com/likeairservice"
    }
  },

  businessHours: {
    days: "Segunda a Sexta-feira",
    hours: "08:00 às 18:00",
    emergency: "Plantão para contratos corporativos e sistemas críticos"
  },

  coverage: {
    primary: "São Paulo - Capital",
    regions: [
      "São Paulo (Capital)",
      "Jardins, Moema, Itaim Bibi, Pinheiros e Morumbi",
      "Alphaville e Tamboré",
      "Granja Viana e Cotia",
      "ABC Paulista (Santo André, São Bernardo, São Caetano)",
      "Guarulhos e Osasco"
    ]
  },

  brands: [
    { name: "Daikin", logo: "/marcas/daikin.svg", isCredenciado: true },
    { name: "LG", logo: "/marcas/lg.svg", isCredenciado: false },
    { name: "Samsung", logo: "/marcas/samsung.svg", isCredenciado: false },
    { name: "Carrier", logo: "/marcas/carrier.svg", isCredenciado: false },
    { name: "Springer Midea", logo: "/marcas/midea.svg", isCredenciado: false },
    { name: "Fujitsu", logo: "/marcas/fujitsu.svg", isCredenciado: false },
    { name: "Gree", logo: "/marcas/gree.svg", isCredenciado: false },
    { name: "Electrolux", logo: "/marcas/electrolux.svg", isCredenciado: false },
    { name: "Philco", logo: "/marcas/philco.svg", isCredenciado: false },
    { name: "Consul", logo: "/marcas/consul.svg", isCredenciado: false }
  ]
};
