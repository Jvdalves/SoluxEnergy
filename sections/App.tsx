import React from 'react';
import { Hero } from './sections/Hero';
import { Pain } from './sections/Pain';
import { Argument } from './sections/Argument';
import { SocialProof } from './sections/SocialProof';
import { Concierge } from './sections/Concierge';
import { Technology } from './sections/Technology';
import { ContactForm } from './sections/ContactForm';
import { Button } from './components/ui';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-gold selection:text-brand-green">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-green/95 backdrop-blur-md shadow-lg transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-brand-green shadow-lg shadow-brand-gold/20 group-hover:scale-105 transition-transform">
              <Zap className="h-6 w-6 fill-brand-green" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:opacity-90 transition-opacity">
              Solux<span className="text-brand-gold">Energy</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" onClick={scrollToForm} className="hidden sm:inline-flex font-bold text-brand-green bg-brand-gold hover:bg-white">
              Simular Economia
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-0">
        <Hero onCtaClick={scrollToForm} />
        <Pain onCtaClick={scrollToForm} />
        <Argument onCtaClick={scrollToForm} />
        <SocialProof onCtaClick={scrollToForm} />
        <Concierge onCtaClick={scrollToForm} />
        <Technology onCtaClick={scrollToForm} />
        <ContactForm />
      </main>

      <footer className="bg-brand-green border-t border-brand-green/50 py-16 text-center text-slate-400 text-sm">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="h-8 w-8 bg-brand-gold rounded flex items-center justify-center text-brand-green"><Zap size={16} fill="currentColor"/></div>
             <span className="text-xl font-bold text-white">Solux Energy</span>
          </div>
          <p className="max-w-xs mx-auto mb-8 text-slate-500">Energia solar de alta performance para residências e comércios em Belém e Região.</p>
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Solux Energy. Todos os direitos reservados.</p>
          <p className="mt-2 text-slate-600 text-xs">CNPJ 00.000.000/0001-00</p>
        </div>
      </footer>
    </div>
  );
};

export default App;