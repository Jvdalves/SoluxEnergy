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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-gold selection:text-brand-navy">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md shadow-sm transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold to-amber-600 text-brand-navy shadow-lg shadow-amber-500/20">
              <Zap className="h-6 w-6 fill-brand-navy" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Solux<span className="text-brand-gold">Energy</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" onClick={scrollToForm} className="hidden sm:inline-flex font-bold">
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

      <footer className="bg-brand-navy border-t border-slate-800 py-12 text-center text-slate-400 text-sm">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 text-white font-semibold text-lg">Solux Energy</p>
          <p>&copy; {new Date().getFullYear()} Solux Energy. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ 00.000.000/0001-00</p>
          <p className="mt-8 text-xs text-slate-600">
            Desenvolvido para fins demonstrativos.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;