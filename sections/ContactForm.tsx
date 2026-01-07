import React, { useState } from 'react';
import { MotionSection } from '../components/MotionSection';
import { Button, Input, Label, Select, Card, CardContent, CardHeader, CardTitle } from '../components/ui';
import { CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact-form" className="bg-brand-green py-20 lg:py-32 text-center px-4">
        <div className="mx-auto max-w-md bg-white rounded-2xl p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-brand-green mb-2">Solicitação Recebida!</h3>
          <p className="text-slate-600 mb-8">
            Nossa equipe de engenharia entrará em contato pelo WhatsApp em instantes para agendar sua análise técnica.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Voltar</Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="bg-brand-green py-20 lg:py-32 relative">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold opacity-5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              O sol de amanhã pode gerar <span className="text-brand-gold">lucro</span> ou despesa.
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-lg">
              Pare de financiar a ineficiência da concessionária. Preencha o formulário para receber sua Análise de Viabilidade Econômica.
            </p>
            <ul className="space-y-6 text-slate-200">
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold text-brand-green font-bold text-sm">1</div>
                <span className="font-medium">Sem compromisso financeiro</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold text-brand-green font-bold text-sm">2</div>
                <span className="font-medium">Dimensionamento exato (Engenharia)</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold text-brand-green font-bold text-sm">3</div>
                <span className="font-medium">Retorno de investimento calculado</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <MotionSection delay={0.2}>
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
                <CardHeader className="pb-2 text-center border-b border-slate-100 mb-4">
                  <CardTitle className="text-xl text-brand-green uppercase tracking-wide font-bold">Proposta Personalizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-600 font-semibold">Nome Completo</Label>
                      <Input id="name" placeholder="Digite seu nome" required className="bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-slate-600 font-semibold">WhatsApp</Label>
                      <Input id="whatsapp" placeholder="(91) 99999-9999" type="tel" required className="bg-slate-50 border-slate-200 focus:bg-white"/>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="neighborhood" className="text-slate-600 font-semibold">Bairro ou Condomínio</Label>
                      <Input id="neighborhood" placeholder="Ex: Batista Campos" required className="bg-slate-50 border-slate-200 focus:bg-white"/>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bill" className="text-slate-600 font-semibold">Média da Conta de Luz</Label>
                      <Select id="bill" required className="bg-slate-50 border-slate-200 focus:bg-white text-slate-700">
                        <option value="">Selecione o valor aproximado</option>
                        <option value="500-1000">R$ 500 a R$ 1.000</option>
                        <option value="1000-2000">R$ 1.000 a R$ 2.000</option>
                        <option value="2000+">Acima de R$ 2.000</option>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-base font-bold bg-brand-gold hover:bg-[#E5B800] text-brand-green mt-4 h-14"
                      disabled={loading}
                    >
                      {loading ? 'Enviando...' : 'QUERO MINHA ANÁLISE GRÁTIS'}
                    </Button>
                    
                    <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      Seus dados estão 100% seguros.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </MotionSection>
          </div>

        </div>
      </div>
    </section>
  );
};