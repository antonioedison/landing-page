import React from 'react';
import { Button } from './Button';
import { Check, Rocket } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-600">
      <div className="container mx-auto px-4 text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Chegou a Hora de Transformar Seu<br/>Corpo e Sua Vida!
        </h2>
        <p className="text-brand-100 text-lg mb-12 max-w-3xl mx-auto">
          Não deixe para amanhã a mudança que você pode começar hoje. Junte-se a centenas de pessoas que já transformaram suas vidas com nosso método comprovado.
        </p>

        {/* Card */}
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl max-w-xl mx-auto overflow-hidden p-8 md:p-12 relative z-10">
          
          <h3 className="text-xl font-bold mb-6 text-gray-900">Tudo Isso por Apenas:</h3>
          
          {/* Ebook Cover Recreation */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 md:w-56 aspect-[2/3] bg-gray-800 rounded-r-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer group overflow-hidden border-l-8 border-black">
              {/* Cover Image */}
              <img 
                src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Capa do Ebook Emagreça com Saúde com um fundo de praia sereno ao pôr do sol" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

              {/* Spine Effect */}
              <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent"></div>

              {/* Title Text Overlay matching the reference */}
              <div className="absolute top-10 left-0 right-0 text-center z-10 px-2 flex flex-col items-center">
                <h3 className="text-white font-bold text-3xl tracking-wide leading-none" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Emagreça</h3>
                <span className="text-white font-bold text-[10px] uppercase tracking-widest my-1" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>Com</span>
                <h3 className="text-yellow-300 font-extrabold text-4xl tracking-tight leading-none" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Saúde</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mb-6">
            <span className="text-gray-400 text-lg line-through decoration-red-500">De R$ 175,00</span>
            <div className="text-red-600 font-extrabold text-6xl my-2">
              R$ 97,00
            </div>
            <span className="text-gray-500 text-sm">Oferta por tempo limitado</span>
          </div>

          <div className="space-y-3 text-left mb-8 max-w-sm mx-auto">
             {[
               "Acesso completo aos 8 capítulos do ebook",
               "Suporte direto para tirar suas dúvidas",
               "Garantia de 7 dias - 100% do seu dinheiro de volta"
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-3">
                 <div className="mt-1 rounded-full border border-brand-600 p-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
                 </div>
                 <span className="text-gray-700 font-medium text-sm">{item}</span>
               </div>
             ))}
          </div>
          
          <a href="https://pay.hotmart.com/H102906850D?checkoutMode=10" target="_blank" rel="noopener noreferrer">
            <Button fullWidth className="bg-brand-600 hover:bg-brand-700 text-white text-lg py-4 mb-4">
              QUERO COMEÇAR AGORA! <Rocket className="w-5 h-5 ml-2 inline" />
            </Button>
          </a>

          <p className="text-xs text-gray-400">
            Pagamento 100% seguro via Hotmart
          </p>

        </div>
      </div>
    </section>
  );
};