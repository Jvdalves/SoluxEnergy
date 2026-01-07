import React from 'react';
import { Button } from '../components/ui';
import { ArrowRight, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image: Solar Panels Close-up */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2669&auto=format&fit=crop" 
          alt="Painéis Solares de Alta Tecnologia no Telhado" 
          className="h-full w-full object-cover object-center brightness-50"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-sm font-bold text-brand-gold w-fit backdrop-blur-md border border-brand-gold/40">
              <Sun className="h-4 w-4 animate-pulse" />
              <span className="uppercase tracking-wider text-xs sm:text-sm">Engenharia de Elite</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-tight">
              O maior ativo da sua casa está no <span className="text-brand-gold">telhado</span>.
            </h1>
            
            <p className="text-lg text-slate-200 sm:text-2xl mb-10 max-w-2xl leading-relaxed font-light">
              Pare de alugar energia da Equatorial. Transforme a radiação solar de Belém em <strong className="text-white font-semibold">patrimônio real</strong> e blinde sua família contra a inflação energética.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="xl" onClick={onCtaClick} className="group w-full sm:w-auto text-brand-green bg-brand-gold hover:bg-white border-2 border-brand-gold hover:border-white shadow-[0_0_40px_-10px_rgba(253,203,3,0.5)]">
                QUERO PARAR DE PERDER DINHEIRO
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-300/80 flex items-center gap-2 font-medium">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Instalação expressa em Belém e Região
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
        <svg viewBox="0 0 1440 120" className="w-full h-[60px] sm:h-[100px] fill-white" preserveAspectRatio="none">
           <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};