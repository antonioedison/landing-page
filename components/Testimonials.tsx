import React from 'react';
import { Star, Check } from 'lucide-react';
import { TestimonialType } from '../types';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Carla Mendes",
    role: "Perdeu 15kg em 3 meses",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote: "Perdi 15kg em 3 meses seguindo o ebook! O melhor é que não passei fome e aprendi a comer de verdade. Minha autoestima voltou e me sinto incrível!",
    rating: 5
  },
  {
    id: 2,
    name: "Juliana Santos",
    role: "Emagreceu 10kg com saúde",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "Já tinha tentado várias dietas e nada funcionava. Este ebook me ensinou que é possível emagrecer de forma leve e saudável. Recomendo muito!",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Paula Costa",
    role: "Resultados em 6 semanas",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    quote: "Achei que seria difícil, mas o método é super prático. Consegui encaixar na minha rotina corrida e os resultados apareceram rapidinho. Estou muito feliz!",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformações Reais de Quem Já Usou o Ebook e obteve resultados
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Veja os resultados de pessoas como você que decidiram transformar suas vidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">"{testimonial.quote}"</p>
              
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                <span className="text-brand-600 font-semibold text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};