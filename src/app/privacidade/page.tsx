import React from "react";
import Link from "next/link";
import { companyData } from "@/data/companyData";
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  UserCheck,
  Database,
  FileCheck,
  Mail,
  Scale,
  Cpu
} from "lucide-react";

export const metadata = {
  title: "Política de Privacidade e Proteção de Dados (LGPD) | Like Air Service",
  description:
    "Aviso de privacidade e conformidade com a Lei Geral de Proteção de Dados (Lei Federal nº 13.709/2018 - LGPD) da Like Air Service.",
};

export default function PrivacidadePage() {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Conformidade com a Lei nº 13.709/2018 (LGPD Brasil)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              Política de Privacidade e Governança de Dados
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A <strong>{companyData.name}</strong> tem o compromisso inegociável de zelar pela confidencialidade, integridade e segurança de seus dados pessoais. Este documento descreve de maneira transparente como tratamos informações coletadas em nossa plataforma digital e assegura o pleno exercício dos direitos dos titulares.
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* 1. Controlador de Dados e Encarregado (DPO) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <UserCheck className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>1. Identificação do Controlador e do Encarregado de Dados (DPO)</h2>
              </div>
              <p>
                Para os efeitos da LGPD, a pessoa jurídica responsável pelas decisões referentes ao tratamento de dados pessoais no âmbito dos serviços de climatização é:
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-sm space-y-1.5 text-slate-800">
                <p><strong>Controlador:</strong> {companyData.name}</p>
                <p><strong>CNPJ:</strong> {companyData.credentials.cnpj}</p>
                <p><strong>Responsável Operacional:</strong> Alex (Alexandre)</p>
                <p><strong>Canal do Encarregado de Proteção de Dados (DPO):</strong>{" "}
                  <a href={`mailto:${companyData.contacts.email}?subject=LGPD%20-%20Encarregado%20de%20Dados`} className="text-sky-600 font-semibold underline">
                    {companyData.contacts.email}
                  </a>
                </p>
                <p><strong>Atendimento:</strong> {companyData.contacts.phones[0].display} (São Paulo — SP)</p>
              </div>
            </section>

            {/* 2. Dados Coletados e Princípio da Minimização */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Database className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>2. Dados Pessoais Coletados e Princípio da Minimização</h2>
              </div>
              <p>
                Em observância ao <strong>Princípio da Minimização</strong> (Art. 6º, III da LGPD), coletamos exclusivamente as informações estritamente necessárias para viabilizar orçamentos, vistorias técnicas e contato comercial:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-900 font-semibold">
                    <tr>
                      <th className="p-3 border-b border-slate-200">Categoria</th>
                      <th className="p-3 border-b border-slate-200">Dados Coletados</th>
                      <th className="p-3 border-b border-slate-200">Finalidade Estrita</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Identificação</td>
                      <td className="p-3">Nome completo</td>
                      <td className="p-3">Identificar o solicitante e personalizar a proposta.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Contato</td>
                      <td className="p-3">Telefone celular / WhatsApp e E-mail</td>
                      <td className="p-3">Retorno de orçamentos, confirmação de agenda de visita técnica.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Localização</td>
                      <td className="p-3">Bairro / Cidade na Região Metropolitana de SP</td>
                      <td className="p-3">Verificar o raio de atendimento da equipe técnica.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Demanda Técnica</td>
                      <td className="p-3">Modelo do equipamento, defeito relatado ou metragem</td>
                      <td className="p-3">Pré-dimensionamento de ferramentas, peças e mão de obra.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                <strong>Importante:</strong> Não coletamos nem tratamos dados pessoais sensíveis (tais como dados biométricos, de saúde, opiniões políticas ou convicções religiosas).
              </p>
            </section>

            {/* 3. Bases Legais do Tratamento (Art. 7º da LGPD) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Scale className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>3. Bases Legais para o Tratamento (Art. 7º da LGPD)</h2>
              </div>
              <p>
                Todo o tratamento de dados realizado pela Like Air Service fundamenta-se estritamente nas seguintes hipóteses legais autorizadoras:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Execução de Diligências Pré-Contratuais (Art. 7º, V):</strong> O tratamento dos dados de contato e do projeto é necessário para atender ao pedido do titular na elaboração e envio de propostas comerciais de climatização.
                </li>
                <li>
                  <strong>Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):</strong> Dados cadastrais necessários para emissão de Nota Fiscal de Serviços Paulistana (NFS-e), recolhimento de tributos e arquivamento de registros de conexão conforme o Art. 15 do Marco Civil da Internet (Lei nº 12.965/2014).
                </li>
                <li>
                  <strong>Legítimo Interesse do Controlador (Art. 7º, IX):</strong> Em situações pontuais de segurança cibernética, prevenção contra fraudes no formulário e aprimoramento da navegação web.
                </li>
              </ul>
            </section>

            {/* 4. Direitos do Titular (Art. 18 da LGPD) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2>4. Direitos do Titular dos Dados Pessoais</h2>
              </div>
              <p>
                Em conformidade com o Artigo 18 da LGPD, você pode a qualquer momento, de forma gratuita e mediante requisição expressa ao nosso Encarregado, solicitar:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Confirmação e Acesso</span>
                  Saber se realizamos tratamento com seus dados e obter cópia das informações arquivadas.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Correção</span>
                  Solicitar a imediata retificação de dados incorretos, incompletos ou desatualizados.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Eliminação e Bloqueio</span>
                  Pedir a exclusão definitiva dos dados coletados que não estejam sujeitos a guarda fiscal obrigatória.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Revogação de Consentimento</span>
                  Revogar qualquer consentimento anteriormente outorgado de forma facilitada e sem custos.
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                <strong>Prazo de Atendimento:</strong> As solicitações formais enviadas ao e-mail <code>{companyData.contacts.email}</code> serão respondidas em até <strong>15 (quinze) dias</strong>, conforme determinado pela legislação.
              </p>
            </section>

            {/* 5. Segurança da Informação e Criptografia */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Lock className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>5. Segurança Cibernética e Proteção das Comunicações</h2>
              </div>
              <p>
                Implementamos padrões modernos de segurança técnica e organizacional para resguardar a navegação e a transmissão dos dados:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  <strong>Criptografia em Trânsito (TLS/SSL):</strong> Todas as trocas de informações entre o seu navegador e nossos servidores ocorrem em canal seguro HTTPS com chaves de criptografia avançadas.
                </li>
                <li>
                  <strong>Arquitetura Serverless Segura:</strong> O formulário deste site não mantém bancos de dados públicos ou expostos à internet, operando com repasse parametrizado diretamente para a interface de atendimento oficial via WhatsApp da Like Air.
                </li>
                <li>
                  <strong>Proibição de Venda de Dados:</strong> A Like Air <strong>jamais vende, aluga, troca ou comercializa</strong> listas de contatos ou dados pessoais com anunciantes ou terceiros.
                </li>
              </ul>
            </section>

            {/* 6. ISENÇÃO TÉCNICA DA EQUIPE DE DESENVOLVIMENTO DE SOFTWARE */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
                <h2>6. Isenção Técnica dos Provedores e Desenvolvedores de Software</h2>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300/80 text-slate-800 text-sm leading-relaxed space-y-2">
                <p>
                  A codificação, engenharia de software e suporte à infraestrutura deste website foram executados por <strong>prestadores de serviços técnicos de tecnologia independentes</strong>, que atuaram estritamente no desenvolvimento da interface digital.
                </p>
                <p>
                  Esses prestadores de tecnologia não detêm acesso contínuo, posse, custódia nem controle sobre os dados de clientes gerados nas comunicações comerciais ou nas planilhas operacionais da Like Air Service. Portanto, qualquer solicitação referente à privacidade, retificação ou exclusão de dados pessoais deve ser direcionada diretamente à Like Air Service, única controladora legal do acervo de dados.
                </p>
              </div>
            </section>

            {/* 7. Cookies e Tecnologias de Terceiros */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>7. Cookies e Ferramentas de Terceiros</h2>
              </div>
              <p>
                Utilizamos unicamente cookies estritamente necessários para o funcionamento técnico da plataforma (manutenção de sessão e preferências de navegação). Serviços de terceiros integrados (como a API do WhatsApp ou mapas de localização) possuem suas próprias políticas de privacidade independentes, às quais o usuário adere ao optar por utilizá-los.
              </p>
            </section>

            {/* 8. Canal de Contato */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <h2>8. Dúvidas ou Solicitações</h2>
              </div>
              <p>
                Se você tiver qualquer dúvida sobre esta Política de Privacidade ou desejar exercer qualquer um dos seus direitos de titular da LGPD, fale com o nosso encarregado:
              </p>
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sm">
                <p className="font-bold text-slate-900">Encarregado pelo Tratamento de Dados (DPO)</p>
                <p className="text-slate-700">Like Air Service — Climatização e Refrigeração</p>
                <p className="text-slate-700">E-mail: <a href={`mailto:${companyData.contacts.email}`} className="text-sky-700 font-semibold underline">{companyData.contacts.email}</a></p>
                <p className="text-slate-700">Telefone / WhatsApp: {companyData.contacts.phones[0].display}</p>
              </div>
            </section>

            {/* Rodapé Interno com Data */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Atualizado em conformidade com a Lei Federal nº 13.709/2018 (LGPD).</span>
              <span>São Paulo — SP, Setembro de 2026.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
