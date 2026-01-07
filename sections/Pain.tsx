import React from 'react';
import { MotionSection } from '../components/MotionSection';
import { Button } from '../components/ui';
import { TrendingDown, AlertTriangle } from 'lucide-react';

interface PainProps {
  onCtaClick: () => void;
}

export const Pain: React.FC<PainProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-white pb-20 pt-10 lg:pb-32 lg:pt-16">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-1 text-sm font-bold text-red-700 mb-6 border border-red-100">
              <AlertTriangle className="h-4 w-4" />
              <span>Pare de perder dinheiro</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Sua conta de luz é um aluguel que <span className="text-red-600">nunca acaba</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Imagine alugar um apartamento e, depois de 30 anos pagando, ele ainda não ser seu. É isso que você faz com a Equatorial.
              <br/><br/>
              O gráfico ao lado mostra a realidade nua e crua: ou você compra o ativo (Solar) ou paga o triplo pelo aluguel (Conta de Luz).
            </p>
            <Button variant="secondary" size="lg" onClick={onCtaClick} className="w-full sm:w-auto shadow-xl shadow-brand-green/20">
              QUERO DEMITIR A CONCESSIONÁRIA
            </Button>
          </div>

          {/* Fixed Chart Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl bg-slate-50 p-8 border border-slate-200 shadow-xl">
               
               <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
                 <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Custo em 25 Anos</p>
                    <p className="text-xs text-slate-400">Inflação energética média de 10% a.a.</p>
                 </div>
                 <span className="bg-white border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded font-bold shadow-sm">Base: R$ 800/mês</span>
               </div>
               
               {/* Chart Area */}
               <div className="flex items-end justify-center gap-8 h-72 w-full pb-4">
                  
                  {/* Bar 1: Equatorial (The Loss) */}
                  <div className="flex flex-col items-center justify-end h-full w-1/3 group">
                    <div className="relative w-full bg-red-500 rounded-t-lg shadow-lg shadow-red-500/30 flex items-start justify-center pt-4 transition-all hover:bg-red-600" style={{ height: '90%' }}>
                      <span className="text-white font-black text-lg sm:text-xl drop-shadow-md text-center leading-tight">
                        - R$ 1.08<br/><span className="text-sm opacity-90 font-medium">Milhões</span>
                      </span>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-slate-800 text-sm uppercase">Equatorial</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-red-600 font-bold mt-1">
                        <TrendingDown size={12} />
                        Despesa Perdida
                      </div>
                    </div>
                  </div>

                  {/* Bar 2: Solux (The Gain) */}
                  <div className="flex flex-col items-center justify-end h-full w-1/3 group">
                    <div className="relative w-full bg-brand-green rounded-t-lg shadow-lg shadow-brand-green/30 flex items-start justify-center pt-2 transition-all hover:bg-[#002A16]" style={{ height: '15%' }}>
                       <div className="absolute -top-14 bg-green-100 border border-green-200 text-brand-green text-xs font-bold py-2 px-3 rounded-lg shadow-sm whitespace-nowrap z-10">
                        Investimento Único
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-green-100 border-r border-b border-green-200"></div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-slate-800 text-sm uppercase">Solux Energy</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-brand-green font-bold mt-1">
                        <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                        Patrimônio Seu
                      </div>
                    </div>
                  </div>

               </div>
            </div>
          </div>

        </div>
      </MotionSection>
      
      {/* Wave transition to next section (Dark Green) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-[99%]">
         <svg viewBox="0 0 1440 100" className="w-full h-[60px] sm:h-[100px] fill-brand-green" preserveAspectRatio="none">
            <path d="M0,50 C320,120 420,0 740,50 C1060,100 1140,20 1440,50 L1440,100 L0,100 Z"></path>
         </svg>
      </div>
    </div>
  );
};