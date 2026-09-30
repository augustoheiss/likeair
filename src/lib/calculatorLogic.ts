// src/lib/calculatorLogic.ts
// Algoritmo de Cálculo de Carga Térmica (ASHRAE / NBR 5858 simplificado)

export interface CalculatorInput {
  areaM2: number;
  sunExposure: "manha" | "tarde" | "dia-todo" | "sem-sol";
  peopleCount: number;
  electronicsCount: number;
  roomType: "quarto" | "sala" | "escritorio" | "comercio";
  hasCurtains: boolean;
}

export interface CalculatorResult {
  exactBtu: number;
  recommendedBtu: number;
  recommendedCategory: string;
  daikinModelSuggestion: string;
  monthlySavingsEstimate: string;
  whatsappMessage: string;
}

export const standardBtuTiers = [9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000];

export function calculateThermalLoad(input: CalculatorInput): CalculatorResult {
  // Base por metro quadrado conforme exposição solar
  let btuPerM2 = 600;
  if (input.sunExposure === "tarde" || input.sunExposure === "dia-todo") {
    btuPerM2 = 800;
  } else if (input.sunExposure === "sem-sol") {
    btuPerM2 = 550;
  }

  // Fator cortinas/insolação
  if (!input.hasCurtains && (input.sunExposure === "tarde" || input.sunExposure === "dia-todo")) {
    btuPerM2 += 50;
  }

  // Carga base da área
  let totalBtu = input.areaM2 * btuPerM2;

  // Carga térmica de ocupantes adicionais (o primeiro já é considerado na base)
  const additionalPeople = Math.max(0, input.peopleCount - 1);
  totalBtu += additionalPeople * 600;

  // Carga térmica de eletrônicos (computadores, TVs, monitores)
  totalBtu += input.electronicsCount * 600;

  // Fator comercial (maior circulação de pessoas e portas abrindo)
  if (input.roomType === "comercio") {
    totalBtu *= 1.15;
  } else if (input.roomType === "escritorio") {
    totalBtu *= 1.05;
  }

  const exactBtu = Math.round(totalBtu);

  // Encontrar o patamar comercial recomendado
  let recommendedBtu = standardBtuTiers[standardBtuTiers.length - 1];
  for (const tier of standardBtuTiers) {
    if (tier >= exactBtu) {
      recommendedBtu = tier;
      break;
    }
  }

  // Sugestão de modelo Daikin e Categoria
  let daikinModelSuggestion = "Daikin Split Inverter Ecoswing R-32";
  let recommendedCategory = "Split Hi-Wall Inverter";

  if (recommendedBtu >= 36000) {
    recommendedCategory = "Cassete ou Piso-Teto Inverter";
    daikinModelSuggestion = "Daikin Cassete SkyAir Inverter R-410A / R-32";
  } else if (recommendedBtu >= 24000) {
    recommendedCategory = "Split Hi-Wall ou Cassete 1 Via";
    daikinModelSuggestion = "Daikin Ecoswing / Cassete 1 Via Inverter";
  }

  // Estimativa de economia na conta de luz (Daikin Inverter economiza até 70% vs Split tradicional On/Off)
  const monthlySavingsEstimate = "Até 70% de economia energética com tecnologia Daikin Neo Swing Inverter";

  const roomLabels: Record<string, string> = {
    quarto: "Quarto / Suíte",
    sala: "Sala / Living",
    escritorio: "Escritório / Consultório",
    comercio: "Comércio / Loja"
  };

  const sunLabels: Record<string, string> = {
    manha: "Sol da manhã",
    tarde: "Sol da tarde intenso",
    "dia-todo": "Sol o dia todo",
    "sem-sol": "Pouca incidência solar"
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Alex! Calculei a carga térmica no site da Like Air:\n` +
    `• Ambiente: ${roomLabels[input.roomType] || input.roomType} (${input.areaM2}m²)\n` +
    `• Insolação: ${sunLabels[input.sunExposure] || input.sunExposure}\n` +
    `• Pessoas: ${input.peopleCount} | Eletrônicos: ${input.electronicsCount}\n` +
    `• Carga calculada: ${exactBtu.toLocaleString("pt-BR")} BTUs/h\n` +
    `• Sugestão indicada: ${recommendedBtu.toLocaleString("pt-BR")} BTUs (${daikinModelSuggestion})\n\n` +
    `Gostaria de solicitar uma proposta técnica com instalação padrão ouro da Like Air.`
  );

  return {
    exactBtu,
    recommendedBtu,
    recommendedCategory,
    daikinModelSuggestion,
    monthlySavingsEstimate,
    whatsappMessage
  };
}
