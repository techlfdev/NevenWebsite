
import React from 'react';
import { motion } from 'framer-motion';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
  as?: React.ElementType;
}

const StarBorder: React.FC<StarBorderProps> = ({
  children,
  className = '',
  color = 'cyan',
  speed = '5s',
  as: Component = 'div'
}) => {
  return (
    <Component className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          borderRadius: 'inherit',
          filter: 'blur(8px)',
          opacity: 0.3
        }}
      />
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default StarBorder;
