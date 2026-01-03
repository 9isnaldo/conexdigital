'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import logo from '@/assets/icone.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [textColorClass, setTextColorClass] = useState('text-conex-white');
  const [hoverColorClass, setHoverColorClass] = useState('hover:text-conex-azul-light');
  const headerRef = useRef(null);

  useEffect(() => {
    const checkHeaderBackground = () => {
      if (!headerRef.current) return;
      
      const headerRect = headerRef.current.getBoundingClientRect();
      const headerBottom = headerRect.bottom;
      
      // Ponto de verificação logo abaixo do header
      const checkPointY = headerBottom + 5;
      const checkPointX = window.innerWidth / 2;
      
      // Encontra o elemento no ponto de verificação
      const elementBelow = document.elementFromPoint(checkPointX, checkPointY);
      
      if (!elementBelow) {
        setTextColorClass('text-conex-azul');
        setHoverColorClass('hover:text-conex-azul-light'); // CORREÇÃO: hover azul-light em fundo branco
        return;
      }

      // Verifica se é uma seção com HexagonBackground
      const sectionElement = elementBelow.closest('section') || elementBelow.closest('header');
      
      if (!sectionElement) {
        setTextColorClass('text-conex-azul');
        setHoverColorClass('hover:text-conex-azul-light'); // CORREÇÃO: hover azul-light em fundo branco
        return;
      }

      // Verifica se a seção tem HexagonBackground ou fundo azul
      const hasHexagonBackground = sectionElement.querySelector('.absolute.inset-0.z-0') !== null;
      const sectionStyles = window.getComputedStyle(sectionElement);
      const sectionBackgroundColor = sectionStyles.backgroundColor;
      
      // Cores azuis da CONEX
      const conexAzulRGB = 'rgb(27, 44, 51)';
      const conexPrimaryRGB = 'rgb(50, 85, 149)';
      
      // Verifica se tem fundo azul sólido
      const hasSolidBlueBackground = 
        sectionBackgroundColor === conexAzulRGB || 
        sectionBackgroundColor === conexPrimaryRGB;
      
      // Verifica classes de background azul
      const hasBlueBackgroundClass = 
        sectionElement.classList.contains('bg-conex-azul') ||
        sectionElement.classList.contains('bg-conex-primary') ||
        sectionElement.classList.contains('bg-gradient-to-br') ||
        sectionElement.classList.contains('bg-gradient-to-r');

      // Se tem HexagonBackground OU fundo azul, usa texto branco
      if (hasHexagonBackground || hasSolidBlueBackground || hasBlueBackgroundClass) {
        setTextColorClass('text-conex-white');
        setHoverColorClass('hover:text-conex-azul-light');
      } else {
        setTextColorClass('text-conex-azul');
        setHoverColorClass('hover:text-conex-azul-light');
      }
    };

    // Debounce para performance
    let timeoutId:any;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkHeaderBackground, 30);
    };

    // Observador de mutação para detectar mudanças no DOM
    const observer = new MutationObserver(debouncedCheck);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'] 
    });

    // Event listeners
    window.addEventListener('scroll', debouncedCheck, { passive: true });
    window.addEventListener('resize', debouncedCheck, { passive: true });
    
    // Verificação inicial com delay para garantir que o DOM está carregado
    const initialCheck = setTimeout(checkHeaderBackground, 100);
    
    // Verificação quando a rota muda (Next.js)
    const handleRouteChange = () => {
      setTimeout(checkHeaderBackground, 200);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialCheck);
      observer.disconnect();
      window.removeEventListener('scroll', debouncedCheck);
      window.removeEventListener('resize', debouncedCheck);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Efeito adicional para verificar quando o menu mobile é fechado
  useEffect(() => {
    if (!isOpen) {
      // Pequeno delay para garantir que a transição terminou
      setTimeout(() => {
        if (headerRef.current) {
          const checkHeaderBackground = () => {
            const headerRect = headerRef.current.getBoundingClientRect();
            const checkPointY = headerRect.bottom + 5;
            const checkPointX = window.innerWidth / 2;
            
            const elementBelow = document.elementFromPoint(checkPointX, checkPointY);
            
            if (!elementBelow) {
              setTextColorClass('text-conex-azul');
              setHoverColorClass('hover:text-conex-azul-light');
              return;
            }

            const sectionElement = elementBelow.closest('section') || elementBelow.closest('header');
            
            if (!sectionElement) {
              setTextColorClass('text-conex-azul');
              setHoverColorClass('hover:text-conex-azul-light');
              return;
            }

            const hasHexagonBackground = sectionElement.querySelector('.absolute.inset-0.z-0') !== null;
            const sectionStyles = window.getComputedStyle(sectionElement);
            const sectionBackgroundColor = sectionStyles.backgroundColor;
            
            const conexAzulRGB = 'rgb(27, 44, 51)';
            const conexPrimaryRGB = 'rgb(50, 85, 149)';
            
            const hasSolidBlueBackground = 
              sectionBackgroundColor === conexAzulRGB || 
              sectionBackgroundColor === conexPrimaryRGB;
            
            const hasBlueBackgroundClass = 
              sectionElement.classList.contains('bg-conex-azul') ||
              sectionElement.classList.contains('bg-conex-primary') ||
              sectionElement.classList.contains('bg-gradient-to-br') ||
              sectionElement.classList.contains('bg-gradient-to-r');

            if (hasHexagonBackground || hasSolidBlueBackground || hasBlueBackgroundClass) {
              setTextColorClass('text-conex-white');
              setHoverColorClass('hover:text-conex-azul-light');
            } else {
              setTextColorClass('text-conex-azul');
              setHoverColorClass('hover:text-conex-azul-light');
            }
          };
          
          checkHeaderBackground();
        }
      }, 50);
    }
  }, [isOpen]);

  // Fecha o menu mobile quando clica em um link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleLinkClick}>
            <div className="flex items-center justify-center mt-4">
              <img src={logo.src} alt="Conex Digital" className="h-10 md:h-12" />
            </div>
          </Link>

          <nav className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-8 px-4 lg:px-6 py-5 mt-6 glass text-lg font-semibold ${textColorClass}`}>
            <Link href="/" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Inicio
            </Link>
            <Link href="/parceria" className={`transition-colors duration-300 ${hoverColorClass}`}>
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
              className="absolute top-4 right-4 text-conex-azul"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col space-y-6 text-xl">
              <Link href="/" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={handleLinkClick}>
                Inicio
              </Link>
              <Link href="/parceria" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={handleLinkClick}>
                Seja Parceiro
              </Link>
              <Link href="/servicos" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={handleLinkClick}>
                Certificado Digital
              </Link>
              <Link href="/contato" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={handleLinkClick}>
                Contato
              </Link>
              <Link href="/sobre" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={handleLinkClick}>
                Sobre
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}