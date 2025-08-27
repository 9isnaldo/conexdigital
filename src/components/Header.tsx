'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from '@/assets/icone.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsOverHero(window.scrollY < heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = isOverHero ? 'text-white' : 'text-gray-800';
  const hoverColorClass = isOverHero ? 'hover:text-conex-azul-light' : 'hover:text-conex-azul';
  const bgColorClass = 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColorClass}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center justify-center mt-6">
              <img src={logo.src} alt="Conex Digital" className="h-10 md:h-12" />
            </div>
          </Link>

          {/* Menu de Navegação para Desktop - Centralizado */}
          <nav className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-8 px-4 lg:px-6 py-5 mt-6 glass text-lg font-semibold ${textColorClass}`}>
            <Link href="/" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Inicio
            </Link>
            <Link href="/sobre" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Seja Parceiro
            </Link>
            <Link href="/servicos" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Certificado Digital
            </Link>
            <Link href="/contato" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Contato
            </Link>
            <Link href="/sobre" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Sobre
            </Link>
          </nav>

          {/* Espaço vazio para equilibrar o layout no mobile */}
          <div className="md:hidden"></div>

          {/* Botão Mobile */}
          <button 
            className={`md:hidden focus:outline-none ${textColorClass} z-50`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 pt-20 px-6">
            <button 
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col space-y-6 text-xl">
              <Link href="/" className="text-gray-800 hover:text-blue-500 transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link href="/sobre" className="text-gray-800 hover:text-blue-500 transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Seja Parceiro
              </Link>
              <Link href="/servicos" className="text-gray-800 hover:text-blue-500 transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Certificado Digital
              </Link>
              <Link href="/contato" className="text-gray-800 hover:text-blue-500 transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
              <Link href="/sobre" className="text-gray-800 hover:text-blue-500 transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}