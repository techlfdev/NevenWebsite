
import React, { useState } from 'react';
import RotatingText from './hero/RotatingText';
import { Target, Users, LineChart } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion, AnimatePresence } from 'framer-motion';
import AutomationDemo from './how-it-works/AutomationDemo';
import WebsiteDemo from './how-it-works/WebsiteDemo';
import SystemDemo from './how-it-works/SystemDemo';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "Automação Inteligente Personalizada",
      description: "Desenvolvemos agentes de IA sob medida para seus canais de comunicação e sistemas, automatizando processos no WhatsApp, Instagram, CRMs e ERPs com soluções inteligentes adaptadas ao seu negócio.",
      highlightText: "Neven entrega:",
      highlightDetails: "Automação inteligente, integração multicanal, eficiência operacional",
      gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
    },
    {
      id: 2,
      icon: <Users className="w-4 h-4" />,
      title: "Websites Artesanais de Alto Impacto",
      description: "Criamos interfaces web únicas que combinam estética refinada com funcionalidade superior, desenvolvendo websites que não só impressionam visualmente, mas também convertem e engajam seus visitantes.",
      highlightText: "Design focado em:",
      highlightDetails: "Experiência do usuário, conversão e identidade visual única",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <LineChart className="w-4 h-4" />,
      title: "Sistemas Sob Medida",
      description: "Desenvolvemos ERPs e CRMs personalizados que se adaptam perfeitamente ao seu modelo de negócio, criando soluções que automatizam processos e impulsionam a eficiência operacional.",
      highlightText: "Sistemas entregam:",
      highlightDetails: "Eficiência operacional, automação de processos e escalabilidade",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="heading-lg text-convrt-dark-blue mb-4 flex items-center justify-center gap-2 flex-wrap">
            Como a <span className="bg-gradient-to-r from-[#0B1F51] via-[#142B69] to-[#1A367D] bg-clip-text text-transparent">Neven</span>{" "}
            <RotatingText
              texts={[
                "Automatiza",
                "Potencializa",
                "Revoluciona",
                "Transforma",
                "Impulsiona"
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#0B1F51] via-[#142B69] to-[#1A367D] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{" "}
            Seu Negócio ?
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto">
            Combinamos inteligência artificial, design de alto impacto e desenvolvimento personalizado para criar soluções que impulsionam a eficiência e o crescimento do seu negócio.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            <div className="lg:w-2/3 relative h-full">
              <div className="p-4 h-full">
                {activeStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AutomationDemo />
                  </motion.div>
                )}
                {activeStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <WebsiteDemo />
                  </motion.div>
                )}
                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <SystemDemo />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
