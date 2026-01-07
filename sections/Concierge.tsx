import React from 'react';
import { MotionSection } from '../components/MotionSection';
import { Button } from '../components/ui';
import { ClipboardCheck, FileText, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

interface ConciergeProps {
  onCtaClick: () => void;
}

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Vistoria Premium",
    description: "Análise técnica gratuita do seu telhado e rede elétrica."
  },
  {
    icon: FileText,
    title: "2. Engenharia",
    description: "Projeto personalizado para zerar sua conta com segurança."
  },
  {
    icon: CheckCircle2,
    title: "3. Burocracia Zero",
    description: "Nós resolvemos toda a papelada chata na Equatorial."
  },
  {
    icon: Zap,
    title: "4. Ativação",
    description: "Instalação rápida, limpa e ativação da sua usina."
  }
];

export const Concierge: React.FC<ConciergeProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 lg:mb-24">
          <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-3 block opacity-60">Experiência do Cliente</span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-green sm:text-5xl mb-6 leading-tight">
            Nós cuidamos da engenharia. <br /> Você cuida do <span className="relative inline-block">
                <span className="relative z-10 text-brand-green">conforto</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/30 -z-0"></span>
            </span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sem dores de cabeça, sem filas, sem ligações para a concessionária. Nosso serviço de concierge resolve tudo para você, do projeto à homologação.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-6 h-6 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center border-2 border-white z-20">
                  {index + 1}
                </div>

                <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-brand-gold/50 group-hover:shadow-[0_10px_30px_-10px_rgba(253,203,3,0.3)] transition-all duration-300 flex items-center justify-center mb-8 relative z-10">
                  <step.icon className="h-10 w-10 text-slate-400 group-hover:text-brand-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="xl" onClick={onCtaClick} className="bg-brand-green hover:bg-[#002A16] text-white shadow-xl shadow-brand-green/20 px-10">
            INICIAR MEU PROCESSO
          </Button>
        </div>
      </MotionSection>
      
      {/* Bottom organic shape - Transition to Tech section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
         <svg viewBox="0 0 1440 64" className="w-full h-[64px] fill-slate-50" preserveAspectRatio="none">
            <path d="M0,64 L1440,64 L1440,0 C720,64 280,0 0,64 Z"></path>
         </svg>
      </div>
    </div>
  );
};