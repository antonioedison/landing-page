import React from 'react';
import { Heart, Target, ShieldCheck, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Saúde em Primeiro Lugar",
    description: "Aprenda a emagrecer sem dietas extremas que prejudicam seu corpo",
    icon: Heart
  },
  {
    title: "Método Prático e Simples",
    description: "Aplique no dia a dia sem complicação, seguindo um passo a passo claro",
    icon: Target
  },
  {
    title: "Compra 100% Segura",
    description: "Suporte imediato para qualquer dúvida ou necessidade durante seu processo",
    icon: ShieldCheck
  },
  {
    title: "Rotina Leve e Sustentável",
    description: "Crie hábitos saudáveis que você mantém para sempre",
    icon: Sparkles
  },
  {
    title: "Resultados Reais",
    description: "Veja mudanças visíveis no corpo e na disposição rapidamente",
    icon: TrendingUp
  },
  {
    title: "Mais Energia e Autoestima",
    description: "Sinta-se confiante, leve e cheia de vitalidade todos os dias",
    icon: CheckCircle
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="details" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Vai Conquistar
          </h2>
          <p className="text-brand-600/80 text-lg">
            Transforme sua vida com um método completo e eficaz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};