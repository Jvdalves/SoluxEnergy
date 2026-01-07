import React from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ children, className, id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};