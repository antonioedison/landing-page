import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Emagreça com <span className="text-yellow-500">Saúde</span> e <br className="hidden lg:block"/>
              <span className="text-brand-600">Transforme Seu Corpo</span> <br className="hidden lg:block"/>
              de Forma leve e Saudável
            </h1>
            
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
              Descubra o ebook completo e prático que já ajudou centenas de pessoas a alcançarem o corpo dos sonhos sem sofrimento, com orientações passo a passo e rotinas simples que cabem no seu dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button onClick={scrollToPricing} variant="primary">
                Quero Emagrecer com Saúde
              </Button>
              <Button onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })} variant="outline-green">
                Conheça o Método
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2070&auto=format&fit=crop" 
                alt="Mulher saudável correndo no parque" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Abstract Background Decoration */}
            <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-100/50 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};