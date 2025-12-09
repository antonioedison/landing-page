import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
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
            
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed max-w-xl">
              <p className="font-medium text-gray-800">
                E se você pudesse perder até 10 kg em 8 semanas… sem sofrer, sem restrições absurdas e sem sentir que está lutando contra si mesma?
              </p>
              <p>
                Muitas pessoas acreditam que emagrecer é difícil, cansativo e frustrante… mas isso só acontece quando você tenta fazer isso sozinha.
              </p>
              <p>
                O e-book <span className="font-semibold text-brand-600">“Emagreça com Saúde”</span> foi criado exatamente para te guiar por um caminho leve, realista e possível. 
                Nele, você vai descobrir um método claro, organizado e comprovado, que já ajudou várias pessoas a recuperarem a autoestima, a disposição e o controle da própria vida.
              </p>
              <p className="italic text-gray-700 bg-brand-50 p-4 rounded-lg border-l-4 border-brand-500">
                Imagine você abrindo seu guarda-roupa e voltando a vestir aquela roupa que você ama… 
                Imagine se olhar no espelho e sentir orgulho, sentir leveza, sentir que finalmente está chegando onde sempre quis chegar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://pay.hotmart.com/H102906850D?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  Quero Emagrecer com Saúde
                </Button>
              </a>
              <Button onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })} variant="outline-green">
                Conheça o Método
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mulher feliz e saudável ao ar livre, representando o resultado do emagrecimento com saúde." 
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