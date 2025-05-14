import React from 'react';
import { X, Check, Code, Bot, Database, Zap, BarChart3, Workflow, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white" id="problem-statement">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Por que Automatização Tradicional Não é Suficiente
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Sistemas Genéricos Limitam seu Potencial. <br />
            <span className="shiny-text font-bold">
              Automação Inteligente Personalizada
            </span> é o Futuro.
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            A era dos sistemas padronizados acabou. Empresas modernas precisam de soluções sob medida que se adaptem perfeitamente ao seu negócio. A Neven desenvolve automações inteligentes e sistemas personalizados que transformam completamente sua operação.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Sistemas Tradicionais */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="modern-card negative rounded-[20px] p-8"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>

            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Sistemas Tradicionais
            </h3>

            <ul className="space-y-6">
              <li className="feature-list-item">
                <div className="feature-icon-container flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Soluções genéricas e inflexíveis</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Processos engessados que não se adaptam às necessidades específicas do seu negócio, resultando em baixa produtividade</p>
                </div>
              </li>

              <li className="feature-list-item">
                <div className="feature-icon-container flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Integrações limitadas e complexas</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Alto custo e dificuldade para conectar diferentes sistemas, gerando silos de informação e retrabalho manual</p>
                </div>
              </li>

              <li className="feature-list-item">
                <div className="feature-icon-container flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Sem inteligência artificial</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Automações básicas e repetitivas, sem capacidade de aprendizado ou otimização contínua dos processos</p>
                </div>
              </li>

              <li className="feature-list-item">
                <div className="feature-icon-container flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Manutenção custosa</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Atualizações complexas e dependência de fornecedores para pequenas mudanças no sistema</p>
                </div>
              </li>

              <li className="feature-list-item">
                <div className="feature-icon-container flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Interface desatualizada</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Design antiquado e pouco intuitivo que dificulta o uso e diminui a produtividade da equipe</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Database className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Dados Isolados</div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Code className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Código Rígido</div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Bot className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Sem IA</div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>

          {/* Neven: Automação Inteligente */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="modern-card positive rounded-[20px] p-8"
          >
            <div className="absolute top-0 right-0 bg-emerald-500/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-emerald-500" />
            </div>

            <h3 className="heading-sm text-convrt-dark-blue mb-4 flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Neven: Automação Inteligente
              </span>
              <span className="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-200 shadow-sm">IA Avançada</span>
            </h3>

            <p className="text-emerald-600 font-medium mb-8 text-lg">Transforme sua operação com inteligência artificial de ponta</p>

            <ul className="space-y-6">
              <li className="feature-list-item hover:bg-emerald-50/50">
                <div className="feature-icon-container flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 bg-emerald-500/10">
                  <Check className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-xl text-emerald-700">Sistemas 100% personalizados</p>
                  <p className="text-emerald-600/90 mt-2">Soluções sob medida que se adaptam perfeitamente ao seu modelo de negócio, garantindo máxima eficiência e ROI</p>
                </div>
              </li>

              <li className="feature-list-item hover:bg-emerald-50/50">
                <div className="feature-icon-container flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 bg-emerald-500/10">
                  <Check className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-xl text-emerald-700">Automação inteligente multicanal</p>
                  <p className="text-emerald-600/90 mt-2">Integração completa com WhatsApp, Instagram, CRMs e ERPs. Gerencie todos os canais em uma única plataforma centralizada</p>
                </div>
              </li>

              <li className="feature-list-item hover:bg-emerald-50/50">
                <div className="feature-icon-container flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 bg-emerald-500/10">
                  <Check className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-xl text-emerald-700">IA adaptativa e evolutiva</p>
                  <p className="text-emerald-600/90 mt-2">Nossa IA aprende continuamente com suas operações, melhorando automaticamente o atendimento e tomada de decisões</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square flex flex-col items-center justify-center bg-emerald-500/5 rounded-xl p-3 border border-emerald-200 shadow-sm"
              >
                <Brain className="w-10 h-10 text-emerald-500 mb-2" />
                <div className="text-sm text-center text-emerald-700 font-bold">IA Avançada</div>
                <div className="text-xs text-center text-emerald-600 mt-1">GPT-4 Turbo</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square flex flex-col items-center justify-center bg-emerald-500/5 rounded-xl p-3 border border-emerald-200 shadow-sm"
              >
                <Workflow className="w-10 h-10 text-emerald-500 mb-2" />
                <div className="text-sm text-center text-emerald-700 font-bold">Automação Total</div>
                <div className="text-xs text-center text-emerald-600 mt-1">24/7</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square flex flex-col items-center justify-center bg-emerald-500/5 rounded-xl p-3 border border-emerald-200 shadow-sm"
              >
                <BarChart3 className="w-10 h-10 text-emerald-500 mb-2" />
                <div className="text-sm text-center text-emerald-700 font-bold">Resultados</div>
                <div className="text-xs text-center text-emerald-600 mt-1">+300% ROI</div>
              </motion.div>
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-emerald-800 font-medium text-center">
                Mais de 50 Empresas já Transformaram Seus Negócios Com a Neven
              </p>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;