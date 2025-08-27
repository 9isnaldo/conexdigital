import React from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Solucoes from '@/components/sections/Solucoes';
import Empresa from '@/components/sections/Empresa';
import Produtos from '@/components/sections/Produtos';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <div className="w-full">
            <Hero />
            <Solucoes />
            <Empresa />
            <Produtos />
        </div>
      </main>

      <Footer />
    </>
  );
}