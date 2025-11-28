import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
            Não Deixe Para Amanhã O Que Pode Mudar Sua Vida Hoje!
          </h2>
          <p className="text-gray-500 mb-8">
            Cada dia que você adia a mudança é um dia a mais longe do seu objetivo.
          </p>
          <Button className="bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 px-8 rounded shadow-lg text-sm md:text-base">
            👍 Clique Agora Mesmo e Garanta Seu Ebook Antes Que o Preço Suba!
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Emagreça com Saúde. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
             <a href="#" className="hover:text-gray-600">Termos de Uso</a>
             <span>|</span>
             <a href="#" className="hover:text-gray-600">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
};