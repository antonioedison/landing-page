import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className={`text-2xl font-serif font-bold italic tracking-tight ${isScrolled ? 'text-brand-700' : 'text-white'}`}>
          Emagreça<span className={isScrolled ? 'text-yellow-500' : 'text-brand-300'}>Saúde</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Benefícios', 'Módulos', 'Depoimentos'].map((item, idx) => {
            const ids = ['details', 'details', 'testimonials']; // Simplified mapping
             return (
              <button 
                key={item}
                onClick={() => scrollTo(ids[idx] || 'pricing')}
                className={`text-sm font-medium hover:text-yellow-400 transition-colors ${isScrolled ? 'text-gray-700' : 'text-brand-100'}`}
              >
                {item}
              </button>
            )
          })}
          <a href="https://pay.hotmart.com/H102906850D?checkoutMode=10" target="_blank" rel="noopener noreferrer">
            <Button 
              variant={isScrolled ? 'primary' : 'primary'}
              className={!isScrolled ? 'shadow-none bg-brand-500 text-white hover:bg-white hover:text-brand-500' : ''}
              style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            >
              Baixe seu Ebook
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
             <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-4 md:hidden border-t border-gray-100">
           <button onClick={() => scrollTo('details')} className="text-gray-700 font-medium py-2">Benefícios</button>
           <button onClick={() => scrollTo('testimonials')} className="text-gray-700 font-medium py-2">Depoimentos</button>
           <a href="https://pay.hotmart.com/H102906850D?checkoutMode=10" target="_blank" rel="noopener noreferrer">
             <Button fullWidth>
               Baixe seu Ebook
             </Button>
           </a>
        </div>
      )}
    </header>
  );
};