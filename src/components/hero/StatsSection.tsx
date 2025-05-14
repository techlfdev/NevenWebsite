
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Award } from 'lucide-react';
import StatCard from './StatCard';

interface StatsSectionProps {
  statsRef: React.RefObject<HTMLDivElement>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ statsRef }) => {
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
    <motion.div 
      ref={statsRef} 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0 max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants}>
        <StatCard 
          value="100%"
          description="Processos Automatizados" 
          icon={<Bot className="w-8 h-8" />} 
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <StatCard 
          value="24/7"
          description="Operação Contínua" 
          icon={<Zap className="w-8 h-8" />} 
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <StatCard 
          value="98%"
          description="Precisão dos Agentes IA" 
          icon={<Award className="w-8 h-8" />} 
        />
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
