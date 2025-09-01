'use client';

import { Shield, CheckCircle, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-conex-azul to-conex-primary"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Authority Badges */}
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div className="glass flex items-center gap-2 rounded-lg px-4 py-2 animate-fade-in">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium">ICP-Brasil</span>
            </div>
            <div className="glass flex items-center gap-2 rounded-lg px-4 py-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Award className="h-6 w-6" />
              <span className="text-sm font-medium">Receita Federal</span>
            </div>
            <div className="glass flex items-center gap-2 rounded-lg px-4 py-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CheckCircle className="h-6 w-6" />
              <span className="text-sm font-medium">Validade Jurídica</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Certificado Digital: Segurança e Praticidade para{" "}
            <span className="text-conex-azul-light">Agilizar seu Negócio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Emita seu Certificado Digital sem sair de casa, com a segurança e o suporte 
            de quem é referência no mercado. Válido para PJ, MEI e PF.
          </p>

          {/* CTA Button */}


          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center items-center gap-8 text-sm text-white/80 flex-wrap animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>100% Digital</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Emissão Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Suporte Especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;