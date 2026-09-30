// src/data/galleryData.ts
// Catálogo de projetos reais executados pela Like Air Service

export interface GalleryItem {
  id: string;
  title: string;
  category: "daikin-vrv" | "instalacao" | "higienizacao" | "manutencao" | "infraestrutura";
  categoryLabel: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const galleryCategories = [
  { id: "todos", label: "Todos os Projetos" },
  { id: "daikin-vrv", label: "Daikin & VRV" },
  { id: "instalacao", label: "Instalação Residencial" },
  { id: "higienizacao", label: "Higienização Profunda" },
  { id: "manutencao", label: "Reparo & Manutenção" },
  { id: "infraestrutura", label: "Obras & Infraestrutura" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "condensadoras-daikin-terraco",
    title: "Condensadoras Daikin instaladas em terraço técnico",
    category: "daikin-vrv",
    categoryLabel: "Daikin & VRV",
    image: "/galeria/condensadoras-daikin-terraco.jpeg",
    description:
      "Instalação múltipla de condensadoras Daikin com coxins antivibração, espaço de circulação e alinhamento geométrico impecável para evitar curto-circuito térmico.",
    featured: true
  },
  {
    id: "vrv-daikin-terraco",
    title: "Manutenção e Comissionamento de Sistema VRV Daikin",
    category: "daikin-vrv",
    categoryLabel: "Daikin & VRV",
    image: "/galeria/vrv-daikin-terraco.jpeg",
    description:
      "Vistoria técnica e checagem de parâmetros de condensadora VRV Daikin de alta capacidade em cobertura corporativa em São Paulo.",
    featured: true
  },
  {
    id: "split-daikin-painel-ripado",
    title: "Split Daikin Inverter integrado a painel ripado",
    category: "instalacao",
    categoryLabel: "Instalação Residencial",
    image: "/galeria/split-daikin-painel-ripado.jpeg",
    description:
      "Acabamento arquitetônico de alto padrão: tubulação totalmente embutida com retorno de ar livre e distribuição homogênea no living.",
    featured: true
  },
  {
    id: "split-daikin-quarto",
    title: "Split Daikin em Suíte Residencial",
    category: "instalacao",
    categoryLabel: "Instalação Residencial",
    image: "/galeria/split-daikin-quarto.jpeg",
    description:
      "Instalação silenciosa em dormitório com vácuo a 500 microns e isolamento térmico integral para prevenir ruídos e gotejamentos noturnos.",
    featured: false
  },
  {
    id: "higienizacao-evaporadora",
    title: "Higienização profunda com bolsa coletora impermeável",
    category: "higienizacao",
    categoryLabel: "Higienização Profunda",
    image: "/galeria/higienizacao-evaporadora.jpeg",
    description:
      "Limpeza pressurizada com aplicação de bactericida e proteção completa das paredes e mobília do cliente através de bolsa coletora técnica.",
    featured: true
  },
  {
    id: "condensadora-samsung-laje",
    title: "Fixação e ancoragem de condensadora em laje técnica",
    category: "instalacao",
    categoryLabel: "Instalação Residencial",
    image: "/galeria/condensadora-samsung-laje.jpeg",
    description:
      "Montagem segura com suportes galvanizados reforçados, amortecedores de impacto e passagem estanque de tubulação frigorífica.",
    featured: false
  },
  {
    id: "passagem-de-infraestrutura",
    title: "Passagem de infraestrutura frigorífica em obra",
    category: "infraestrutura",
    categoryLabel: "Obras & Infraestrutura",
    image: "/galeria/passagem-de-infraestrutura.jpeg",
    description:
      "Linhas frigoríficas de cobre classe A e drenos em PVC embutidos na alvenaria antes do acabamento, testados com pressão positiva de Nitrogênio.",
    featured: true
  },
  {
    id: "troca-serpentina-condensadora",
    title: "Reparo de circuito e troca de serpentina da condensadora",
    category: "manutencao",
    categoryLabel: "Reparo & Manutenção",
    image: "/galeria/troca-serpentina-condensadora.jpeg",
    description:
      "Intervenção corretiva especializada: brasagem com nitrogênio de proteção e recolhimento ecológico do fluido refrigerante.",
    featured: false
  },
  {
    id: "atendimento-tecnico-split",
    title: "Diagnóstico eletrônico em equipamento Inverter",
    category: "manutencao",
    categoryLabel: "Reparo & Manutenção",
    image: "/galeria/atendimento-tecnico-split.jpeg",
    description:
      "Leitura de códigos de erro, teste de sensores NTC e medição de corrente com alicate amperímetro digital de precisão.",
    featured: false
  }
];

export const beforeAfterData = {
  title: "A Diferença Visível da Higienização Profissional",
  subtitle: "Arraste a alça para comparar a turbina do evaporador",
  description:
    "A turbina acumula mofo, poeira e ácaros que você não vê a olho nu. Isso bloqueia a vazão de ar, força o motor do ventilador, aumenta a conta de luz e contamina o ar respirado pela sua família. Nossa higienização desmonta o conjunto e lava com produto bactericida homologado na ANVISA.",
  beforeImage: "/galeria/turbina-antes.jpeg",
  afterImage: "/galeria/turbina-depois.jpeg",
  beforeLabel: "Antes da Higienização",
  afterLabel: "Depois (Turbina Restaurada)"
};
