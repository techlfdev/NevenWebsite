
import React, { useEffect, useRef } from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target === plansRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (plansRef.current) observer.observe(plansRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (plansRef.current) observer.unobserve(plansRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-convrt-light-gray/30" id="pricing">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="section-tag">
            Preços
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            Preços <span className="gradient-text">Simples e Transparentes</span>
          </h2>
          <p className="text-convrt-dark-blue/70 text-lg mb-16 max-w-2xl mx-auto">
            Escolha o plano que melhor atende às necessidades da sua equipe. Todos os planos incluem nossos recursos principais de IA.
          </p>
        </div>
        
        <div 
          ref={plansRef}
          className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300"
        >
          {/* Plano Inicial */}
          <div className="bg-white rounded-2xl border border-convrt-light-gray/60 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-convrt-cyan/5 hover:border-convrt-cyan/20 hover:-translate-y-1">
            <div className="text-xl font-bold text-convrt-dark-blue mb-2">Inicial</div>
            <div className="text-convrt-dark-blue/60 mb-6">Para profissionais de vendas individuais</div>
            
            <div className="flex items-end mb-6">
              <div className="text-4xl font-bold text-convrt-dark-blue">R$249</div>
              <div className="text-convrt-dark-blue/60 ml-1 mb-1">/mês</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "50 engajamentos com IA por mês",
                "Ferramenta de identificação de leads",
                "Dashboard básico de análise",
                "Integração com e-mail",
                "Conta de usuário único"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-convrt-dark-blue/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="button-outline w-full">
              Começar Agora
            </button>
          </div>
          
          {/* Plano Profissional */}
          <div className="bg-white rounded-2xl border border-convrt-cyan/30 p-8 shadow-xl shadow-convrt-cyan/5 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-convrt-cyan text-convrt-dark-blue font-medium px-4 py-1 rounded-full text-sm">
              Mais Popular
            </div>
            
            <div className="text-xl font-bold text-convrt-dark-blue mb-2">Profissional</div>
            <div className="text-convrt-dark-blue/60 mb-6">Para equipes de vendas em crescimento</div>
            
            <div className="flex items-end mb-6">
              <div className="text-4xl font-bold text-convrt-dark-blue">R$749</div>
              <div className="text-convrt-dark-blue/60 ml-1 mb-1">/mês</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "250 engajamentos com IA por mês",
                "Pontuação avançada de leads",
                "Suite completa de análises",
                "Integração com CRM",
                "Colaboração em equipe (até 5 usuários)",
                "Suporte prioritário"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-convrt-dark-blue/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="button-primary w-full">
              Começar Agora
            </button>
          </div>
          
          {/* Plano Empresarial */}
          <div className="bg-white rounded-2xl border border-convrt-light-gray/60 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-convrt-cyan/5 hover:border-convrt-cyan/20 hover:-translate-y-1">
            <div className="text-xl font-bold text-convrt-dark-blue mb-2">Empresarial</div>
            <div className="text-convrt-dark-blue/60 mb-6">Para grandes organizações</div>
            
            <div className="flex items-end mb-6">
              <div className="text-4xl font-bold text-convrt-dark-blue">Personalizado</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Engajamentos ilimitados com IA",
                "IA personalizada para seu setor",
                "Relatórios avançados e ROI",
                "Segurança empresarial",
                "Gerente de conta dedicado",
                "Integrações personalizadas",
                "Usuários ilimitados"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-convrt-dark-blue/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="button-outline w-full">
              Falar com Vendas
            </button>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-convrt-dark-blue to-convrt-dark-blue/90 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                <span>Oferta Especial</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Veja Como a Convrt AI Funciona</h3>
              <p className="text-white/70 max-w-xl">
                Obtenha uma demonstração personalizada e veja como a Convrt pode transformar sua estratégia de outbound.
              </p>
            </div>
            <div>
              <a href="#cta" className="button-primary whitespace-nowrap">
                Obter Demo Grátis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
