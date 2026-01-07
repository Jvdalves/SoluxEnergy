import React from 'react';
import { MotionSection } from '../components/MotionSection';
import { Card, CardContent, CardHeader, CardTitle, Button } from '../components/ui';
import { Smartphone, Car, GraduationCap, ArrowRight } from 'lucide-react';

interface ArgumentProps {
  onCtaClick: () => void;
}

export const Argument: React.FC<ArgumentProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-brand-green py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold blur-[150px] rounded-full"></div>
      </div>

      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            O que você faria com <span className="text-brand-gold">R$ 800,00</span> a mais todo mês?
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Esse é o valor médio desperdiçado na conta de luz. Veja o que esse dinheiro compraria se ficasse no seu bolso:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: 1 Ano - White Card, Green Text (High Contrast) */}
          <Card className="border-0 bg-white shadow-2xl hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 text-slate-900">
                <Smartphone size={32} />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Em 1 Ano</span>
              </div>
              <CardTitle className="text-slate-900 text-xl">iPhone 15 Pro Max</CardTitle>
              {/* FIXED: Green Text on White Background */}
              <div className="text-3xl font-black text-brand-green mt-2">R$ 10.000</div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed text-sm">
                Todo ano, você entrega um smartphone de topo de linha (ou uma viagem incrível de casal) para a concessionária.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: 5 Anos - White Card, Green Text (High Contrast) */}
          <Card className="border-2 border-brand-gold bg-white shadow-[0_0_30px_rgba(253,203,3,0.15)] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-brand-gold text-brand-green text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Objeto de Desejo
            </div>
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
                <Car size={32} />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Em 5 Anos</span>
              </div>
              <CardTitle className="text-slate-900 text-xl">Troca de Carro / Moto</CardTitle>
              {/* FIXED: Green Text on White Background */}
              <div className="text-3xl font-black text-brand-green mt-2">R$ 60.000+</div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed text-sm">
                Em 5 anos, sua conta de luz pagou a entrada de um carro de luxo ou uma moto zero. Mas quem está dirigindo não é você.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: 25 Anos - DARK Card, Gold Text (High Contrast) */}
          {/* Using a very dark green (darker than section bg) to make it pop, with Gold text */}
          <Card className="border-0 bg-[#002212] text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden ring-1 ring-white/10 scale-105 z-10">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-brand-gold">
                <GraduationCap size={32} />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-brand-gold/80 uppercase tracking-wider">Longo Prazo</span>
              </div>
              <CardTitle className="text-white text-xl">Futuro dos Filhos</CardTitle>
              {/* FIXED: Gold Text on Dark Background */}
              <div className="text-3xl font-black text-brand-gold mt-2">R$ 500.000+</div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed text-sm">
                Ao longo da vida útil do sistema, a economia acumulada paga uma faculdade de medicina ou garante sua aposentadoria.
              </p>
            </CardContent>
          </Card>

        </div>

        <div className="mt-16 text-center">
            <Button size="xl" onClick={onCtaClick} className="group text-brand-green bg-brand-gold hover:bg-white hover:scale-105 shadow-lg shadow-black/20">
                QUERO ESSES RESULTADOS PARA MIM
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-slate-400 text-sm">
              *Valores estimados considerando inflação energética média.
            </p>
        </div>
      </MotionSection>
      
      {/* Wave transition to next section (White) */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-[60px] sm:h-[120px] fill-white" preserveAspectRatio="none">
             <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};