import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas muitas alunas relatam sentir diferenças na disposição e no corpo já nas primeiras duas semanas seguindo o método."
  },
  {
    question: "Esse método funciona para qualquer idade?",
    answer: "Sim! O método foi desenvolvido pensando em mulheres de todas as idades, com adaptações para diferentes ritmos de vida e necessidades metabólicas."
  },
  {
    question: "Preciso ir à academia?",
    answer: "Não é obrigatório. O módulo de exercícios inclui opções que podem ser feitas 100% em casa, sem equipamentos. Se você já vai à academia, pode complementar com nossos treinos."
  },
  {
    question: "E se eu não gostar do ebook?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que não é para você, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro."
  },
  {
    question: "O ebook é difícil de seguir?",
    answer: "Não! A linguagem é simples e direta, e as orientações são práticas para você aplicar no seu dia a dia sem complicações."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Perguntas Frequentes</h2>
          <p className="text-gray-500">Tire suas dúvidas antes de começar sua transformação</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 bg-white text-gray-600 leading-relaxed text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};