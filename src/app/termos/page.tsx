import React from "react";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import {
  FileText,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Wrench,
  Cpu,
  Building2,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Termos de Uso e Condições Gerais | Like Air Service",
  description:
    "Termos de uso, condições gerais de prestação de serviços de climatização, garantias e delimitação de responsabilidades da Like Air Service.",
};

export default function TermosPage() {
  return (
    <main className="py-16 sm:py-20 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navegação de Retorno */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar para a página inicial</span>
        </Link>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200">
          {/* Header do Documento */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
              <Scale className="w-4 h-4 text-sky-600" />
              <span>Marco Civil da Internet & Código de Defesa do Consumidor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              Termos de Uso e Condições Gerais de Serviços
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bem-vindo ao website da <strong>{companyData.name}</strong>. Ao acessar este portal, utilizar nossas ferramentas interativas ou solicitar orçamentos, você declara estar ciente e de pleno acordo com as disposições e condições aqui estipuladas.
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* 1. Objeto e Qualificação das Partes */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Building2 className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>1. Objeto e Qualificação das Partes</h2>
              </div>
              <p>
                Este website tem por finalidade apresentar as soluções em engenharia térmica, climatização e refrigeração prestadas pela empresa:
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-sm space-y-1.5 text-slate-800">
                <p><strong>Razão Social / Nome Fantasia:</strong> {companyData.name}</p>
                <p><strong>Cadastro Nacional da Pessoa Jurídica (CNPJ):</strong> {companyData.credentials.cnpj}</p>
                <p><strong>Responsável Técnico Operacional:</strong> Alex (Alexandre)</p>
                <p><strong>Sede de Atendimento:</strong> São Paulo — SP (Capital, Alphaville, Tamboré e ABC Paulista)</p>
                <p><strong>Canais Oficiais:</strong> {companyData.contacts.phones[0].display} | {companyData.contacts.email}</p>
              </div>
              <p>
                O termo &ldquo;Usuário&rdquo; ou &ldquo;Cliente&rdquo; designa qualquer pessoa física ou jurídica que acesse as páginas deste website, utilize a calculadora térmica ou entre em contato para contratação de serviços técnicos.
              </p>
            </section>

            {/* 2. ISENÇÃO TOTAL DA EQUIPE TÉCNICA DESENVOLVEDORA */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
                <h2>2. Limitação de Responsabilidade da Equipe Técnica Desenvolvedora</h2>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-3">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Cláusula Especial de Isenção Técnica e Operacional</span>
                </div>
                <p>
                  O presente website, código-fonte, arquitetura de software e interfaces visuais foram concebidos e implementados por <strong>prestadores de serviços técnicos de programação e desenvolvimento de software terceirizados e independentes</strong>, contratados exclusivamente para o fornecimento da solução tecnológica digital.
                </p>
                <p>
                  Por este instrumento, fica expressa, irrevogável e expressamente estabelecido que:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>
                    <strong>Inexistência de Responsabilidade Solidária ou Subsidiária:</strong> Os desenvolvedores e mantenedores de tecnologia <strong>NÃO respondem</strong>, sob qualquer hipótese legal, cível, consumerista ou criminal, por quaisquer obrigações decorrentes da execução física dos serviços de instalação, manutenção mecânica, reparo elétrico, higienização de dutos, fornecimento de peças ou laudos de PMOC executados pela Like Air Service.
                  </li>
                  <li>
                    <strong>Garantia de Software &ldquo;No Estado&rdquo; (As Is):</strong> A aplicação web é disponibilizada no estado em que se encontra, sem garantias de funcionamento ininterrupto contra falhas sistêmicas originadas em servidores de terceiros, ataques cibernéticos externos, oscilações na rede de telecomunicações ou indisponibilidade temporária de APIs públicas ou de mensageria (como a plataforma WhatsApp/Meta).
                  </li>
                  <li>
                    <strong>Ausência de Vínculo Societário:</strong> Os serviços de engenharia de software não caracterizam sociedade de fato, representação comercial, agência ou mandato, sendo a <strong>Like Air Service (CNPJ {companyData.credentials.cnpj})</strong> a única titular e responsável civil e comercial perante os consumidores finais.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Regras da Calculadora Térmica de BTUs e Orçamentos Online */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Wrench className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>3. Regras da Calculadora de BTUs e Orçamentos Prévios</h2>
              </div>
              <p>
                A ferramenta interativa de <em>Calculadora Térmica</em> disponibilizada no website tem caráter <strong>estritamente estimativo e preliminar</strong>, baseada em fórmulas de engenharia simplificadas (parâmetros de 600 a 800 BTU/h por m² e por ocupante).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Necessidade de Vistoria Presencial Obrigatória:</strong> A estimativa numérica gerada online não substitui o levantamento de carga térmica in loco por técnico credenciado, o qual avaliará fatores como insolação real, materiais construtivos, espessura de vidros, pé-direito, tubulação frigorígena existente e disponibilidade elétrica (disjuntores e fiação).
                </li>
                <li>
                  <strong>Validade das Propostas Comerciais:</strong> Os valores de orçamentos informados preliminarmente via WhatsApp ou e-mail têm validade padrão de <strong>10 (dez) dias corridos</strong> a partir de seu envio, sujeitos a confirmação após inspeção técnica no local de instalação.
                </li>
              </ul>
            </section>

            {/* 4. Garantias dos Serviços e Limites de Responsabilidade Operacional */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2>4. Garantias, Obrigações e Prazos Operacionais</h2>
              </div>
              <p>
                A Like Air Service pauta suas atividades pela transparência e pelo cumprimento estrito da legislação brasileira:
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">A. Garantia Legal de Mão de Obra</h3>
                  <p>
                    Nos termos do Art. 26, II, da Lei nº 8.078/1990 (Código de Defesa do Consumidor), os serviços de instalação e mão de obra técnica gozam de garantia legal de <strong>90 (noventa) dias</strong> corridos, contados a partir da data de entrega do serviço e teste de estanqueidade.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">B. Garantia de Fábrica dos Equipamentos</h3>
                  <p>
                    A garantia dos aparelhos de ar-condicionado (como Daikin, Fujitsu, LG, etc.) é concedida e mantida diretamente pelos respectivos fabricantes, de acordo com as condições descritas no Certificado de Garantia que acompanha cada equipamento, estando condicionada à correta instalação por rede credenciada e sem intervenções não autorizadas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">C. Hipóteses de Perda da Garantia</h3>
                  <p>
                    A garantia do serviço perderá imediatamente a validade caso: (i) haja intervenção de terceiros ou técnicos não autorizados pela Like Air; (ii) ocorram sinistros decorrentes de picos de tensão, descargas atmosféricas (raios) ou instabilidade na rede elétrica predial; (iii) sejam violados lacres ou alteradas as configurações originais do sistema sem prévio aviso técnico.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. PMOC e Conformidade com a Lei Federal 13.589/2018 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <FileText className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>5. Planos de Manutenção PMOC e Exigências Legais</h2>
              </div>
              <p>
                Os contratos corporativos de PMOC (Plano de Manutenção, Operação e Controle) firmados com a Like Air Service seguem com rigor a Lei Federal nº 13.589/2018, a Resolução RE nº 09/2003 da ANVISA e as normas técnicas ABNT (NBR 13971 e NBR 16401).
              </p>
              <p>
                A emissão de ART (Anotação de Responsabilidade Técnica) é realizada por Engenheiro Mecânico devidamente registrado junto ao CREA, atestando a qualidade do ar de interiores e a conformidade perante os órgãos de fiscalização sanitária.
              </p>
            </section>

            {/* 6. Propriedade Intelectual e Marcas Registradas */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Scale className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>6. Propriedade Intelectual e Marcas de Fabricantes</h2>
              </div>
              <p>
                Os logotipos, nomes comerciais e marcas registradas exibidos neste website (como Daikin, Fujitsu, LG, Samsung, Carrier, Midea, Trane, Hitachi, Elgin, Gree) são de propriedade exclusiva de seus respectivos detentores internacionais e nacionais.
              </p>
              <p>
                Sua menção e exibição neste portal têm fins unicamente informativos de compatibilidade de serviços, manutenção especializada e comprovação de credenciamento técnico oficial junto à rede Daikin, em estrito respeito à Lei de Propriedade Industrial (Lei nº 9.279/1996).
              </p>
            </section>

            {/* 7. Foro de Eleição e Legislação Aplicável */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>7. Legislação Aplicável e Foro de Eleição</h2>
              </div>
              <p>
                Estes Termos de Uso são regidos e interpretados em conformidade com as Leis da República Federativa do Brasil, em especial o Código Civil Brasileiro, o Código de Defesa do Consumidor e o Marco Civil da Internet.
              </p>
              <p>
                Para dirimir quaisquer controvérsias oriundas do uso deste website ou dos serviços prestados, as partes elegem o <strong>Foro da Comarca de São Paulo — SP</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            {/* Rodapé Interno com Data */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Última revisão formal: Setembro de 2026.</span>
              <span>Like Air Service — Climatização & Refrigeração</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
