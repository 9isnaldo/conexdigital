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
    const checkBackgroundColor = () => {
      if (!headerRef.current) return;
      
      // Obtém a posição do header
      const headerRect = headerRef.current.getBoundingClientRect();
      const headerBottom = headerRect.bottom;
      
      // Encontra o elemento abaixo do header
      const elementsBelow = document.elementsFromPoint(
        window.innerWidth / 2,
        headerBottom + 5
      );
      
      // Procura por um elemento com fundo azul (conex-azul ou conex-primary)
      const blueBackgroundElement = elementsBelow.find(el => {
        const styles = window.getComputedStyle(el);
        const backgroundColor = styles.backgroundColor;
        
        // Verifica se a cor de fundo é azul (valores RGB das cores CONEX)
        const isConexAzul = backgroundColor === 'rgb(27, 44, 51)'; // #1b2c33
        const isConexPrimary = backgroundColor === 'rgb(50, 85, 149)'; // #325595
        
        // Verifica também gradientes que contenham essas cores
        const hasConexAzulGradient = 
          styles.backgroundImage.includes('#1b2c33') || 
          styles.backgroundImage.includes('rgb(27, 44, 51)') ||
          styles.backgroundImage.includes('conex-azul');
        
        const hasConexPrimaryGradient = 
          styles.backgroundImage.includes('#325595') || 
          styles.backgroundImage.includes('rgb(50, 85, 149)') ||
          styles.backgroundImage.includes('conex-primary');
        
        return isConexAzul || isConexPrimary || hasConexAzulGradient || hasConexPrimaryGradient;
      });
      
      if (blueBackgroundElement) {
        setTextColorClass('text-conex-white');
        setHoverColorClass('hover:text-conex-azul-light');
      } else {
        setTextColorClass('text-conex-azul');
        setHoverColorClass('hover:text-conex-azul-light');
      }
    };

    const handleScroll = () => {
      checkBackgroundColor();
    };

    // Verificação instantânea usando MutationObserver para detectar mudanças no DOM
    const observer = new MutationObserver(checkBackgroundColor);
    
    // Observa mudanças em todo o documento
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'] 
    });

    // Verifica a cor imediatamente
    checkBackgroundColor();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Efeito adicional para verificar a cor quando o caminho da URL muda
  useEffect(() => {
    // Pequeno timeout para garantir que o DOM foi atualizado após a navegação
    const timer = setTimeout(() => {
      if (headerRef.current) {
        const checkBackgroundColor = () => {
          const headerRect = headerRef.current.getBoundingClientRect();
          const headerBottom = headerRect.bottom;
          
          const elementsBelow = document.elementsFromPoint(
            window.innerWidth / 2,
            headerBottom + 5
          );
          
          const blueBackgroundElement = elementsBelow.find(el => {
            const styles = window.getComputedStyle(el);
            const backgroundColor = styles.backgroundColor;
            
            const isConexAzul = backgroundColor === 'rgb(27, 44, 51)';
            const isConexPrimary = backgroundColor === 'rgb(50, 85, 149)';
            
            const hasConexAzulGradient = 
              styles.backgroundImage.includes('#1b2c33') || 
              styles.backgroundImage.includes('rgb(27, 44, 51)') ||
              styles.backgroundImage.includes('conex-azul');
            
            const hasConexPrimaryGradient = 
              styles.backgroundImage.includes('#325595') || 
              styles.backgroundImage.includes('rgb(50, 85, 149)') ||
              styles.backgroundImage.includes('conex-primary');
            
            return isConexAzul || isConexPrimary || hasConexAzulGradient || hasConexPrimaryGradient;
          });
          
          if (blueBackgroundElement) {
            setTextColorClass('text-conex-white');
            setHoverColorClass('hover:text-conex-azul-light');
          } else {
            setTextColorClass('text-conex-azul');
            setHoverColorClass('hover:text-conex-azul-light');
          }
        };
        
        checkBackgroundColor();
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [typeof window !== 'undefined' ? window.location.pathname : '']);

  const bgColorClass = 'bg-transparent';

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColorClass}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center justify-center mt-4">
              <img src={logo.src} alt="Conex Digital" className="h-10 md:h-12" />
            </div>
          </Link>

          {/* Menu de Navegação para Desktop - Centralizado */}
          <nav className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-8 px-4 lg:px-6 py-5 mt-6 glass text-lg font-semibold ${textColorClass}`}>
            <Link href="/" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Inicio
            </Link>
            <Link href="../parceria" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Seja Parceiro
            </Link>
            <Link href="/servicos" className={`transition-colors duration-300 ${hoverColorClass}`}>
              Certificado Digital
            </Link>
            <Link href="../contato" className={`transition-colors duration-300 ${hoverColorClass}`}>
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
              className="absolute top-4 right-4 text-conex-azul"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col space-y-6 text-xl">
              <Link href="/" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link href="/parceria" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Seja Parceiro
              </Link>
              <Link href="/servicos" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Certificado Digital
              </Link>
              <Link href="/contato" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
              <Link href="/sobre" className="text-conex-azul hover:text-conex-azul-light transition py-2 border-b" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}