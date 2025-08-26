"use client";

import Link from 'next/link';
import { useState } from 'react';
import logo from '@/assets/icone.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container px-4 mt-4">
        <div className="flex items-center justify-between">
          {/* Logo*/}
          <Link href="/" className="text-xl font-bold text-gray-800 mr-auto">
            <div className="flex items-center justify-center">
              <img src={logo.src} alt="Conex Digital" className="h-12" />
            </div>
          </Link>

          {/* Menu de Navegação */}
          <nav className="hidden md:flex mx-auto space-x-8 px-6 py-5 glass text-lg font-semibold">
            <Link href="/" className="text-conex-azul hover:text-conex-azul-light transition-colors duration-300">
              Inicio
            </Link>
            <Link href="/sobre" className="text-conex-azul hover:text-conex-azul-light transition-colors duration-300">
              Seja Parceiro
            </Link>
            <Link href="/servicos" className="text-conex-azul hover:text-conex-azul-light transition-colors duration-300">
              Certificado Digital
            </Link>
            <Link href="/contato" className="text-conex-azul hover:text-conex-azul-light transition-colors duration-300">
              Contato
            </Link>
            <Link href="/sobre" className="text-conex-azul hover:text-conex-azul-light transition-colors duration-300">
              Sobre
            </Link>
          </nav>

          {/* Botão Mobile */}
          <button 
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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

        {/* Menu Mobile (SEM ALTERAÇÕES) */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
                Home
              </Link>
              <Link href="/sobre" className="text-gray-600 hover:text-blue-500 transition">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-600 hover:text-blue-500 transition">
                Serviços
              </Link>
              <Link href="/contato" className="text-gray-600 hover:text-blue-500 transition">
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}