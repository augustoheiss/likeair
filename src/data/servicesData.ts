// src/data/servicesData.ts
// Catálogo de Serviços de Engenharia Térmica Like Air Service
// Alimentado pelas diretrizes técnicas dos cursos de Instalação e Manutenção HVAC

export interface TechnicalDetail {
  title: string;
  description: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  shortDesc: string;
  badge?: string;
  fullDesc: string;
  targetAudience: string;
  equipments: string[];
  technicalHighlights: TechnicalDetail[];
  standardsComplied: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "instalacao-padrao-ouro",
    slug: "instalacao-ar-condicionado",
    iconName: "ShieldCheck",
    title: "Instalação Padrão Ouro (Protocolo Vazamento Zero)",
    badge: "Exclusivo Like Air",
    shortDesc:
      "Instalação com rigor da engenharia termodinâmica: brasagem sob fluxo de Nitrogênio seco (OFN), flangeamento com Nylog e teste de estanqueidade a 550 PSI.",
    fullDesc:
      "A maioria dos instaladores queima tubulações sem proteção, gerando fuligem de óxido cúprico que destrói as válvulas eletrônicas (EEV) dos compressores Inverter. Na Like Air Service, executamos cada instalação com o protocolo de alta performance: atmosfera inerte de nitrogênio durante a solda, desidratação profunda com vacuômetro digital abaixo de 500 microns e torque medido conforme a Lei de Hooke.",
    targetAudience: "Residências de alto padrão, coberturas, escritórios, consultórios e reformas de arquitetura.",
    equipments: [
      "Split Hi-Wall Inverter (Daikin, Fujitsu, LG, Samsung)",
      "Multi-Split (1 condensadora para até 5 ambientes)",
      "Cassete 1 Via e 4 Vias (Efeito Coanda no forro de gesso)",
      "Split Piso-Teto para grandes vãos",
      "Built-in Dutado (Climatização invisível com difusores lineares)"
    ],
    technicalHighlights: [
      {
        tag: "Anticontaminação",
        title: "Brasagem Limpa com Nitrogênio Ativo",
        description:
          "Fluxo contínuo de 2 a 5 SCFH de nitrogênio seco durante a solda. Elimina 100% da casca de óxido cúprico interna que entope válvulas de expansão."
      },
      {
        tag: "Vedação Perfeita",
        title: "Flanges Excêntricas com Selante Nylog Blue",
        description:
          "Flangeamento com catraca de embreagem e lubrificação da face com Nylog sintético, mantendo a rosca seca para torque exato via torquímetro digital."
      },
      {
        tag: "Vácuo Profundo",
        title: "Evacuação abaixo de 500 Mícrons",
        description:
          "Extração de umidade com bomba de duplo estágio e teste de decaimento por 15 minutos com vacuômetro digital. Impede a hidrólise do óleo lubrificante sintético POE."
      },
      {
        tag: "Eficiência Térmica",
        title: "Isolamento Elastomérico Sem Estrangulamento",
        description:
          "Tubos de sucção e expansão isolados individualmente com borracha elastomérica de células fechadas coladas com adesivo Wet Seal, sem abraçadeiras plásticas esmagando o isolamento."
      }
    ],
    standardsComplied: [
      "ABNT NBR 16655 (Instalação de Sistemas Split)",
      "Normas Técnicas Oficiais Daikin Brasil",
      "Manual ASHRAE Guideline 22"
    ],
    ctaText: "Solicitar Instalação Padrão Ouro"
  },
  {
    id: "especialista-vrv-daikin",
    slug: "especialista-daikin-vrv-vrf",
    iconName: "Cpu",
    title: "Sistemas VRV / VRF Daikin (Residencial & Corporativo)",
    badge: "Credenciado Oficial Daikin",
    shortDesc:
      "Engenharia autorizada para projetos VRV Daikin. Diagnóstico via software oficial D-Checker, alinhamento milimétrico de Refnets e balanceamento de óleo.",
    fullDesc:
      "O sistema VRV (Variable Refrigerant Volume) foi inventado pela Daikin e exige precisão máxima de engenharia. Como assistência credenciada Daikin em São Paulo, dominamos a telemetria, configuração de endereçamento de rede RS-485, alinhamento de Refnets horizontais/verticais (tolerância ±15°) e balanceamento computadorizado de carga por pesagem digital.",
    targetAudience: "Casas em condomínios fechados, coberturas de luxo, edifícios comerciais, clínicas médicas e hotéis.",
    equipments: [
      "Daikin VRV Life (Linha Residencial Inteligente)",
      "Daikin VRV IV-S e VRV Comercial",
      "Central de Controle Inteligente (Intelligent Touch Manager)",
      "Integração com Automação (Home Assistant, Control4, Modbus)"
    ],
    technicalHighlights: [
      {
        tag: "OEM Daikin",
        title: "Telemetria Digital D-Checker",
        description:
          "Conexão direta de notebook na placa da condensadora para leitura em tempo real de abertura de EEVs, frequência do compressor e pressões de evaporação/condensação."
      },
      {
        tag: "Tubulação de Precisão",
        title: "Alinhamento Estrutural de Refnets",
        description:
          "Instalação rigorosamente nivelada das derivações Y-Branch com 50 cm de trecho reto, eliminando turbulências (vórtices de Dean) e garantindo retorno homogêneo de óleo ao cárter."
      },
      {
        tag: "Infraestrutura RS-485",
        title: "Comunicação em Daisy-Chain Sem Ruídos",
        description:
          "Rede de dados com cabo blindado STP aterrado em ponto único na condensadora, evitando interferência eletromagnética (EMI) dos inversores de frequência."
      }
    ],
    standardsComplied: [
      "Daikin VRV Design & Engineering Manual",
      "Certificação Técnica Daikin Training Center",
      "NEMA MG-1 (Equilíbrio de Fases Elétricas)"
    ],
    ctaText: "Consultar Especialista VRV Daikin"
  },
  {
    id: "pmoc-corporativo",
    slug: "pmoc-ar-condicionado-empresas",
    iconName: "FileCheck",
    title: "Contratos de PMOC (Lei Federal 13.589/2018)",
    badge: "Conformidade Legal & Sanitária",
    shortDesc:
      "Plano de Manutenção, Operação e Controle obrigatório com ART/TRT de engenheiro habilitado, laudos semestrais da ANVISA e livro de registros digital.",
    fullDesc:
      "Toda empresa ou condomínio com capacidade instalada superior a 60.000 BTU/h (5 TR) é obrigada por lei a ter PMOC ativo. A falta dele gera multas de R$ 2.000 a R$ 1.500.000 pela Vigilância Sanitária (Lei 6.437/1977). A Like Air Service assume a responsabilidade técnica do seu parque de climatização, garantindo qualidade do ar, redução de até 30% no consumo de energia (TCO) e blindagem jurídica completa.",
    targetAudience: "Empresas, escritórios de advocacia, clínicas médicas, academias, escolas, restaurantes, galpões e indústrias.",
    equipments: [
      "Parques completos de Split, Multi-Split e VRV/VRF",
      "Self-Contained e Rooftops",
      "Centrais de Água Gelada (Fancoils e Chillers)",
      "Sistemas de Exaustão Mecânica e Renovação de Ar"
    ],
    technicalHighlights: [
      {
        tag: "Obrigação Legal",
        title: "Emissão de ART / TRT Oficial",
        description:
          "Anotação de Responsabilidade Técnica perante o CREA/CFT com engenheiro mecânico legalmente habilitado, com validação perante os órgãos fiscalizadores."
      },
      {
        tag: "Qualidade do Ar ANVISA",
        title: "Laudo Microbiológico (RE-09/2003)",
        description:
          "Controle rigoroso de contagem de fungos (< 750 UFC/m³), dióxido de carbono CO₂ (< 1.000 ppm) e temperatura e umidade para prevenir Síndrome do Edifício Doente."
      },
      {
        tag: "Gestão do TCO",
        title: "Economia Real na Conta de Luz",
        description:
          "A manutenção preditiva evita a degradação silenciosa do COP (coeficiente de performance). Filtros e serpentinas limpos reduzem o consumo de energia elétrica em até 30%."
      },
      {
        tag: "Gestão 100% Digital",
        title: "Livro de Registros e QR Codes",
        description:
          "Cada máquina recebe um selo com QR Code. Fiscais e auditores leem o histórico, medições elétricas e últimas trocas de filtros em segundos pelo celular."
      }
    ],
    standardsComplied: [
      "Lei Federal nº 13.589/2018 (PMOC Obrigatório)",
      "Resolução ANVISA RE-09/2003",
      "Portaria MS nº 3.523/1998",
      "Lei Federal nº 6.437/1977"
    ],
    ctaText: "Solicitar Proposta de PMOC"
  },
  {
    id: "higienizacao-profunda",
    slug: "higienizacao-limpeza-ar-condicionado",
    iconName: "Sparkles",
    title: "Higienização Antibacteriana com Bolsa Coletora",
    badge: "Saúde & Eficiência",
    shortDesc:
      "Limpeza técnica profunda com desmontagem da turbina e bandeja de dreno. Aplicação de bactericida homologado ANVISA, sem sujeira na sua parede.",
    fullDesc:
      "Apenas passar um pano e lavar o filtro de nylon não resolve o problema: ácaros, fungos e biofilmes se alojam nas aletas da serpentina e nas pás da turbina do evaporador. A Like Air Service realiza a desmontagem técnica no local com bolsa coletora impermeável, lavagem sob pressão e desinfecção com produtos bactericidas e pastilhas biocidas no dreno.",
    targetAudience: "Famílias com crianças e idosos, alérgicos, clínicas de estética, consultórios e ambientes comerciais.",
    equipments: [
      "Evaporadoras Split Hi-Wall de todas as marcas",
      "Evaporadoras Cassete (lavagem do duto de captação e hélice centrífuga)",
      "Condensadoras externas (remoção de fuligem automotiva e maresia)"
    ],
    technicalHighlights: [
      {
        tag: "Sem Bagunça",
        title: "Bolsa Coletora Pressurizada",
        description:
          "Protegemos paredes, rodapés e móveis com lona e bolsa coletora dedicada. A água suja é drenada diretamente para baldes selados sem pingar uma gota."
      },
      {
        tag: "Sanitização Real",
        title: "Química Homologada ANVISA",
        description:
          "Uso de desincrustantes biodegradáveis que dissolvem gordura, mofo e bactérias sem oxidar o alumínio das aletas da serpentina."
      },
      {
        tag: "Prevenção de Pingamento",
        title: "Tratamento da Bandeja com Pastilhas Biocidas",
        description:
          "Desobstrução completa do sifão e colocação de pastilhas de dissolução lenta que impedem a formação de lodo biológico no dreno pelos meses seguintes."
      }
    ],
    standardsComplied: [
      "Normas ANVISA de Higiene do Ar",
      "Protocolo Padrão Simon Climatização",
      "Garantia Like Air de Zero Respingos"
    ],
    ctaText: "Agendar Higienização Completa"
  },
  {
    id: "manutencao-reparo-avancado",
    slug: "reparo-manutencao-ar-condicionado",
    iconName: "Wrench",
    title: "Reparo Corretivo & Diagnóstico Eletrônico Inverter",
    badge: "Diagnóstico de Precisão",
    shortDesc:
      "Solução definitiva para ar-condicionado que parou de gelar, códigos de erro piscando, ruídos mecânicos e queima de placas eletrônicas.",
    fullDesc:
      "Equipamentos modernos Inverter possuem arquitetura eletrônica complexa: placas microcontroladas, barramento de corrente contínua (> 300 Vcc) e módulos de potência IPM. Nossa equipe possui treinamento de ponta para diagnosticar falhas elétricas, testar compressores sem queimar placas novas, sanar vazamentos ocultos e recarregar gás refrigerante ecológico por balança digital.",
    targetAudience: "Clientes que precisam de conserto urgente com peças originais e garantia comprovada.",
    equipments: [
      "Compressores Inverter Scroll e Rotativo Duplo",
      "Placas de Potência e Controle Inverter (OEM)",
      "Válvulas Eletrônicas de Expansão (EEV) e Motores BLDC",
      "Bombas de Drenagem de Condensado e Sensores Térmicos NTC"
    ],
    technicalHighlights: [
      {
        tag: "Gás com Precisão",
        title: "Recarga por Peso em Balança (R-32 / R-410A)",
        description:
          "Nunca completamos gás 'no olhômetro' pelo manômetro. O fluido é pesado na balança digital conforme a etiqueta de fábrica e metragem de linha."
      },
      {
        tag: "Segurança Elétrica",
        title: "Protocolo de Alta Tensão Inverter (CAT III/IV)",
        description:
          "Verificação de descarga dos capacitores do barramento CC (> 300Vcc) antes do manuseio, prevenindo choques e curto-circuitos na placa."
      },
      {
        tag: "Localização de Fugas",
        title: "Caça-Vazamentos com Fluido Viscoelástico & N₂",
        description:
          "Pressurização de circuitos com nitrogênio e detector eletrônico de alta sensibilidade para encontrar microvazamentos invisíveis a olho nu."
      }
    ],
    standardsComplied: [
      "Procedimentos de Garantia Daikin, LG, Samsung e Midea",
      "Segurança NR-10 e NR-35",
      "Manual de Manutenção Avançada AVAC"
    ],
    ctaText: "Solicitar Visita de Reparo"
  },
  {
    id: "infraestrutura-obras",
    slug: "passagem-infraestrutura-ar-condicionado",
    iconName: "Layers",
    title: "Infraestrutura Frigorífica para Obras e Reformas",
    badge: "Para Arquitetos & Engenheiros",
    shortDesc:
      "Passagem de tubulação de cobre, drenos embutidos e cabeamento durante a obra civil. Teste de pressão e lacre para evitar reformas futuras.",
    fullDesc:
      "Deixar a infraestrutura pronta durante a obra civil evita quebra-quebra no futuro. A Like Air projeta o caminhamento correto das linhas frigoríficas, drenos de escoamento por gravidade com conexões rígidas coladas e pontos de energia dimensionados conforme o MCA (Minimum Circuit Ampacity) do fabricante.",
    targetAudience: "Arquitetos, designers de interiores, engenheiros civis e proprietários em fase de reforma.",
    equipments: [
      "Tubos de cobre sem costura classe A com isolamento elastomérico",
      "Drenos em PVC soldados com respiro e caixas de passagem embutidas",
      "Cabos de comando e interligação com terminais prensados"
    ],
    technicalHighlights: [
      {
        tag: "Pressurização de Espera",
        title: "Tubulações Lacradas a 300 PSI com Nitrogênio",
        description:
          "A infraestrutura fica pressurizada com manômetro embutido durante a obra. Se algum pedreiro ou gesseiro furar a tubulação, o manômetro acusa imediatamente."
      },
      {
        tag: "Drenagem Perfeita",
        title: "Hidrodinâmica sem Sifonamento Falso",
        description:
          "Drenos com declive mínimo de 1,5% e respiro adequado para evitar acúmulo de água por pressão negativa do ventilador (draw-through)."
      }
    ],
    standardsComplied: [
      "ABNT NBR 16655-1 (Planejamento e Instalação)",
      "Projetos Compatibilizados com AutoCAD / Revit"
    ],
    ctaText: "Orçar Infraestrutura para Obra"
  }
];
