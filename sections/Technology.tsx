import React from 'react';
import { MotionSection } from '../components/MotionSection';
import { Button } from '../components/ui';
import { ShieldCheck, CloudRain, Cpu, Wifi } from 'lucide-react';

interface TechnologyProps {
  onCtaClick: () => void;
}

export const Technology: React.FC<TechnologyProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-slate-50 relative pb-20 pt-10 lg:pb-32 lg:pt-20">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl mb-6">
              Equipamentos de Elite que aguentam o "Sol e Chuva" de Belém.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sabemos que o clima amazônico é impiedoso. Por isso, só trabalhamos com tecnologia Tier-1, 
              testada em condições extremas de umidade e calor.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-green shadow-sm group-hover:border-brand-gold transition-colors">
                    <CloudRain className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-brand-green">Proteção Anti-Corrosão</h3>
                  <p className="mt-2 text-slate-500 text-sm">Painéis certificados para névoa salina e umidade de 99%.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-green shadow-sm group-hover:border-brand-gold transition-colors">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-brand-green">Garantia de Performance</h3>
                  <p className="mt-2 text-slate-500 text-sm">Garantia linear de produção de energia por 25 anos.</p>
                </div>
              </div>

               <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-green shadow-sm group-hover:border-brand-gold transition-colors">
                    <Wifi className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-brand-green">Monitoramento 24h</h3>
                  <p className="mt-2 text-slate-500 text-sm">Acompanhe sua produção pelo App no celular em tempo real.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" onClick={onCtaClick} className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold w-full sm:w-auto">
              Garantir tecnologia de ponta
            </Button>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-brand-gold/30 rounded-2xl blur-lg transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2664&auto=format&fit=crop" 
               alt="Painel Solar High Tech" 
               className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] grayscale-[20%]"
             />
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
                <div className="bg-brand-green p-2 rounded-lg text-brand-gold"><Cpu className="h-8 w-8" /></div>
                <div>
                  <p className="font-bold text-brand-green">Inversores Microprocessados</p>
                  <p className="text-xs text-slate-600">Eficiência máxima mesmo em dias nublados</p>
                </div>
             </div>
          </div>

        </div>
      </MotionSection>
      
      {/* Smooth curve to footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
         <svg viewBox="0 0 1440 48" className="w-full h-[48px] fill-brand-green" preserveAspectRatio="none">
            <path d="M0,48 L1440,48 L1440,0 C1000,40 400,40 0,0 Z"></path>
         </svg>
      </div>
    </div>
  );
};