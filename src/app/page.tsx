import React from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <div className="w-full">
            <Hero />
            {/* Adicione o restante do seu conteúdo aqui */}
        </div>
      </main>

      <Footer />
    </>
  );
}