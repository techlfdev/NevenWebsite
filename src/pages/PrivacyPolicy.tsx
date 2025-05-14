import React from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(247,248,250,0.85)_100%)] backdrop-blur-3xl" />
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 pt-24 pb-16 max-w-4xl relative">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={8}
          textClassName="text-4xl md:text-5xl font-bold text-convrt-dark-blue mb-4"
        >
          Política de Privacidade - Neven
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          textClassName="text-lg text-gray-600 mb-8"
        >
          Última atualização: 13 de maio de 2025
        </ScrollReveal>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Introdução */}
          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Introdução
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              A Neven ("nós", "nosso" ou "empresa") está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes, parceiros e usuários ("você", "seu" ou "cliente"). Esta Política de Privacidade descreve detalhadamente como coletamos, utilizamos, armazenamos, processamos, compartilhamos e protegemos informações pessoais e dados no contexto do desenvolvimento e implementação de nossas soluções personalizadas de automação inteligente, desenvolvimento de sistemas e criação de interfaces digitais.

              Esta política foi desenvolvida em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e outras legislações aplicáveis à proteção de dados no Brasil e internacionalmente.

              Recomendamos a leitura completa e atenta deste documento para compreender nossas práticas em relação aos seus dados pessoais.
            </ScrollReveal>
          </section>

          {/* Quem Somos */}
          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Quem Somos
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              A Neven é uma agência especializada em automação inteligente e desenvolvimento de sistemas personalizados. Nossos serviços incluem:

              • Desenvolvimento de agentes de IA personalizados para canais como WhatsApp, Instagram, CRMs e ERPs
              • Criação de websites com alto valor estético e funcional
              • Desenvolvimento de sistemas sob medida (ERPs, CRMs e outros)
              • Soluções de automação inteligente para processos empresariais

              Como empresa de desenvolvimento, trabalhamos diretamente com nossos clientes para criar soluções específicas para seus negócios, atuando como operadora e, em alguns casos, como controladora de dados.
            </ScrollReveal>
          </section>

          {/* Dados que Coletamos */}
          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Dados que Coletamos
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-xl font-semibold text-convrt-dark-blue mb-2"
              >
                1. Dados fornecidos diretamente pelo cliente
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-gray-600"
              >
                Durante o processo de desenvolvimento e implementação de nossas soluções, podemos coletar:

                • Dados de identificação e contato: nome completo, email, telefone, cargo, empresa, CPF, RG, endereço comercial e/ou residencial
                • Documentos corporativos: CNPJ, contratos sociais, procurações, termos de licenciamento
                • Dados financeiros: informações bancárias, histórico de pagamentos, faturas
                • Requisitos técnicos e operacionais: descrições de processos de negócio, fluxos de trabalho, regras de negócio
                • Credenciais de acesso: usuários e senhas para sistemas existentes (quando necessário para integração)
                • Feedbacks e comunicações: registros de comunicações, solicitações, feedback sobre produtos e serviços
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-xl font-semibold text-convrt-dark-blue mb-2"
              >
                2. Dados coletados durante o desenvolvimento e uso dos sistemas
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-gray-600"
              >
                No processo de desenvolvimento, teste e manutenção dos sistemas:

                • Dados técnicos: registros de acesso (logs), endereços IP, informações do dispositivo, navegador, sistema operacional
                • Dados de uso: interações com sistemas desenvolvidos, tempo de uso, funcionalidades acessadas
                • Dados diagnósticos: registros de erros, problemas técnicos, relatórios de desempenho
                • Dados de treinamento: para agentes de IA, podemos processar conjuntos de dados específicos fornecidos pelo cliente ou coletados com sua autorização
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-xl font-semibold text-convrt-dark-blue mb-2"
              >
                3. Dados de Terceiros
              </ScrollReveal>

              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-gray-600"
              >
                No desenvolvimento de integrações e/ou automações:

                • Dados de APIs de terceiros: informações obtidas de serviços como WhatsApp Business API, Instagram, sistemas de CRM/ERP de terceiros
                • Dados de usuários finais: informações de clientes ou usuários dos nossos clientes que interagem com as soluções desenvolvidas
              </ScrollReveal>
            </div>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Como Usamos Seus Dados
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Utilizamos os dados coletados para diversos fins, incluindo:

              • Desenvolvimento e personalização de soluções: adaptar sistemas às necessidades específicas de cada cliente
              • Suporte técnico e manutenção: garantir o bom funcionamento dos sistemas, corrigir erros e implementar melhorias
              • Comunicações: enviar informações relevantes sobre produtos, serviços, atualizações e novidades
              • Cumprimento de obrigações legais: atender a requisitos legais, regulatórios e fiscais
              • Melhoria contínua: analisar dados de uso para identificar oportunidades de otimização e inovação
            </ScrollReveal>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Compartilhamento de Dados
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Podemos compartilhar dados com terceiros nas seguintes situações:

              • Fornecedores de serviços: empresas que nos auxiliam no desenvolvimento, hospedagem, suporte e manutenção dos sistemas
              • Parceiros de negócios: empresas que colaboram conosco no desenvolvimento de soluções integradas
              • Autoridades legais: quando exigido por lei ou decisão judicial
              • Clientes: dados de usuários finais podem ser compartilhados com nossos clientes (controladores de dados) de acordo com os termos de uso e políticas de privacidade deles
            </ScrollReveal>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Segurança dos Dados
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Implementamos medidas de segurança técnicas e organizacionais para proteger os dados contra acesso não autorizado, uso indevido, alteração, destruição ou perda. Essas medidas incluem:

              • Criptografia de dados em repouso e em trânsito
              • Controle de acesso restrito a pessoas autorizadas
              • Monitoramento contínuo de sistemas e redes
              • Testes de segurança regulares
              • Políticas internas de segurança da informação
            </ScrollReveal>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Seus Direitos
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Como titular de dados, você tem os seguintes direitos:

              • Acesso: solicitar informações sobre os dados que possuímos sobre você
              • Correção: solicitar a correção de dados incompletos, inexatos ou desatualizados
              • Exclusão: solicitar a exclusão de dados desnecessários, excessivos ou tratados em desconformidade com a lei
              • Anonimização: solicitar a anonimização de dados, de forma que não possam mais ser associados a você
              • Portabilidade: solicitar a transferência de seus dados para outro fornecedor de serviços
              • Revogação do consentimento: revogar o consentimento para o tratamento de dados baseado em consentimento
              • Oposição: opor-se ao tratamento de dados baseado em interesse legítimo
              • Informação: ser informado sobre as consequências da sua decisão de não fornecer o consentimento
            </ScrollReveal>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Contato
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:

              • Email: privacy@neven.ai
              • Telefone: (11) 0000-0000
              • Endereço: [Endereço da Neven]
            </ScrollReveal>
          </section>

          <section className="space-y-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl font-semibold text-convrt-dark-blue mb-4"
            >
              Alterações a esta Política
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-gray-600"
            >
              Esta Política de Privacidade pode ser alterada periodicamente. Publicaremos a versão mais recente em nosso site e notificaremos você sobre quaisquer alterações significativas.
            </ScrollReveal>
          </section>

          {/* Espaço em branco adicional para efeito de scroll */}
          <div className="h-screen"></div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;