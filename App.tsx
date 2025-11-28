import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { CourseContent } from './components/CourseContent';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <CourseContent />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;