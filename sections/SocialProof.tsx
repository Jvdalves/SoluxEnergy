import React from 'react';
import { MotionSection } from '../components/MotionSection';
import { Button } from '../components/ui';
import { Play } from 'lucide-react';

interface SocialProofProps {
  onCtaClick: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onCtaClick }) => {
  return (
    <MotionSection className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-4">
            Não acredite na gente. <br className="hidden sm:block"/> Acredite nos seus vizinhos.
          </h2>
          <p className="text-lg text-slate-600">
            Famílias reais, resultados reais em Belém e Ananindeua.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-900 aspect-[9/16] shadow-xl">
              <img 
                 src={`https://picsum.photos/400/700?random=${item}`} 
                 alt={`Depoimento Cliente ${item}`}
                 className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold">Residencial Lago Azul</p>
                <p className="text-slate-300 text-sm">Economia de R$ 1.200/mês</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <Button size="lg" onClick={onCtaClick}>
              Quero ter esses resultados
           </Button>
        </div>
      </div>
    </MotionSection>
  );
};