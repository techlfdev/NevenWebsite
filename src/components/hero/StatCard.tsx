
import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface StatCardProps {
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-100 overflow-hidden h-full"
    >
      <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="p-8 relative z-10 flex flex-col items-center text-center h-full">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0B1F51]/10 text-[#0B1F51] mb-4"
          >
            {icon}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-baseline justify-center"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-[#0B1F51] to-[#1A367D] bg-clip-text text-transparent font-inter">
              {value}
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-convrt-dark-blue/80 mt-4 font-inter text-xl font-semibold"
          >
            {description}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-convrt-dark-blue/60 text-sm mt-3 leading-relaxed"
          >
            {description === "Processos Automatizados" && "Automatizamos completamente seus processos manuais com agentes de IA"}
            {description === "Operação Contínua" && "Seus sistemas funcionando sem interrupção, todos os dias do ano"}
            {description === "Precisão dos Agentes IA" && "Alta confiabilidade nas decisões tomadas por nossos agentes inteligentes"}
          </motion.div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default StatCard;
