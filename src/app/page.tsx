import React from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Solucoes from '@/components/sections/Solucoes';
import Empresa from '@/components/sections/Empresa';
import Produtos from '@/components/sections/Produtos';
import Processo from '@/components/sections/Processo';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>     
      <main>
        <div className="w-full">
            <Hero />
            <Solucoes />
            <Empresa />
            <Produtos />
            <Processo />
            <FAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}