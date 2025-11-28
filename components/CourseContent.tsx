import React from 'react';
import { ModuleType } from '../types';

const modules: ModuleType[] = [
  {
    id: 1,
    title: "Receitas de Chá para emagrecer",
    description: "Aprenda que o simples ato de tomar chá vai te ajudar a emagrecer, aprenda quais são eles.",
    iconName: "Coffee"
  },
  {
    id: 2,
    title: "Receitas rápidas e fáceis",
    description: "Receitas práticas e eficaz, com uma variedade de opções para sua alimentação diária, utilizando alimentos com baixa caloria.",
    iconName: "Zap"
  },
  {
    id: 3,
    title: "10 alimentos para perder peso",
    description: "Aqui você encontra os 10 alimentos para você consumir durante o processo de emagrecimento.",
    iconName: "Apple"
  },
  {
    id: 4,
    title: "Consumir água",
    description: "A importância de estar bem hidratado e como isso ajuda na perda de peso.",
    iconName: "Droplet"
  },
  {
    id: 5,
    title: "Café da manhã saudável",
    description: "Aprenda quais alimentos você vai escolher para o seu café do amanhã ser mais saudável.",
    iconName: "Sun"
  },
  {
    id: 6,
    title: "Alimentos que você deve evitar",
    description: "Alimentos que você não pode consumir no seu processo de emagrecimento.",
    iconName: "Ban"
  },
  {
    id: 7,
    title: "Tenha boas noites de sono",
    description: "Saiba a importância de dormir bem e como isso vai impactar na perde de peso.",
    iconName: "Moon"
  },
  {
    id: 8,
    title: "Exercícios",
    description: "Aqui você ira aprender qual o melhor e mais eficaz exercício para perder peso de forma simples e objetiva.",
    iconName: "Dumbbell"
  }
];

export const CourseContent: React.FC = () => {
  const formatId = (id: number) => id.toString().padStart(2, '0');

  // Specific Icon Mapping for this visual style
  const getIcon = (id: number) => {
    switch(id) {
      case 1: // Tea/Coffee
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" /></svg>
      case 2: // Fast/Recipes
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      case 3: // Healthy Food/Apple
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> 
      case 4: // Water
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
      case 5: // Morning/Sun
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      case 6: // Avoid/Ban
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
      case 7: // Sleep/Moon
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      case 8: // Exercise/Dumbbell
        return <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a6 6 0 1 1 12 0v2m0 6v2a6 6 0 1 1-12 0v-2m0-8V4m0 16v-4m12-8V4m0 16v-4" /></svg>
      default: return null;
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Vai Aprender no Ebook
          </h2>
          <p className="text-gray-500 text-lg">
            Um método completo dividido em 8 capítulos práticos e objetivos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Modules List */}
          <div className="w-full lg:w-1/2 space-y-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl border border-gray-100 p-6 flex gap-6 hover:border-brand-200 hover:shadow-sm transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                    {getIcon(module.id)}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    <span className="text-brand-300 mr-2">{formatId(module.id)}</span>
                    {module.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Images */}
          <div className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-32 h-fit">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
              alt="Acompanhamento e rotina no celular" 
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Mulher feliz se exercitando ao ar livre" 
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Para Quem É Este Ebook?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Este ebook é perfeito para você que quer emagrecer de forma saudável, sem dietas malucas ou treinos extremos. Ideal para quem tem rotina corrida, mas quer resultados reais e duradouros. Não importa se você nunca fez dieta antes ou já tentou várias vezes - aqui você vai aprender o método que realmente funciona!
          </p>
        </div>

      </div>
    </section>
  );
};